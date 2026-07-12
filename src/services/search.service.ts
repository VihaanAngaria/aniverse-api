import type { SearchResponse } from "../types/search";
import { ProviderManager } from "../providers/provider.manager";

export class SearchService {
  static async search(query: string): Promise<SearchResponse> {
    const provider = ProviderManager.getProvider();

    return provider.search(query);
  }
}