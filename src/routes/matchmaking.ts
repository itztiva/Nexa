import app from "..";

export default function () {
  app.get("/waitingroom/api/waitingroom", async (c) => {
    return c.json([]);
  });
  app.get(
    "/fortnite/api/matchmaking/session/findPlayer/:id", async (c) => {
    return c.json([]);
  });

  app.post("/fortnite/api/matchmaking/session/:SessionId/join", async (c) => {
    return c.json([]);
  });
}
