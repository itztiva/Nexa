import app from "..";
import axios from "axios";
import getVersion from "../utils/handlers/getVersion";
import path from "path";
import fs from "fs";
import { Nexa } from "../utils/handlers/errors";

export default function () {
  app.get("/fortnite/api/storefront/v2/keychain", async (c) => {
    const keychain = await axios.get("https://api.nitestats.com/v1/epic/keychain");
    return c.json(keychain.data);
  });

  app.get("/catalog/api/shared/bulk/offers", async (c) => {
    return c.json([]);
  });

  app.get("/fortnite/api/storeaccess/v1/request_access/:accountId", async (c) => {
    return c.json([]);
  });

  app.get("/affiliate/api/public/affiliates/slug/:affiliateName", async (c) => {
    const affiliateName = c.req.param("affiliateName");
    return c.json({
      id: "aabbccddeeff11223344556677889900",
      slug: affiliateName,
      displayName: affiliateName,
      status: "ACTIVE",
      verified: true,
    });
  });

  app.get("/fortnite/api/storefront/v2/catalog", async (c) => {
    const useragent: any = c.req.header("user-agent");
    if (!useragent) return c.json(Nexa.internal.invalidUserAgent);

    const v1 = JSON.parse(
      fs.readFileSync(path.join(__dirname, "../../static/shop/v1.json"), "utf8"),
    ); // to build 26.2
    const v2 = JSON.parse(
      fs.readFileSync(path.join(__dirname, "../../static/shop/v2.json"), "utf8"),
    ); // to build 30.00
    const v3 = JSON.parse(
      fs.readFileSync(path.join(__dirname, "../../static/shop/v3.json"), "utf8"),
    ); // latest

    const ver = getVersion(c);

    switch (true) {
      case ver.build >= 30.1:
        return c.json(v3);
      case ver.build >= 26.3:
        return c.json(v2);
      default:
        return c.json(v1);
    }
  });
}
