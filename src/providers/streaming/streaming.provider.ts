import type { EpisodeResponse } from "../../types/episode";

export interface StreamingProvider {
  getEpisodes(providerId: string): Promise<EpisodeResponse>;
}