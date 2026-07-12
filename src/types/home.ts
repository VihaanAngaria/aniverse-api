export interface HomeAnime {
  id: string;
  title: string;
  poster: string;
  type: string;
  episodes: number;
  status: string;
  score: number | null;
  year: number;
  provider: string;
}

export interface OngoingAnime extends HomeAnime {
  releaseDay: string;
  latestReleaseDate: string;
}

export interface CompletedAnime extends HomeAnime {
  lastReleaseDate: string;
}

export interface HomeResponse {
  ongoing: OngoingAnime[];
  completed: CompletedAnime[];
}

export interface HomeGenre {
  id: string;
  name: string;
}

export interface ScheduleEntry {
  day: string;
  items: HomeAnime[];
}