import { AniListProvider } from "./anilist/anilist.provider";
import { SankaProvider } from "./sanka/sanka.provider";

export class ProviderManager {
  static getProvider() {
    return new AniListProvider();
  }

  static getSankaProvider() {
    return new SankaProvider();
  }
}