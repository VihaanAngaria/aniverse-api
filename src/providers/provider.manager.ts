import { AniListProvider } from "./anilist/anilist.provider";

export class ProviderManager {
  static getProvider() {
    return new AniListProvider();
  }
}