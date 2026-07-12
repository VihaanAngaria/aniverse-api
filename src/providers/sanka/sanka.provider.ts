import { SankaClient } from "./sanka.client";

import type {
  SankaAnimeResponse,
  SankaHomeResponse,
  SankaWatchResponse,
} from "./type";

export interface SankaSearchItem {
  animeId: string;
  title: string;
  poster: string;
  status?: string;
  score?: string;
}

export interface SankaSearchResponse {
  data: {
    animeList: SankaSearchItem[];
  };
}

export class SankaProvider {
  private client = new SankaClient();

  async getAnime(slug: string): Promise<SankaAnimeResponse> {
    const response = await this.client.get<{ data: SankaAnimeResponse }>(
      `/anime/anime/${slug}`
    );

    return response.data;
  }

  async getEpisode(slug: string): Promise<SankaWatchResponse> {
    const response = await this.client.get<{ data: SankaWatchResponse }>(
      `/anime/episode/${slug}`
    );

    return response.data;
  }

  async getHome(): Promise<SankaHomeResponse> {
    const response = await this.client.get<{ data: SankaHomeResponse }>(
      "/anime/home"
    );

    return response.data;
  }

  async search(keyword: string): Promise<SankaSearchResponse> {
    return this.client.get<SankaSearchResponse>(
      `/anime/search/${encodeURIComponent(keyword)}`
    );
  }
}