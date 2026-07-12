import axios from "axios";

export class SankaClient {
  private readonly baseUrl = "https://www.sankavollerei.web.id";

  async get<T>(url: string): Promise<T> {
    const response = await axios.get<T>(`${this.baseUrl}${url}`);

    return response.data;
  }
}