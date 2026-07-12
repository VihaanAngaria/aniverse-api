import type { SearchResponse } from "../types/search";
import { ProviderManager } from "../providers/provider.manager";
import { cache } from "../utils/cache";

export class SearchService {
  static async search(query: string): Promise<SearchResponse> {
    const cacheKey = `search:${query}`;
    const cached = cache.get<SearchResponse>(cacheKey);
    if (cached) {
      return cached;
    }

    const provider = ProviderManager.getProvider();
    const result = await provider.search(query);
    cache.set(cacheKey, result, 300);
    return result;
  }
}