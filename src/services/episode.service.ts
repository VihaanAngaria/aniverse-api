import { ProviderManager } from "../providers/provider.manager";
import { cache } from "../utils/cache";

export class EpisodeService {
  private provider = ProviderManager.getSankaProvider();

  async getEpisodes(animeSlug: string) {
    const cacheKey = `episodes:${animeSlug}`;
    const cached = cache.get(cacheKey);
    if (cached) {
      return cached;
    }

    const response = await this.provider.getAnime(animeSlug);

    const result = (
      response.episodeList?.map((episode: any) => ({
        id: episode.episodeId,
        number: episode.eps,
        title: episode.title,
        date: episode.date,
      })) || []
    );

    cache.set(cacheKey, result, 300);
    return result;
  }
}