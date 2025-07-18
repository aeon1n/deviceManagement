import fastify from "fastify";
import cors from "@fastify/cors";

import type { Device } from "./types/types";
import "dotenv/config";

import { drizzle } from "drizzle-orm/libsql";
import { deviceTable, roomTable } from "./db/schema";
import { eq } from "drizzle-orm";

const db = drizzle(process.env.DB_FILE_NAME!);
const server = fastify();

server.register(cors, {
  origin: ["http://localhost:3000"],
  methods: ["GET", "POST", "DELETE", "PUT", "PATCH"],
});

server.get("/devices", async (): Promise<Device[]> => {
  return db
    .select({
      id: deviceTable.id,
      name: deviceTable.name,
      ip: deviceTable.ip,
      os: deviceTable.os,
      status: deviceTable.status,
      roomId: deviceTable.roomId,
      roomName: roomTable.name,
    })
    .from(deviceTable)
    .leftJoin(roomTable, eq(deviceTable.roomId, roomTable.id));
});

server.post("/createDevice", async (request, reply) => {
  try {
    const body = request.body as Device;
    await db.insert(deviceTable).values(body);
    reply.code(200);
  } catch (error) {
    reply.code(500).send({ error: "Failed to create device" });
  }
});

server.get("/rooms", async (request, reply) => {
  try {
    let data = db.select().from(roomTable);

    reply.code(200);
    return data;
  } catch (error) {
    reply.code(500).send({ error: "Failed to fetch Rooms" });
  }
});

server.delete("/delete/:id", async (request, reply) => {
  const { id } = request.params as { id: number };

  try {
    await db.delete(deviceTable).where(eq(deviceTable.id, id));
    return reply.code(204).send();
  } catch (error) {
    console.log(error);
    return reply.code(500).send({ error: "Internal Server Error" });
  }
});

server.patch("/update/:id", async (request, reply) => {
  const { id } = request.params as { id: number };
  const body = request.body as Partial<Device>;

  try {
    await db.update(deviceTable).set(body).where(eq(deviceTable.id, id));
    return reply.code(200).send({ message: "Device updated successfully" });
  } catch (error) {
    return reply.code(500).send({ error: "Failed to update device" });
  }
});

const start = async (): Promise<void> => {
  try {
    await server.listen({ port: 8080, host: "0.0.0.0" });
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};

start();
