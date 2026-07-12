import type { Context } from "hono";
import { SearchService } from "../services/search.service";

export class SearchController {
  static async search(c: Context) {
    const query = c.req.query("q");

    if (!query) {
      return c.json(
        {
          success: false,
          message: "Missing search query",
        },
        400
      );
    }

    const results = await SearchService.search(query);

    return c.json(results);
  }
}