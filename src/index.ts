
import { serve } from "@hono/node-server";
import { app } from "./app";
import { env } from "./config/env";

serve({
  fetch: app.fetch,
  port: env.PORT,
});

console.log(
  `🚀 ${env.APP_NAME} v${env.APP_VERSION} running on http://localhost:${env.PORT}`
);