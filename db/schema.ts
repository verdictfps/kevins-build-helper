import { index, jsonb, pgTable, text, timestamp, uniqueIndex } from "drizzle-orm/pg-core";

export const steamUsers = pgTable("steam_users", {
  steamId: text("steam_id").primaryKey(),
  displayName: text("display_name"),
  avatarUrl: text("avatar_url"),
  profileUrl: text("profile_url"),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
  lastSignedInAt: timestamp("last_signed_in_at", { withTimezone: true }),
});

export const userBuilds = pgTable(
  "user_builds",
  {
    id: text("id").primaryKey(),
    steamId: text("steam_id")
      .notNull()
      .references(() => steamUsers.steamId, { onDelete: "cascade" }),
    name: text("name").notNull(),
    buildData: jsonb("build_data").notNull(),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (table) => ({
    steamIdIdx: index("user_builds_steam_id_idx").on(table.steamId),
  }),
);

export const itemData = pgTable(
  "item_data",
  {
    name: text("name").primaryKey(),
    data: jsonb("data").notNull(),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (table) => ({
    nameUniqueIdx: uniqueIndex("item_data_name_unique_idx").on(table.name),
  }),
);
