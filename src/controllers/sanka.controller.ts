import { Context } from "hono";
import { SankaProvider } from "../providers/sanka/sanka.provider";

const sanka = new SankaProvider();

export class SankaController {
  static async home(c: Context) {
    const data = await sanka.getHome();
    return c.json(data);
  }

  static async search(c: Context) {
    const keyword = c.req.param("keyword");
    const data = await sanka.search(keyword);
    return c.json(data);
  }

  static async anime(c: Context) {
    const slug = c.req.param("slug");
    const data = await sanka.getAnime(slug);
    return c.json(data);
  }

  static async episode(c: Context) {
    const slug = c.req.param("slug");
    const data = await sanka.getEpisode(slug);
    return c.json(data);
  }
}