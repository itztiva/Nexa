import app from "..";
import jwt from "jsonwebtoken";
import getVersion from "../utils/handlers/getVersion";

export default function () {
  app.get("/waitingroom/api/waitingroom", async (c) => {
    return c.json([]);
  });
  app.get("/fortnite/api/matchmaking/session/findPlayer/:id", async (c) => {
    return c.json([]);
  });

  app.get("/fortnite/api/game/v2/matchmakingservice/ticket/player/*", async (c) => {
    const bucketId: any = c.req.query("bucketId");
    const playerMatchmakingKey = c.req.query("player.option.customKey");
    const playerPlaylist = bucketId.split(":")[3];
    const playerRegion = bucketId.split(":")[2];
    const ver = getVersion(c);

    const mmData = jwt.sign(
      {
        region: playerRegion,
        playlist: playerPlaylist,
        type: typeof playerMatchmakingKey === "string" ? "custom" : "normal",
        key: typeof playerMatchmakingKey === "string" ? playerMatchmakingKey : undefined,
        bucket: bucketId,
        version: `${ver.build}`,
      },
      "LVe51Izk03lzceNf1ZGZs0glGx5tKh7f",
    );
    var data = mmData.split(".");
    return c.json({
      serviceUrl: "ws://127.0.0.1:5555",
      ticketType: "mms-player",
      payload: data[0] + "." + data[1],
      signature: undefined,
    });
  });

  app.post("/fortnite/api/matchmaking/session/:SessionId/join", async (c) => {
    return c.json([]);
  });
}
