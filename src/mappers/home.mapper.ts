import type {
  HomeResponse,
  OngoingAnime,
  CompletedAnime,
} from "../types/home";

import type {
  SankaAnimeCard,
  SankaHomeResponse,
} from "../providers/sanka/type";

export class HomeMapper {
  static fromSanka(data: SankaHomeResponse): HomeResponse {
    const ongoing: OngoingAnime[] =
      data.ongoing?.animeList?.map(
        (anime: SankaAnimeCard): OngoingAnime => ({
          id: anime.animeId,
          title: anime.title,
          poster: anime.poster,
          episodes: anime.episodes ?? 0,
          releaseDay: anime.releaseDay ?? "",
          latestReleaseDate: anime.latestReleaseDate ?? "",
        })
      ) ?? [];

    const completed: CompletedAnime[] =
      data.completed?.animeList?.map(
        (anime: SankaAnimeCard): CompletedAnime => ({
          id: anime.animeId,
          title: anime.title,
          poster: anime.poster,
          episodes: anime.episodes ?? 0,
          score: anime.score ? Number(anime.score) : null,
          lastReleaseDate: anime.lastReleaseDate ?? "",
        })
      ) ?? [];

    return {
      ongoing,
      completed,
    };
  }
}