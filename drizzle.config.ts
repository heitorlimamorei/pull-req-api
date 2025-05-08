export default {
  schema: "./src/schemas/index.ts",
  out: "./src/db/migrations",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_DSN,
    host: process.env.ENVIRONMENT  == "prod" ? "db" : "localhost",
    database: process.env.POSTGRES_DB,
    password: process.env.POSTGRES_PASSWORD,
    user: process.env.POSTGRES_USER,
    ssl: false,
  },
};

