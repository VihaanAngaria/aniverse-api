import { Hono } from "hono";
import { WatchController } from "../controllers/watch.controller";

const watch = new Hono();

watch.get("/:episodeId", WatchController.watch);

export default watch;