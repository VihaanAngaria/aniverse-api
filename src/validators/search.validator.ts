import { z } from "zod";

export const SearchQuerySchema = z.object({
  q: z
    .string({
      error: "Search query is required",
    })
    .trim()
    .min(1, "Search query cannot be empty")
    .max(100, "Search query is too long"),
});

export type SearchQuery = z.infer<typeof SearchQuerySchema>;