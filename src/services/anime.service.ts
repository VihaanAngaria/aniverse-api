import { ProviderManager } from "../providers/provider.manager";
import type { AnimeDetails } from "../types/anime-details";

export class AnimeService {
  static async getAnime(id: string): Promise<AnimeDetails> {
    const provider = ProviderManager.getProvider();

    return provider.getAnime(id);
  }
}