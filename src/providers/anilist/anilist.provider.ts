import axios from "axios";
import type { AnimeProvider } from "../provider.interface";
import type { SearchResponse } from "../../types/search";
import { SEARCH_QUERY } from "./queries";

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
}