import { int, mysqlEnum, mysqlTable, text, timestamp, varchar } from "drizzle-orm/mysql-core";

/**
 * Core user table backing auth flow.
 * Extend this file with additional tables as your product grows.
 * Columns use camelCase to match both database fields and generated types.
 */
export const users = mysqlTable("users", {
  /**
   * Surrogate primary key. Auto-incremented numeric value managed by the database.
   * Use this for relations between tables.
   */
  id: int("id").autoincrement().primaryKey(),
  /** Manus OAuth identifier (openId) returned from the OAuth callback. Unique per user. */
  openId: varchar("openId", { length: 64 }).notNull().unique(),
  name: text("name"),
  email: varchar("email", { length: 320 }),
  loginMethod: varchar("loginMethod", { length: 64 }),
  role: mysqlEnum("role", ["user", "admin"]).default("user").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
  lastSignedIn: timestamp("lastSignedIn").defaultNow().notNull(),
});

export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;

/**
 * User responses table to store conversion rate calculator submissions.
 * Tracks monthly traffic, conversions, conversion type, and optional conversion value.
 */
export const userResponses = mysqlTable("user_responses", {
  id: int("id").autoincrement().primaryKey(),
  monthlyTraffic: int("monthly_traffic").notNull(),
  monthlyConversions: int("monthly_conversions").notNull(),
  conversionType: mysqlEnum("conversion_type", ["demos", "signups"]).notNull(),
  conversionValue: int("conversion_value").default(0),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export type UserResponse = typeof userResponses.$inferSelect;
export type InsertUserResponse = typeof userResponses.$inferInsert;