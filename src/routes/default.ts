import app from "..";
import path from 'node:path'
import fs from 'node:fs'

export default function () {
    app.post("/datarouter/api/v1/public/data", async (c) => {
        return c.json([])
    });

    app.get("/account/api/public/account/*/externalAuths", async (c) => {
        return c.json([]);
    });

    app.get("/launcher/api/public/distributionpoints", (c) => {
        return c.json({
            "distributions": [
                "http://localhost:5535/",
                "https://download.epicgames.com/",
                "https://epicgames-download1.akamaized.net/",
                "https://fastly-download.epicgames.com/"
            ]
        });
    });

    app.get("/Builds/Fortnite/Content/CloudDir/*.manifest", async (c: any) => {
        c.header("Content-Type", "application/octet-stream");
        const manifest: any = fs.readFileSync(path.join(__dirname, "..", "..", "static", "assets", "Moonlight.manifest"));
        return c.body(manifest);
    });
    
    app.get("/Builds/Fortnite/Content/CloudDir/*.ini", async (c: any) => {
        const ini: any = fs.readFileSync(path.join(__dirname, "..", "..", "static", "assets", "stuff.ini"));
        return c.body(ini);
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
