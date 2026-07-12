import { Hono } from "hono";
import { WatchController } from "../controllers/watch.controller";
import { zValidator } from "@hono/zod-validator";
import { z } from "zod";

const watch = new Hono();

const watchParamSchema = z.object({
  episodeId: z.string().trim().min(1),
});

watch.get("/:episodeId", zValidator("param", watchParamSchema), WatchController.watch);

export default watch;