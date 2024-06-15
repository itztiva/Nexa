import app from "..";
import { Nexa } from "../utils/handlers/errors";
import jwt from "jsonwebtoken";
import logger from "../utils/logs/logger";

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

  app.post("/epic/oauth/v2/token", async (c) => {
    try {
      const body: any = await c.req.parseBody()
      const scope = c.req.param("scope")
      const JWT = body.refresh_token.replace("eg1~", "")
      const JWTdecode: any = jwt.decode(JWT)
          let access_token = jwt.sign({
        "sub": JWTdecode["sub"],
        "pfsid": "fn",
        "iss": "https://api.epicgames.dev/epic/oauth/v1",
        "dn": JWTdecode["sub"],
        "nonce": "n-01/jkXYh/9P5JimUEpSisDyK3Xw=",
        "pfpid": "prod-fn",
        "sec": 1,
        "aud": "ec684b8c687f479fadea3cb2ad83f5c6",
        "pfdid": "62a9473a2dca46b29ccf17577fcf42d7",
        "t": "epic_id",
        "scope": scope,
        "appid": "fghi4567FNFBKFz3E4TROb0bmPS8h1GW",
        "exp": 9668536326,
        "iat": 1668529126,
        "jti": JWTdecode["jti"]
      }, "ciao");
  
          let refresh_token = jwt.sign({
          "sub": JWTdecode["sub"],
          "pfsid": "fn",
          "iss": "https://api.epicgames.dev/epic/oauth/v1",
          "dn": JWTdecode["sub"],
          "pfpid": "prod-fn",
          "aud": "ec684b8c687f479fadea3cb2ad83f5c6",
          "pfdid": "62a9473a2dca46b29ccf17577fcf42d7",
          "t": "epic_id",
          "appid": "fghi4567FNFBKFz3E4TROb0bmPS8h1GW",
          "scope": scope,
          "exp": 9668557926,
          "iat": 1668529126,
          "jti": JWTdecode["jti"]
          }, "ciao");
  
          let id_token = jwt.sign({
          "sub": JWTdecode["sub"],
          "pfsid": "fn",
          "iss": "https://api.epicgames.dev/epic/oauth/v1",
          "dn": JWTdecode["sub"],
          "nonce": "n-e3Kcqw0hulXkbebFRBL8o5AwL3M=",
          "pfpid": "prod-fn",
          "aud": "ec684b8c687f479fadea3cb2ad83f5c6",
          "pfdid": "62a9473a2dca46b29ccf17577fcf42d7",
          "t": "id_token",
          "appid": "fghi4567FNFBKFz3E4TROb0bmPS8h1GW",
          "exp": 9668536326,
          "iat": 1668529126,
          "jti": JWTdecode["jti"]
          }, "ciao");
  
      return c.json({
        "scope":"basic_profile friends_list openid presence",
        "token_type":"bearer",
        "access_token": access_token,
        "refresh_token":refresh_token,
        "id_token":id_token,
        "expires_in":115200,
        "expires_at":"9999-12-31T23:59:59.999Z",
        "refresh_expires_in":115200,
        "refresh_expires_at":"9999-12-31T23:59:59.999Z",
        "account_id":JWTdecode["sub"],
        "client_id":"ec684b8c687f479fadea3cb2ad83f5c6",
        "application_id":"fghi4567FNFBKFz3E4TROb0bmPS8h1GW",
        "selected_account_id":JWTdecode["sub"],
        "merged_accounts": []
       })
      } catch (error) {
        logger.error(error)
      }
  });

  app.get("/account/api/oauth/verify", async (c) => {
    const body: requestBody = await c.req.parseBody();
    const authorization = c.req.header("authorization");

    let accountId = body.username || "Nexa";
    if (accountId.includes("@")) {
      accountId = accountId.split("@")[0];
    }

    return c.json({
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
