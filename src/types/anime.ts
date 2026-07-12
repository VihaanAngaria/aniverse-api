export interface Anime {
  id: string;
  title: string;
  poster: string;
  type: string;
  episodes: number;
  status?: string;
  score?: number;
  year?: number;
  provider?: string;
}