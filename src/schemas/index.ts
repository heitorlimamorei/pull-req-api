import {
  pgTable,
  text,
  timestamp,
  integer,
} from "drizzle-orm/pg-core";

export const pullrequestsTable = pgTable("pullrequests", {
  id: integer().primaryKey(),
  description: text("description").notNull(),
  url: text("url").notNull(),
  repository: text("repository").default(""),
  createTime: timestamp("create_time", { withTimezone: true })
    .defaultNow()
    .notNull(),
});
