import app from "..";

export default function () {
    app.get("/epic/friends/v1/:accountId/blocklist", async (c) => {
        return c.json([]);
      });
    
      app.all("/v1/epic-settings/public/users/*/values", async (c) => {
        return c.json({});
      });
}