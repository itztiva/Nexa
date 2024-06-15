import { Hono } from "hono";

const app = new Hono({ strict: false });

export default app

Bun.serve({
    port: 5555,
    fetch: app.fetch
})

app.get("/", async (c) => {
    return c.body("hehe")
})