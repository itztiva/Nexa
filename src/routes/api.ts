import app from "..";
import axios from "axios";
import path from "node:path";
import fs from "node:fs";

export default function () {
  app.post("/datarouter/api/v1/public/data", async (c) => {
    return c.json([]);
  });

  app.get("/account/api/public/account/*/externalAuths", async (c) => {
    return c.json([]);
  });

  app.get("/launcher/api/public/distributionpoints", (c) => {
    return c.json({
      distributions: [
        "http://localhost:5535/",
        "https://download.epicgames.com/",
        "https://epicgames-download1.akamaized.net/",
        "https://fastly-download.epicgames.com/",
      ],
    });
  });

  app.post("/api/v1/fortnite-br/interactions/contentHash", async (c) => {
    const body: any = c.req.json();
    return c.json({
      sessionId: body.sessionId,
      sessionStartTimestamp: body.sessionStartTimestamp,
      surfaces: [
        {
          surfaceId: "br-motd",
          contentMeta: [
            '{"c93adbc7a8a9f94a916de62aa443e2d6":["93eff180-1465-496e-9be4-c02ef810ad82"]}',
          ],
          events: [
            {
              contentHash: "c93adbc7a8a9f94a916de62aa443e2d6",
              type: "impression",
              count: 1,
              timestamp: "2023-12-03T10:17:41.387Z",
              lastTimestamp: "2023-12-03T10:17:41.387Z",
            },
          ],
        },
      ],
    });
  });

  app.get("/api/v2/interactions/aggregated/Fortnite/:accountId", async (c) => {
    return c.json([]);
  });

  app.get("/fortnite/api/game/v2/privacy/account/:accountId", async (c) => {
    return c.json({
      "accountId": c.req.param("accountId"),
      "optOutOfPublicLeaderboards": false
    })
  })

  app.post("/region/check", async (c) => {
    return c.json({
      content_id: "AF9yLAAsklQALFTy",
      allowed: true,
      resolved: true,
      limit: "Res=656",
    });
  });

  app.get("/fortnite/api/game/v2/br-inventory/account", async (c) => {
    return c.json({
      stash: {
        globalcash: 69,
      },
    });
  });

  app.get("/:trackdata", async (c) => {
    const data: any = await axios.get(
      `https://cdn.qstv.on.epicgames.com/${c.req.param("trackdata")}`
    );
    return c.json(data.data);
  });

  app.get("/presence/api/v1/_/:accountId/settings/subscriptions", async (c) => {
    return c.json([]);
  });

  app.get("/eulatracking/api/public/agreements/fn/account/*", async (c) => {
    return c.json([]);
  });

  app.post("/datarouter/api/v1/public/data/clients", async (c) => {
    return c.json([]);
  });

  app.post("/telemetry/data/datarouter/api/v1/public/data", async (c) => {
    return c.json([]);
  });

  app.get("/Builds/Fortnite/Content/CloudDir/*.manifest", async (c: any) => {
    c.header("Content-Type", "application/octet-stream");
    const manifest: any = fs.readFileSync(
      path.join(__dirname, "..", "..", "static", "assets", "Moonlight.manifest")
    );
    return c.body(manifest);
  });

  app.get("/Builds/Fortnite/Content/CloudDir/*.ini", async (c: any) => {
    const ini: any = fs.readFileSync(
      path.join(__dirname, "..", "..", "static", "assets", "stuff.ini")
    );
    return c.body(ini);
  });

  app.post("/fortnite/api/game/v2/grant_access/*", async (c) => {
    c.json({});
    return c.status(204);
  });

  app.get("/fortnite/api/game/v2/enabled_features", async (c) => {
    return c.json([]);
  });

  app.post("/fortnite/api/game/v2/tryPlayOnPlatform/account/*", async (c) => {
    c.header("Content-Type", "text/plain");
    return c.text("true");
  });

  app.get("/fortnite/api/v2/versioncheck/*", async (c) => {
    return c.json({
      type: "NO_UPDATE",
    });
  });

  app.post("/api/v1/user/setting", async (c) => {
    return c.json({});
  });

  app.get("/fortnite/api/receipts/v1/account/*/receipts", async (c) => {
    return c.json([]);
  });

  app.get("/account/api/public/account/:accountId/externalAuths", async (c) => {
    c.status(204);
    return c.json({});
  });

  app.post("/fortnite/api/game/v2/tryPlayOnPlatform/account/*", async (c) => {
    c.header("Content-Type", "text/plain");
    return c.text("true");
  });

  app.get("/socialban/api/public/v1/:accountId", async (c) => {
    return c.json({});
  });

  app.get(
    "/eulatracking/api/public/agreements/fn/account/:accountId",
    async (c) => {
      return c.json({});
    }
  );

  app.get("/fortnite/api/game/v2/creative/*", async (c) => {
    return c.json({});
  });

  app.get("/affiliate/api/public/affiliates/slug/:affiliateName", async (c) => {
    return c.json({});
  });

  app.get("/content-controls/:accountId", async (c) => {
    return c.json({});
  });

  app.get("/content-controls/:accountId/rules/namespaces/fn", async (c) => {
    return c.json({});
  });

  app.post("/content-controls/:accountId/verify-pin", async (c) => {
    return c.json({});
  });

  app.get("/api/v2/interactions/aggregated/Fortnite/:accountId", async (c) => {
    return c.json({});
  });

  app.get("/api/v1/namespace/fn/worlds/accessibleTo/:accountid", async (c) => {
    return c.json({});
  });

  app.get("/api/v1/namespace/fn/worlds/accessibleTo/:accountID", async (c) => {
    return c.json({});
  });

  app.post("/api/v1/namespace/fn/worlds/account/:accountId", async (c) => {
    return c.json({});
  });
}
