import { SankaProvider } from "../providers/sanka/sanka.provider";
import { EpisodeMapper } from "../mappers/episode.mapper";

export class WatchService {
  private provider = new SankaProvider();

  async getWatchData(episodeId: string) {
    const response = await this.provider.getEpisode(episodeId);

    return EpisodeMapper.fromSanka(response.data);
  }
}