import { ProviderManager } from "../providers/provider.manager";
import type { AnimeDetails } from "../types/anime-details";
import { cache } from "../utils/cache";

export class AnimeService {
  static async getAnime(id: string): Promise<AnimeDetails> {
    const cacheKey = `anime:${id}`;
    const cached = cache.get<AnimeDetails>(cacheKey);
    if (cached) {
      return cached;
    }

    const provider = ProviderManager.getSankaProvider();
    const anime = await provider.getAnime(id);

    const result = {
      id: anime.title.toLowerCase().replace(/\s+/g, "-"),
      title: anime.title,
      description: "",
      poster: anime.poster,
      banner: anime.poster,
      episodes: anime.episodeList?.length ?? 0,
      status: anime.status,
      genres: anime.genreList?.map((genre) => genre.title) ?? [],
      score: Number(anime.score) || 0,
      season: "",
      year: 0,
      studios: [],
    };

    cache.set(cacheKey, result, 300);
    return result;
  }
}