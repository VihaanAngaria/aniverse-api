import { Hono } from "hono";
import { EpisodeController } from "../controllers/episode.controller";

const episode = new Hono();

episode.get("/:slug", EpisodeController.list);

export default episode;