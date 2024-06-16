import app from "..";
import axios from "axios";
import getVersion from "../utils/handlers/getVersion";
import path from "path";
import fs from "fs";

export default function () {
  app.get("/fortnite/api/storefront/v2/keychain", async (c) => {
    const keychain = await axios.get(
      "https://api.nitestats.com/v1/epic/keychain"
    );
    return c.json(keychain.data);
  });

  app.get("/fortnite/api/storefront/v2/catalog", async (c) => {
    const v1 = JSON.parse(fs.readFileSync(path.join(__dirname, "../../static/shop/v1.json"), "utf8")); // to build 26.2
    const v2 = JSON.parse(fs.readFileSync(path.join(__dirname, "../../static/shop/v2.json"), "utf8")); // to build 30.00
    const v3 = JSON.parse(fs.readFileSync(path.join(__dirname, "../../static/shop/v3.json"), "utf8")); // latest

    const ver = getVersion(c);

    if (ver.build >= 30.1) {
      return c.json(v3);
    }

    if (ver.build >= 26.3) {
      return c.json(v2);
    } else {
      return c.json(v1);
    }

  });
}
