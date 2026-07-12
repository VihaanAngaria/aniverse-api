import axios from "axios";

export class SankaClient {
  private readonly baseURL =
    process.env.SANKA_API || "https://www.sankavollerei.web.id";

  async get(path: string) {
    const response = await axios.get(`${this.baseURL}${path}`, {
      headers: {
        Accept: "application/json",
      },
    });

    return response.data;
  }
}