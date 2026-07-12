import { Hono } from "hono";
import { HomeController } from "../controllers/home.controller";

const home = new Hono();

home.get("/", HomeController.home);
home.get("/trending", HomeController.trending);
home.get("/popular", HomeController.popular);
home.get("/latest", HomeController.latest);
home.get("/top", HomeController.top);
home.get("/genres", HomeController.genres);
home.get("/schedule", HomeController.schedule);

export default home;