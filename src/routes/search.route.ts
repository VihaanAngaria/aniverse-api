import { Hono } from "hono";
import { SearchController } from "../controllers/search.controller";
import { zValidator } from "@hono/zod-validator";
import { SearchQuerySchema } from "../validators/search.validator";

const searchRoute = new Hono();

searchRoute.get("/", zValidator("query", SearchQuerySchema), SearchController.search);

export default searchRoute;