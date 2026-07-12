import { Context } from "hono";
import { WatchService } from "../services/watch.service";

const service = new WatchService();

export class WatchController {
  static async watch(c: Context) {
    const episodeId = c.req.param("episodeId");

    if (!episodeId) {
      return c.json(
        {
          success: false,
          message: "Episode ID is required",
        },
        400
      );
    }

    const data = await service.getWatchData(episodeId);

    return c.json({
      success: true,
      data,
    });
  }
}