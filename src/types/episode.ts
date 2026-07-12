export interface Episode {
  id: string;
  number: number;
  title: string;
  isFiller?: boolean;
}

export interface EpisodeResponse {
  success: boolean;
  provider: string;
  animeId: string;
  episodes: Episode[];
}