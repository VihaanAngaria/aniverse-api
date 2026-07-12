import { Context } from "hono";
import { SankaService } from "../services/sanka.service";

const service = new SankaService();

export class SankaController {
  static async home(c: Context) {
    return c.json({
      success: true,
      data: await service.getHome(),
    });
  }

  static async search(c: Context) {
    const keyword = c.req.param("keyword");

    return c.json({
      success: true,
      data: await service.search(keyword),
    });
  }

  static async anime(c: Context) {
    const slug = c.req.param("slug");

    return c.json({
      success: true,
      data: await service.getAnime(slug),
    });
  }

  static async episode(c: Context) {
    const slug = c.req.param("slug");

    return c.json({
      success: true,
      data: await service.getEpisode(slug),
    });
  }
}