import { Hono } from "hono";
import { SearchController } from "../controllers/search.controller";

const searchRoute = new Hono();

searchRoute.get("/", SearchController.search);

export default searchRoute;