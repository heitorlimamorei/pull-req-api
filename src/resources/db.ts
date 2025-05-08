import { drizzle, NodePgDatabase } from "drizzle-orm/node-postgres";
import { AppConfig } from "../config";
import { sql } from "drizzle-orm/sql";

export type DB = NodePgDatabase<Record<string, never>> & {
  $client: string;
};

export async function newDb(): Promise<DB> {
  try {
    const db: DB = drizzle(AppConfig.POSTGRES_DSN);

    await db.execute(sql`SELECT 1`);

    return db;
  } catch (err) {
    console.error("ERR: Cannot connect to the DB");
    process.exit(1);
  }
}