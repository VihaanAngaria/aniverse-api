import { ProviderManager } from "../providers/provider.manager";
import { cache } from "./cache";
import { createCanonicalId, findBestMatch } from "./canonical-id";

const RATE_LIMITED_TITLES = new Set<string>();

const PLACEHOLDER_POSTER = "https://placehold.co/300x430/png?text=Anime";
const PLACEHOLDER_BANNER = "https://placehold.co/1200x400/png?text=Anime";

interface AniListImageResult {
  poster: string;
  banner: string;
}

export async function resolveAniListImages(
  title: string,
  fallbackPoster = PLACEHOLDER_POSTER
): Promise<AniListImageResult> {
  const cacheKey = `anilist-images:${createCanonicalId(title)}`;
  const cached = cache.get<AniListImageResult>(cacheKey);
  if (cached) {
    return cached;
  }

  if (RATE_LIMITED_TITLES.has(cacheKey)) {
    return {
      poster: PLACEHOLDER_POSTER,
      banner: PLACEHOLDER_BANNER,
    };
  }

  try {
    const provider = ProviderManager.getAniListProvider();
    const searchResponse = await provider.search(title);
    const matches = (searchResponse.results ?? []).map((result) => ({
      id: result.id,
      title: result.title,
      poster: result.poster,
    }));

    const match = findBestMatch(title, matches);

    if (!match?.id) {
      throw new Error("No AniList match");
    }

    const details = await provider.getAnime(match.id);
    const result = {
      poster: details.poster || match.poster || fallbackPoster || PLACEHOLDER_POSTER,
      banner: details.banner || PLACEHOLDER_BANNER,
    };

    cache.set(cacheKey, result, 3600);
    return result;
  } catch {
    RATE_LIMITED_TITLES.add(cacheKey);
    setTimeout(() => RATE_LIMITED_TITLES.delete(cacheKey), 30000);

    const fallbackResult = {
      poster: PLACEHOLDER_POSTER,
      banner: PLACEHOLDER_BANNER,
    };
    cache.set(cacheKey, fallbackResult, 300);
    return fallbackResult;
  }
}
