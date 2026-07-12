export interface StreamServer {
  id: string;
  name: string;
}

export interface StreamQuality {
  quality: string;
  servers: StreamServer[];
}

export interface WatchResponse {
  title: string;
  animeId: string;
  defaultStream: string;
  qualities: StreamQuality[];
}