import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const roomTable = sqliteTable("rooms", {
  id: int("id").primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
  number: text("number").notNull(),
} as const);

export const deviceTable = sqliteTable("devices", {
  id: int("id").primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
  ip: text("ip").notNull(),
  os: text("os").notNull(),
  room: int("room").references(() => roomTable.id, {
    onDelete: "set null",
    onUpdate: "cascade",
  }),
  status: text("status").notNull(),
});
