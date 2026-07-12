import { Hono } from "hono";
import { AnimeController } from "../controllers/anime.controller";

const animeRoute = new Hono();

animeRoute.get("/:id", AnimeController.getAnime);

export default animeRoute;