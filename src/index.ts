import { app } from "./app";
import { env } from "./config/env";

Bun.serve({
  fetch: app.fetch,
  port: env.PORT,
});

console.log(
  `🚀 ${env.APP_NAME} v${env.APP_VERSION} running on http://localhost:${env.PORT}`
);