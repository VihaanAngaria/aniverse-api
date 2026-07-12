import { Context } from "hono";
import { WatchService } from "../services/watch.service";
import { fail, success } from "../utils/api-response";

const service = new WatchService();

export class WatchController {
  static async watch(c: Context) {
    const episodeId = c.req.param("episodeId");

    if (!episodeId) {
      return fail(c, "Episode ID is required", 400, "VALIDATION_ERROR");
    }

    const data = await service.getWatchData(episodeId);

    return success(c, data, "sanka");
  }
}