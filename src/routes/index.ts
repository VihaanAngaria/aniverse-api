import { Hono } from "hono";

import health from "./health.route";
import search from "./search.route";
import anime from "./anime.route";
import sanka from "./sanka.route";

const routes = new Hono();

routes.route("/health", health);
routes.route("/search", search);
routes.route("/anime", anime);
routes.route("/sanka", sanka);

export default routes;