import fastify from "fastify";
import cors from "@fastify/cors";

const server = fastify();
server.register(cors, {
  origin: "http://localhost:5173",
});

interface Device {
  name: string;
  ip: string;
  os: string;
  room: string;
  status: string;
}

server.get("/devices", async (request, reply): Promise<Device[]> => {
  return [
    {
      name: "Dell XPS1 Server",
      ip: "192.168.2.1",
      os: "Ubuntu Server",
      room: "Room 411.2",
      status: "online",
    },
    {
      name: "HP ProLiant DL380",
      ip: "192.168.2.2",
      os: "Windows Server 2019",
      room: "Room 412.1",
      status: "offline",
    },
    {
      name: "Lenovo ThinkSystem SR650",
      ip: "192.168.2.3",
      os: "CentOS 8",
      room: "Room 413.3",
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
