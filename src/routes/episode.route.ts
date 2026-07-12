import { Hono } from "hono";
import { EpisodeController } from "../controllers/episode.controller";
import { zValidator } from "@hono/zod-validator";
import { z } from "zod";

const episode = new Hono();

const episodeParamSchema = z.object({
  slug: z.string().min(1),
});

episode.get("/:slug", zValidator("param", episodeParamSchema), EpisodeController.list);

export default episode;