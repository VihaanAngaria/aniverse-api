import type { Context } from "hono";
import { AnimeService } from "../services/anime.service";

export class AnimeController {
  static async getAnime(c: Context) {
    const id = c.req.param("id");

    if (!id) {
      return c.json(
        {
          success: false,
          error: {
            code: "VALIDATION_ERROR",
            message: "Anime ID is required",
          },
        },
        400
      );
    }

    const anime = await AnimeService.getAnime(id);

    return c.json({
      success: true,
      provider: "sanka",
      data: anime,
    });
  }
}