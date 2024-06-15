import app from "..";

export default function () {
    app.post("/datarouter/api/v1/public/data", async (c) => {
        return c.json([])
    });

    app.get("/account/api/public/account/*/externalAuths", async (c) => {
        return c.json([]);
    });

    app.delete("/account/api/oauth/sessions/kill/*", async (c) => {
        c.status(204);
        return c.json({});
    });

    app.post("/fortnite/api/game/v2/grant_access/*", async (c) => {
        c.json({});
        return c.status(204);
    });

    app.get("/fortnite/api/game/v2/enabled_features", async (c) => {
        return c.json({});
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
}
