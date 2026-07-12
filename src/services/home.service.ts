import { ProviderManager } from "../providers/provider.manager";
import { HomeMapper } from "../mappers/home.mapper";
import { cache } from "../utils/cache";
import type { HomeAnime, HomeGenre, HomeResponse, ScheduleEntry } from "../types/home";
import type { SankaHomeResponse } from "../providers/sanka/type";

export class HomeService {
  private provider = ProviderManager.getSankaProvider();

  private async getHomePayload(): Promise<SankaHomeResponse> {
    const cacheKey = "home:payload";
    const cached = cache.get<SankaHomeResponse>(cacheKey);
    if (cached) {
      return cached;
    }

    const response = await this.provider.getHome();
    cache.set(cacheKey, response, 300);
    return response;
  }

  async getHome(): Promise<HomeResponse> {
    const cacheKey = "home";
    const cached = cache.get<HomeResponse>(cacheKey);
    if (cached) {
      return cached;
    }

    const response = await this.getHomePayload();
    const result = await HomeMapper.fromSanka(response);
    cache.set(cacheKey, result, 300);
    return result;
  }

  async getTrending(): Promise<HomeResponse> {
    const home = await this.getHome();
    return {
      ongoing: [...home.ongoing].sort((a, b) => (b.score ?? 0) - (a.score ?? 0)),
      completed: [...home.completed].sort((a, b) => (b.score ?? 0) - (a.score ?? 0)),
    };
  }

  async getPopular(): Promise<HomeAnime[]> {
    const home = await this.getHome();
    return [...home.ongoing, ...home.completed].sort((a, b) => (b.score ?? 0) - (a.score ?? 0));
  }

  async getLatest(): Promise<HomeAnime[]> {
    const home = await this.getHome();
    return [...home.ongoing, ...home.completed].sort((a, b) => b.year - a.year);
  }

  async getTop(): Promise<HomeAnime[]> {
    const home = await this.getHome();
    return [...home.ongoing, ...home.completed].sort((a, b) => (b.score ?? 0) - (a.score ?? 0));
  }

  async getGenres(): Promise<HomeGenre[]> {
    return [
      { id: "action", name: "Action" },
      { id: "adventure", name: "Adventure" },
      { id: "comedy", name: "Comedy" },
      { id: "drama", name: "Drama" },
      { id: "fantasy", name: "Fantasy" },
      { id: "romance", name: "Romance" },
    ];
  }

  async getSchedule(): Promise<ScheduleEntry[]> {
    const home = await this.getHome();
    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

    return days.map((day, index) => ({
      day,
      items: [...home.ongoing, ...home.completed].filter((_, itemIndex) => itemIndex % days.length === index),
    }));
  }
}