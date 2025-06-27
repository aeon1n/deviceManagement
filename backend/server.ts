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
  origin: "http://localhost:5173",
});

server.get("/devices", async (): Promise<Device[]> => {
  return db
    .select({
      name: deviceTable.name,
      ip: deviceTable.ip,
      os: deviceTable.os,
      status: deviceTable.status,
      roomId: deviceTable.room,
      roomName: roomTable.name,
    })
    .from(deviceTable)
    .leftJoin(roomTable, eq(deviceTable.room, roomTable.id));
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
