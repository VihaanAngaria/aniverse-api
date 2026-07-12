import axios from "axios";

export class HiAnimeClient {
  private readonly baseUrl = process.env.HIANIME_API!;

  async getEpisodes(providerId: string) {
    const response = await axios.get(
      `${this.baseUrl}/episodes/${providerId}`
    );

    return response.data;
  }
}