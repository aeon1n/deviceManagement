import fastify from "fastify";
import cors from "@fastify/cors";

import type { Device } from "./types";

const server = fastify();

server.register(cors, {
  origin: "http://localhost:5173",
});

server.get("/devices", async (request, reply): Promise<Device[]> => {
  return [
    {
      name: "PC0584",
      ip: "93.202.78.156",
      os: "Windows Server",
      room: "ITA-7",
      status: "online",
    },
    {
      name: "HP ProLiant DL380",
      ip: "192.168.2.2",
      os: "Windows Server 2019",
      room: "ITA-7",
      status: "offline",
    },
    {
      name: "Lenovo ThinkSystem SR650",
      ip: "192.168.2.3",
      os: "CentOS 8",
      room: "ITA-7",
      status: "online",
    },
  ];
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
