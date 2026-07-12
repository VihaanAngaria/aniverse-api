import type { Episode } from "../../types/episode";

export interface StreamingProvider {
  getEpisodes(providerId: string): Promise<Episode[]>;
}