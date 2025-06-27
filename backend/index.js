"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const cors_1 = __importDefault(require("@fastify/cors"));
const server = (0, fastify_1.default)();
server.register(cors_1.default, {
    origin: "http://localhost:5173",
});
server.get("/devices", async (request, reply) => {
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
const start = async () => {
    try {
        await server.listen({ port: 8080 });
    }
    catch (err) {
        server.log.error(err);
        process.exit(1);
    }
};
start();
