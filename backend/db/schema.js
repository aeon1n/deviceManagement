"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deviceTable = exports.roomTable = void 0;
const sqlite_core_1 = require("drizzle-orm/sqlite-core");
exports.roomTable = (0, sqlite_core_1.sqliteTable)("rooms", {
    id: (0, sqlite_core_1.int)("id").primaryKey({ autoIncrement: true }),
    name: (0, sqlite_core_1.text)("name").notNull(),
    number: (0, sqlite_core_1.text)("number").notNull(),
});
exports.deviceTable = (0, sqlite_core_1.sqliteTable)("devices", {
    id: (0, sqlite_core_1.int)("id").primaryKey({ autoIncrement: true }),
    name: (0, sqlite_core_1.text)("name").notNull(),
    ip: (0, sqlite_core_1.text)("ip").notNull(),
    os: (0, sqlite_core_1.text)("os").notNull(),
    roomId: (0, sqlite_core_1.int)("room").references(() => exports.roomTable.id, {
        onDelete: "set null",
        onUpdate: "cascade",
    }),
    status: (0, sqlite_core_1.text)("status").notNull(),
});
