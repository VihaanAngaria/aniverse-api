import type {
  WatchResponse,
  StreamQuality,
  StreamServer,
} from "../types/watch";

import type {
  SankaWatchResponse,
  SankaQuality,
  SankaServer,
} from "../providers/sanka/type";

export class EpisodeMapper {
  static fromSanka(data: SankaWatchResponse): WatchResponse {
    const qualities: StreamQuality[] =
      data.server?.qualities?.map(
        (quality: SankaQuality): StreamQuality => ({
          quality: quality.title,

          servers:
            quality.serverList?.map(
              (server: SankaServer): StreamServer => ({
                id: server.serverId,
                name: server.title.trim(),
              })
            ) ?? [],
        })
      ) ?? [];

    return {
      title: data.title,
      animeId: data.animeId,
      defaultStream: data.defaultStreamingUrl,
      qualities,
    };
  }
}