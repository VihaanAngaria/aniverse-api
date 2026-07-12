import { Hono } from "hono";
import { EpisodeController } from "../controllers/episode.controller";
import { zValidator } from "@hono/zod-validator";
import { z } from "zod";

const episode = new Hono();

const episodeParamSchema = z.object({
  animeId: z.string().trim().min(1),
});

episode.get("/:animeId", zValidator("param", episodeParamSchema), EpisodeController.list);

export default episode;