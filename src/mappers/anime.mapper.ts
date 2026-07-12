export class AnimeMapper {
  static fromSanka(slug: string, anime: any) {
    return {
      id: slug,

      title: anime.title,

      poster: anime.poster,

      score: anime.score ? Number(anime.score) : null,

      status: anime.status,

      type: anime.type,

      episodes:
        anime.episodeList?.map((ep: any) => ({
          id: ep.episodeId,
          number: ep.eps,
          title: ep.title,
          date: ep.date,
        })) ?? [],

      genres:
        anime.genreList?.map((genre: any) => ({
          id: genre.genreId,
          name: genre.title,
        })) ?? [],
    };
  }
}