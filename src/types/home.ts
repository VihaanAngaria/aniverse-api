export interface HomeAnime {
  id: string;
  title: string;
  poster: string;
  episodes: number;
}

export interface OngoingAnime extends HomeAnime {
  releaseDay: string;
  latestReleaseDate: string;
}

export interface CompletedAnime extends HomeAnime {
  score: number | null;
  lastReleaseDate: string;
}

export interface HomeResponse {
  ongoing: OngoingAnime[];
  completed: CompletedAnime[];
}