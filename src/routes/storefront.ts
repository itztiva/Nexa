import app from "..";
import axios from 'axios'

export default function () {
  app.get("/fortnite/api/storefront/v2/keychain", async (c) => {
    const keychain = await axios.get("https://api.nitestats.com/v1/epic/keychain")
    return c.json(keychain.data);
  });
}
