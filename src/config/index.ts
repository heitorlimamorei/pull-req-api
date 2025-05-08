import { z } from "zod";

const envSchema = z.object({
  ENVIRONMENT: z.string().default("dev"),
  PORT: z
    .string()
    .regex(/^\d+$/, "PORT must be a valid number")
    .transform(Number)
    .default("8080"),

  POSTGRES_DSN: z
    .string()
    .url("POSTGRES_DSN must be a valid URL")
    .min(1, "POSTGRES_DSN cannot be empty")
    .default("postgres://postgres:postgres@localhost:5432/postgres"),
});

const parsedEnv = envSchema.safeParse(process.env);

if (!parsedEnv.success) {
  console.error("❌ Configuration error:", parsedEnv.error.format());
  process.exit(1);
}

export const AppConfig = parsedEnv.data;