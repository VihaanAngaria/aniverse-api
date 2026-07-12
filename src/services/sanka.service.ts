import { SankaProvider } from "../providers/sanka/sanka.provider";
import { AnimeMapper } from "../mappers/anime.mapper";
import { EpisodeMapper } from "../mappers/episode.mapper";
import { HomeMapper } from "../mappers/home.mapper";

export class SankaService {
  private provider = new SankaProvider();

  async getHome() {
    const response = await this.provider.getHome();
    return HomeMapper.fromSanka(response.data);
  }

  async search(keyword: string) {
    const response = await this.provider.search(keyword);

    return response.data.animeList.map((anime: any) => ({
      id: anime.animeId,
      title: anime.title,
      poster: anime.poster,
      status: anime.status,
      score: anime.score ? Number(anime.score) : null,
    }));
  }

  async getAnime(slug: string) {
    const response = await this.provider.getAnime(slug);

    return AnimeMapper.fromSanka(slug, response.data);
  }

  async getEpisode(slug: string) {
    const response = await this.provider.getEpisode(slug);

    return EpisodeMapper.fromSanka(response.data);
  }
}