"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const cors_1 = __importDefault(require("@fastify/cors"));
require("dotenv/config");
const libsql_1 = require("drizzle-orm/libsql");
const schema_1 = require("./db/schema");
const drizzle_orm_1 = require("drizzle-orm");
const db = (0, libsql_1.drizzle)(process.env.DB_FILE_NAME);
const server = (0, fastify_1.default)();
server.register(cors_1.default, {
    origin: ["http://localhost:5173", "http://192.168.2.136:5173"],
    methods: ["GET", "POST", "DELETE", "PUT", "OPTIONS"],
});
server.get("/devices", async () => {
    return db
        .select({
        id: schema_1.deviceTable.id,
        name: schema_1.deviceTable.name,
        ip: schema_1.deviceTable.ip,
        os: schema_1.deviceTable.os,
        status: schema_1.deviceTable.status,
        roomId: schema_1.deviceTable.roomId,
        roomName: schema_1.roomTable.name,
    })
        .from(schema_1.deviceTable)
        .leftJoin(schema_1.roomTable, (0, drizzle_orm_1.eq)(schema_1.deviceTable.roomId, schema_1.roomTable.id));
});
server.post("/createDevice", async (request, reply) => {
    try {
        const body = request.body;
        await db.insert(schema_1.deviceTable).values(body);
        reply.code(200);
    }
    catch (error) {
        reply.code(500).send({ error: "Failed to create device" });
    }
});
server.get("/rooms", async (request, reply) => {
    try {
        let data = db.select().from(schema_1.roomTable);
        reply.code(200);
        return data;
    }
    catch (error) {
        reply.code(500).send({ error: "Failed to fetch Rooms" });
    }
});
server.delete("/delete/:id", async (request, reply) => {
    const { id } = request.params;
    try {
        await db.delete(schema_1.deviceTable).where((0, drizzle_orm_1.eq)(schema_1.deviceTable.id, id));
        return reply.code(204).send();
    }
    catch (error) {
        console.log(error);
        return reply.code(500).send({ error: "Internal Server Error" });
    }
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
