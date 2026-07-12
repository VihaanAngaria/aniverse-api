export interface SankaAnimeCard {
  animeId: string;
  title: string;
  poster: string;
  episodes: number;
  score?: string;
  releaseDay?: string;
  latestReleaseDate?: string;
  lastReleaseDate?: string;
}

export interface SankaHomeResponse {
  ongoing: {
    animeList: SankaAnimeCard[];
  };

  completed: {
    animeList: SankaAnimeCard[];
  };
}

export interface SankaGenre {
  title: string;
  genreId: string;
}

export interface SankaEpisodeItem {
  title: string;
  eps: number;
  date: string;
  episodeId: string;
}

export interface SankaAnimeResponse {
  title: string;
  poster: string;
  score: string;
  status: string;
  type: string;
  episodeList: SankaEpisodeItem[];
  genreList: SankaGenre[];
  synopsis?: {
    paragraphs?: string[];
    connections?: unknown[];
  };
}

export interface SankaServer {
  title: string;
  serverId: string;
}

export interface SankaQuality {
  title: string;
  serverList: SankaServer[];
}

export interface SankaWatchResponse {
  title: string;
  animeId: string;
  defaultStreamingUrl: string;

  server: {
    qualities: SankaQuality[];
  };
}