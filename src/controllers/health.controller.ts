import { Context } from "hono";
import { HealthService } from "../services/health.service";

export class HealthController {
  static getHealth(c: Context) {
    return c.json(HealthService.getHealth());
  }
}