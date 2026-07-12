import { SankaProvider } from "../providers/sanka/sanka.provider";

export class EpisodeService {
  private provider = new SankaProvider();

  async getEpisodes(animeSlug: string) {
    const response = await this.provider.getAnime(animeSlug);

    return (
      response.data.episodeList?.map((episode: any) => ({
        id: episode.episodeId,
        number: episode.eps,
        title: episode.title,
        date: episode.date,
      })) || []
    );
  }
}