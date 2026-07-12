import type { Context } from "hono";
import { EpisodeService } from "../services/episode.service";
import { success, fail } from "../utils/api-response";

const service = new EpisodeService();

export class EpisodeController {
  static async list(c: Context) {
    const animeId = c.req.param("animeId");

    if (!animeId) {
      return fail(
        c,
        "Anime ID is required",
        400,
        "VALIDATION_ERROR"
      );
    }

    const episodes = await service.getEpisodes(animeId);

    return success(c, episodes, "sanka");
  }
}