import app from "..";
import { Nexa } from "../utils/handlers/errors";
import jwt from "jsonwebtoken";

interface requestBody {
  [key: string]: any;
}

export default function () {
  app.post("/account/api/oauth/token", async (c) => {
    const body: requestBody = await c.req.parseBody();
    let accountId = body.username || "moonlight";
    if (accountId.includes("@")) {
      accountId = accountId.split("@")[0];
    }

    let t = jwt.sign(
      {
        email: accountId,
        password: "Nexapassword",
        type: "access",
      },
      "NexaKey"
    );

    return c.json({
      access_token: `eg1~${t}`,
      expires_in: 28800,
      expires_at: "9999-12-02T01:12:01.100Z",
      token_type: "bearer",
      refresh_token: `eg1~${t}`,
      refresh_expires: 86400,
      refresh_expires_at: "9999-12-02T01:12:01.100Z",
      account_id: accountId,
      client_id: "clientId",
      internal_client: true,
      client_service: "fortnite",
      displayName: accountId,
      app: "fortnite",
      in_app_id: accountId,
      device_id: "deviceId",
    });
  });

  app.get("/account/api/oauth/verify", async (c) => {
    const body: requestBody = await c.req.parseBody();
    const authorization = c.req.header("authorization");

    let accountId = body.username || "Nexa";
    if (accountId.includes("@")) {
      accountId = accountId.split("@")[0];
    }

    c.json({
      token: authorization,
      session_id: "9a1f5e80b47d2c3e6f8a0dc592b4fe7d",
      token_type: "bearer",
      client_id: "clientId",
      internal_client: true,
      client_service: "fortnite",
      account_id: accountId,
      expires_in: 28800,
      expires_at: "9999-12-02T01:12:01.100Z",
      auth_method: "exchange_code",
      displayName: accountId,
      app: "fortnite",
      in_app_id: accountId,
      device_id: "deviceId",
    });
  });

  app.delete("/account/api/oauth/sessions/kill/*", async (c) => {
    c.status(204);
    return c.json({});
  });

  app.get("/account/api/public/account/:accountId", async (c) => {
    let accountId = c.req.param("accountId");

    if (accountId.includes("@")) {
      accountId = accountId.split("@")[0];
    }

    return c.json({
      id: accountId,
      displayName: accountId,
      name: accountId,
      email: accountId + "@nexa.com",
      failedLoginAttempts: 0,
      lastLogin: new Date().toISOString(),
      numberOfDisplayNameChanges: 0,
      ageGroup: "UNKNOWN",
      headless: false,
      country: "US",
      lastName: "Server",
      preferredLanguage: "en",
      canUpdateDisplayName: false,
      tfaEnabled: false,
      emailVerified: true,
      minorVerified: false,
      minorExpected: false,
      minorStatus: "NOT_MINOR",
      cabinedMode: false,
      hasHashedEmail: false,
    });
  });

  app.get("/account/api/public/account", async (c) => {
    const response = [];

    const query = c.req.query("accountId");

    if (typeof query === "string") {
      let accountId = query;
      if (accountId.includes("@")) {
        accountId = accountId.split("@")[0];
      }
      response.push({
        id: accountId,
        displayName: accountId,
        externalAuths: {},
      });
    }

    if (Array.isArray(query)) {
      for (let accountId of query) {
        if (accountId.includes("@")) {
          accountId = accountId.split("@")[0];
        }
        response.push({
          id: accountId,
          displayName: accountId,
          externalAuths: {},
        });
      }
    }

    return c.json(response);
  });
}
