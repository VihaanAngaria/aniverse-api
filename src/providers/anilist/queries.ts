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

export const ANIME_QUERY = `
query ($id: Int) {
  Media(id: $id, type: ANIME) {

    id

    title {
      romaji
      english
    }

    description(asHtml:false)

    episodes

    status

    averageScore

    season

    seasonYear

    genres

    coverImage {
      extraLarge
    }

    bannerImage

    studios(isMain:true) {
      nodes {
        name
      }
    }

  }
}
`;