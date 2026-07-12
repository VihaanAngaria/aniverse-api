import { swaggerUI } from "@hono/swagger-ui";
import { OpenAPIHono } from "@hono/zod-openapi";

import { handleError } from "./middlewares/error.middleware";
import { loggingMiddleware } from "./middlewares/logging.middleware";

import healthRoute from "./routes/health.route";
import searchRoute from "./routes/search.route";
import animeRoute from "./routes/anime.route";
import episodeRoute from "./routes/episode.route";
import watchRoute from "./routes/watch.route";
import homeRoute from "./routes/home.route";

// Temporary debugging route (will be removed later)
import sankaRoute from "./routes/sanka.route";

export const app = new OpenAPIHono();

app.use(loggingMiddleware);

// ======================================
// Global Error Handler
// ======================================
app.onError(handleError);

// ======================================
// Root
// ======================================
app.get("/", (c) => {
  return c.json({
    name: "Aniverse API",
    version: "1.0.0",
    status: "online",
  });
});

// ======================================
// Test Global Error Handler
// Remove after testing
// ======================================

// ======================================
// Swagger UI
// ======================================
app.get("/docs", swaggerUI({ url: "/openapi.json" }));

// ======================================
// Public API
// ======================================
app.route("/health", healthRoute);
app.route("/home", homeRoute);
app.route("/search", searchRoute);
app.route("/anime", animeRoute);
app.route("/episodes", episodeRoute);
app.route("/watch", watchRoute);

// ======================================
// Internal Debug API
// ======================================
app.route("/sanka", sankaRoute);

// ======================================
// OpenAPI Specification
// ======================================
app.doc("/openapi.json", {
  openapi: "3.1.0",
  info: {
    title: "Aniverse API",
    version: "1.0.0",
    description:
      "Official API for Aniverse. Provides anime search, metadata, episodes, and streaming information.",
  },
});