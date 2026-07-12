import type { SearchResponse } from "../types/search";
import type { AnimeDetails } from "../types/anime-details";
import type { EpisodeResponse } from "../types/episode";

export interface AnimeProvider {
  search(query: string): Promise<SearchResponse>;

  getAnime(id: string): Promise<AnimeDetails>;

  getEpisodes(id: string): Promise<EpisodeResponse>;
}