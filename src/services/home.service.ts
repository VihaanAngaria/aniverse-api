import { ProviderManager } from "../providers/provider.manager";
import { HomeMapper } from "../mappers/home.mapper";
import { cache } from "../utils/cache";

export class HomeService {
  private provider = ProviderManager.getSankaProvider();

  async getHome() {
    const cacheKey = "home";
    const cached = cache.get(cacheKey);
    if (cached) {
      return cached;
    }

    const response = await this.provider.getHome();
    const result = HomeMapper.fromSanka(response);
    cache.set(cacheKey, result, 300);
    return result;
  }
}