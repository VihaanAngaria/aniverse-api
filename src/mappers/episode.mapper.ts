export class EpisodeMapper {
  static fromSanka(data: any) {
    return {
      title: data.title,
      animeId: data.animeId,
      defaultStream: data.defaultStreamingUrl,

      qualities:
        data.server?.qualities?.map((quality: any) => ({
          quality: quality.title,

          servers:
            quality.serverList?.map((server: any) => ({
              id: server.serverId,
              name: server.title.trim(),
            })) ?? [],
        })) ?? [],
    };
  }
}