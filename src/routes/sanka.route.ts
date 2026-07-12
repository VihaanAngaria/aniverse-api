import { Hono } from "hono";
import { SankaController } from "../controllers/sanka.controller";

const sanka = new Hono();

sanka.get("/home", SankaController.home);
sanka.get("/search/:keyword", SankaController.search);
sanka.get("/anime/:slug", SankaController.anime);
sanka.get("/episode/:slug", SankaController.episode);

export default sanka;