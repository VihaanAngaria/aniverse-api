import axios from "axios";
import type { AnimeProvider } from "../provider.interface";
import type { SearchResponse } from "../../types/search";
import { SEARCH_QUERY } from "./queries";
import { SEARCH_QUERY, ANIME_QUERY } from "./queries";

export class AniListProvider implements AnimeProvider {
  async search(query: string): Promise<SearchResponse> {
    const response = await axios.post(
      "https://graphql.anilist.co",
      {
        query: SEARCH_QUERY,
        variables: {
          search: query,
        },
      },
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );

    const media = response.data.data.Page.media;

    return {
      success: true,
      provider: "anilist",
      query,
      results: media.map((anime: any) => ({
        id: String(anime.id),
        title: anime.title.english || anime.title.romaji,
        poster: anime.coverImage.extraLarge,
        type: anime.format || "Unknown",
        episodes: anime.episodes || 0,
      })),
    };
  }

  async getAnime(id: string): Promise<AnimeDetails> {
    const response = await axios.post(
      "https://graphql.anilist.co",
      {
        query: ANIME_QUERY,
        variables: {
          id: parseInt(id),
        },
      },
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );

    const anime = response.data.data.Media;

    return {
      id: String(anime.id),
      title: anime.title.english || anime.title.romaji,
      description: anime.description,
      poster: anime.coverImage.extraLarge,
      banner: anime.bannerImage,
      episodes: anime.episodes || 0,
      status: anime.status || "Unknown",
      genres: anime.genres || [],
      score: anime.averageScore || 0,
      season: anime.season || "Unknown",
      year: anime.seasonYear || 0,
      studios: anime.studios.nodes.map((node: any) => node.name) || [],
    };
  }
}