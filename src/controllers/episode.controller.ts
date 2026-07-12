import { Context } from "hono";
import { EpisodeService } from "../services/episode.service";

const service = new EpisodeService();

export class EpisodeController {
  static async list(c: Context) {
    const slug = c.req.param("slug");

    if (!slug) {
      return c.json(
        {
          success: false,
          message: "Episode slug is required",
        },
        400
      );
    }

    const episodes = await service.getEpisodes(slug);

    return c.json({
      success: true,
      data: episodes,
    });
  }
}