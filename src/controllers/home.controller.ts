import { Context } from "hono";
import { HomeService } from "../services/home.service";

const service = new HomeService();

export class HomeController {
  static async home(c: Context) {
    const data = await service.getHome();

    return c.json({
      success: true,
      data,
    });
  }
}