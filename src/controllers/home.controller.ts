import { Context } from "hono";
import { HomeService } from "../services/home.service";
import { success } from "../utils/api-response";

const service = new HomeService();

export class HomeController {
  static async home(c: Context) {
    const data = await service.getHome();
    return success(c, data, "sanka");
  }

  static async trending(c: Context) {
    const data = await service.getTrending();
    return success(c, data, "sanka");
  }

  static async popular(c: Context) {
    const data = await service.getPopular();
    return success(c, data, "sanka");
  }

  static async latest(c: Context) {
    const data = await service.getLatest();
    return success(c, data, "sanka");
  }

  static async top(c: Context) {
    const data = await service.getTop();
    return success(c, data, "sanka");
  }

  static async genres(c: Context) {
    const data = await service.getGenres();
    return success(c, data, "sanka");
  }

  static async schedule(c: Context) {
    const data = await service.getSchedule();
    return success(c, data, "sanka");
  }
}