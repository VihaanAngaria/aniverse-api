import type { SearchResponse } from "../types/search";
import { ProviderManager } from "../providers/provider.manager";
import { cache } from "../utils/cache";
import type { Anime } from "../types/anime";
import { resolveAniListImages } from "../utils/anilist-images";

export class SearchService {
  static async search(query: string): Promise<SearchResponse> {
    const cacheKey = `search:${query.toLowerCase()}`;
    const cached = cache.get<SearchResponse>(cacheKey);
    if (cached) {
      return cached;
    }

    const sankaProvider = ProviderManager.getSankaProvider();
    const sankaResponse = await sankaProvider.search(query);

    const sankaResults = sankaResponse.data?.animeList ?? [];
    const results: Anime[] = [];

    for (const entry of sankaResults) {
      if (!entry.animeId || !entry.title) {
        continue;
      }

      const images = await resolveAniListImages(entry.title, entry.poster);
      results.push({
        id: entry.animeId,
        title: entry.title,
        poster: images.poster,
        type: "Unknown",
        episodes: 0,
        status: entry.status ?? "Unknown",
        score: entry.score ? Number(entry.score) : 0,
        year: 0,
        provider: "sanka",
      });
    }

    const result: SearchResponse = {
      success: true,
      provider: "sanka",
      query,
      results,
    };

    cache.set(cacheKey, result, 300);
    return result;
  }
}