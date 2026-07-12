import type { SearchResponse } from "../types/search";

export interface AnimeProvider {
  search(query: string): Promise<SearchResponse>;
}