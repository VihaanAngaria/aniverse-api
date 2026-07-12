export const SEARCH_QUERY = `
query ($search: String) {
  Page(page: 1, perPage: 12) {
    media(search: $search, type: ANIME) {
      id

      title {
        romaji
        english
      }

      coverImage {
        extraLarge
      }

      episodes

      format
    }
  }
}
`;