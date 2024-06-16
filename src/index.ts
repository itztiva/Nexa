import { Hono } from "hono";
import path from "node:path";
import { loadRoutes } from "./utils/startup/loadRoutes";
import { Nexa } from "./utils/handlers/errors";
import logger from "./utils/logger/logger";
import { cors } from "hono/cors";

const app = new Hono({ strict: false });

export default app;

app.use("*", cors());

app.notFound((c) => c.json(Nexa.basic.notFound, 404));

Bun.serve({
  port: 5353,
  fetch: app.fetch,
});

app.use(async (c, next) => {
  if (c.req.path === "/images/icons/gear.png" || c.req.path === "/favicon.ico")
    await next();
  else {
    await next();

    logger.backend(`${c.req.path} | ${c.req.method} | Status ${c.res.status}`);
  }
});

await loadRoutes(path.join(__dirname, "routes"), app);

logger.backend("Nexa started on port 5353");
