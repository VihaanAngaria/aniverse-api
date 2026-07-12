import type { Context } from "hono";
import { AnimeService } from "../services/anime.service";

export class AnimeController {
  static async getAnime(c: Context) {
    const id = c.req.param("id");

    const anime = await AnimeService.getAnime(id);

    return c.json({
      success: true,
      provider: "anilist",
      data: anime,
    });
  }
}