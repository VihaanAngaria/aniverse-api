import { Hono } from "hono";
import { HomeController } from "../controllers/home.controller";

const home = new Hono();

home.get("/", HomeController.home);

export default home;