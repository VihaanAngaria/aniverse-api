import type { Context } from "hono";
import { EpisodeService } from "../services/episode.service";
import { success, fail } from "../utils/api-response";

const service = new EpisodeService();

export class EpisodeController {
  static async list(c: Context) {
    const slug = c.req.param("slug");

    if (!slug) {
      return fail(
        c,
        "Episode slug is required",
        400,
        "VALIDATION_ERROR"
      );
    }

    const episodes = await service.getEpisodes(slug);

    return success(c, episodes);
  }
}