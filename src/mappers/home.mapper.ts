export class HomeMapper {
  static fromSanka(data: any) {
    return {
      ongoing: data.ongoing?.animeList ?? [],
      completed: data.completed?.animeList ?? [],
    };
  }
}