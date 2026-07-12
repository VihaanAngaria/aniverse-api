import type { Context } from "hono";
import { SearchService } from "../services/search.service";
import { SearchQuerySchema } from "../validators/search.validator";
import { success, fail } from "../utils/api-response";

export class SearchController {
  static async search(c: Context) {
    const parsed = SearchQuerySchema.safeParse({
      q: c.req.query("q"),
    });

    if (!parsed.success) {
      const message = parsed.error.issues[0]?.message ?? "Invalid search query";

      return fail(
        c,
        message,
        400,
        "VALIDATION_ERROR"
      );
    }

    const results = await SearchService.search(parsed.data.q);

    return success(c, results.results, "sanka");
  }
}