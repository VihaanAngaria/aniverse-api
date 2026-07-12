import { Hono } from "hono";
import { HealthController } from "../controllers/health.controller";

const healthRoute = new Hono();

healthRoute.get("/", HealthController.getHealth);

export default healthRoute;