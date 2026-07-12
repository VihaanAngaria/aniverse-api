import type {
  HomeResponse,
  OngoingAnime,
  CompletedAnime,
} from "../types/home";

import type {
  SankaAnimeCard,
  SankaHomeResponse,
} from "../providers/sanka/type";
import { resolveAniListImages } from "../utils/anilist-images";

export class HomeMapper {
  static async fromSanka(data: SankaHomeResponse): Promise<HomeResponse> {
    const ongoing: OngoingAnime[] = [];
    const completed: CompletedAnime[] = [];

    const ongoingCards = data.ongoing?.animeList ?? [];
    const completedCards = data.completed?.animeList ?? [];

    for (const anime of ongoingCards) {
      const images = await resolveAniListImages(anime.title, anime.poster);
      ongoing.push({
        id: anime.animeId,
        title: anime.title,
        poster: images.poster,
        type: "Unknown",
        episodes: anime.episodes ?? 0,
        status: "Unknown",
        score: anime.score ? Number(anime.score) : null,
        year: 0,
        provider: "sanka",
        releaseDay: anime.releaseDay ?? "",
        latestReleaseDate: anime.latestReleaseDate ?? "",
      });
    }

    for (const anime of completedCards) {
      const images = await resolveAniListImages(anime.title, anime.poster);
      completed.push({
        id: anime.animeId,
        title: anime.title,
        poster: images.poster,
        type: "Unknown",
        episodes: anime.episodes ?? 0,
        status: "Completed",
        score: anime.score ? Number(anime.score) : null,
        year: 0,
        provider: "sanka",
        lastReleaseDate: anime.lastReleaseDate ?? "",
      });
    }

    return {
      ongoing,
      completed,
    };
  }
}