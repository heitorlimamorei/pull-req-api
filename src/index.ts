import { AppConfig } from "./config";
import { setupContainer } from "./resources/di";

const container = await setupContainer();

const server = Bun.serve({
  fetch: container.fetch,
  port: AppConfig.PORT,
});

console.log(`Server is running PORT: ${server.port} in HOST: ${server.hostname}`);