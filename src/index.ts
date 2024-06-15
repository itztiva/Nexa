import { Hono } from "hono";
import path from 'node:path'
import { loadRoutes } from "./utils/startup/loadRoutes";
import { Nexa } from "./utils/handlers/errors";
import logger from "./utils/logs/logger";
import { cors } from "hono/cors";

const app = new Hono({ strict: false });

export default app

app.use("*", cors());

app.notFound((c) => c.json(Nexa.basic.notFound, 404));

Bun.serve({
    port: 5353,
    fetch: app.fetch
})

await loadRoutes(path.join(__dirname, "routes"), app);

logger.backend("Nexa started on port 5353")
