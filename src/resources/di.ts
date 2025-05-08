import { Hono } from "hono";
import { newDb } from "./db";

export async function setupContainer() {
  const db = await newDb();

  const app = new Hono();

  app.get("/Health", (c) => {
    return c.text("Health!");
  });

  app.get("/", (c) => {
    return c.text("Health!");
  });

  return app;
}
