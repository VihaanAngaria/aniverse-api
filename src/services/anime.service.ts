import { ProviderManager } from "../providers/provider.manager";
import type { AnimeDetails } from "../types/anime-details";
import { cache } from "../utils/cache";
import { AnimeMapper } from "../mappers/anime.mapper";

export class AnimeService {
  static async getAnime(id: string): Promise<AnimeDetails> {
    const cacheKey = `anime:${id}`;
    const cached = cache.get<AnimeDetails>(cacheKey);
    if (cached) {
      return cached;
    }

    const provider = ProviderManager.getSankaProvider();
    const anime = await provider.getAnime(id);
    const result = await AnimeMapper.fromSanka(id, anime);

    cache.set(cacheKey, result, 300);
    return result;
  }

  static async getRecommendations(id: string): Promise<AnimeDetails[]> {
    await this.getAnime(id);
    return [];
  }

  static async getRelated(id: string): Promise<AnimeDetails[]> {
    await this.getAnime(id);
    return [];
  }

  static async getCharacters(id: string): Promise<unknown[]> {
    await this.getAnime(id);
    return [];
  }
}