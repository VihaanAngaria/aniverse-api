import { Anime } from "./anime";

export interface SearchResponse {
  success: boolean;
  provider: string;
  query: string;
  results: Anime[];
}