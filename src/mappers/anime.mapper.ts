import type { AnimeDetails } from "../types/anime-details";

import type {
  SankaAnimeResponse,
  SankaGenre,
} from "../providers/sanka/type";
import { resolveAniListImages } from "../utils/anilist-images";

export class AnimeMapper {
  static async fromSanka(
    slug: string,
    anime: SankaAnimeResponse
  ): Promise<AnimeDetails> {
    const images = await resolveAniListImages(anime.title, anime.poster);

    return {
      id: slug,
      title: anime.title,
      description: anime.synopsis?.paragraphs?.join(" ") ?? "",
      poster: images.poster,
      banner: images.banner,
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