import type { Context } from "hono";
import { AnimeService } from "../services/anime.service";
import { fail, success } from "../utils/api-response";

export class AnimeController {
  static async getAnime(c: Context) {
    const id = c.req.param("id");

    if (!id) {
      return fail(c, "Anime ID is required", 400, "VALIDATION_ERROR");
    }

    const anime = await AnimeService.getAnime(id);

    return success(c, anime, "sanka");
  }

  static async getRecommendations(c: Context) {
    const id = c.req.param("id");

    if (!id) {
      return fail(c, "Anime ID is required", 400, "VALIDATION_ERROR");
    }

    const recommendations = await AnimeService.getRecommendations(id);
    return success(c, recommendations, "sanka");
  }

  static async getRelated(c: Context) {
    const id = c.req.param("id");

    if (!id) {
      return fail(c, "Anime ID is required", 400, "VALIDATION_ERROR");
    }

    const related = await AnimeService.getRelated(id);
    return success(c, related, "sanka");
  }

  static async getCharacters(c: Context) {
    const id = c.req.param("id");

    if (!id) {
      return fail(c, "Anime ID is required", 400, "VALIDATION_ERROR");
    }

    const characters = await AnimeService.getCharacters(id);
    return success(c, characters, "sanka");
  }
}