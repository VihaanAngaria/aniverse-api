import type { AnimeDetails } from "../types/anime-details";

import type {
  SankaAnimeResponse,
  SankaEpisodeItem,
  SankaGenre,
} from "../providers/sanka/type";

export class AnimeMapper {
  static fromSanka(
    slug: string,
    anime: SankaAnimeResponse
  ): AnimeDetails {
    return {
      id: slug,
      title: anime.title,
      description: anime.synopsis?.paragraphs?.join(" ") ?? "",
      poster: anime.poster,
      banner: anime.poster,
      episodes: anime.episodeList?.length ?? 0,
      status: anime.status,
      genres: anime.genreList?.map((genre: SankaGenre) => genre.title) ?? [],
      score: anime.score ? Number(anime.score) : 0,
      season: "",
      year: 0,
      studios: [],
    };
  }
}