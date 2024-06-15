import app from "..";
import { Nexa } from "../utils/handlers/errors";
import jwt from "jsonwebtoken";

interface requestBody {
  [key: string]: any;
}

export default function () {
  app.post("/account/api/oauth/token", async (c) => {
    const body: requestBody = await c.req.parseBody();

    console.log(body);
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
}
