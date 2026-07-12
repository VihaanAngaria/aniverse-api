import { Hono } from "hono";
import { AnimeController } from "../controllers/anime.controller";
import { zValidator } from "@hono/zod-validator";
import { z } from "zod";

const animeRoute = new Hono();

const animeParamSchema = z.object({
  id: z.string().min(1),
});

animeRoute.get("/:id", zValidator("param", animeParamSchema), AnimeController.getAnime);

export default animeRoute;