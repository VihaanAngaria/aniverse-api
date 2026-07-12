import type { SearchResponse } from "../types/search";
import type { AnimeDetails } from "../types/anime-details";

export interface AnimeProvider {
  search(query: string): Promise<SearchResponse>;

  getAnime(id: string): Promise<AnimeDetails>;
}
