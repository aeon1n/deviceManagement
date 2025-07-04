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
  origin: ["http://localhost:5173", "http://192.168.2.136:5173"],
  methods: ["GET", "POST", "DELETE", "PUT", "OPTIONS"],
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

server.post("/rooms", async (request, reply) => {
  try {
    let data = db.select().from(roomTable);
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

const start = async (): Promise<void> => {
  try {
    await server.listen({ port: 8080 });
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};

start();
