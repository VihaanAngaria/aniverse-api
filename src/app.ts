import { Hono } from "hono";
import healthRoute from "./routes/health.route";
import searchRoute from "./routes/search.route";
import animeRoute from "./routes/anime.route";
import sankaRoute from "./routes/sanka.route";

export const app = new Hono();

app.get("/", (c) => {
  return c.json({
    name: "Aniverse API",
    version: "1.0.0",
    status: "online",
  });
});

app.route("/health", healthRoute);
app.route("/search", searchRoute);
app.route("/anime", animeRoute);
app.route("/sanka", sankaRoute);