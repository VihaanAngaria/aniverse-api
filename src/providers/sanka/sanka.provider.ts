import { SankaClient } from "./sanka.client";

export class SankaProvider {
  private client = new SankaClient();

  async getAnime(slug: string) {
    return this.client.get(`/anime/anime/${slug}`);
  }

  async getEpisode(slug: string) {
    return this.client.get(`/anime/episode/${slug}`);
  }

  async search(keyword: string) {
    return this.client.get(`/anime/search/${encodeURIComponent(keyword)}`);
  }

  async getHome() {
    return this.client.get("/anime/home");
  }
}