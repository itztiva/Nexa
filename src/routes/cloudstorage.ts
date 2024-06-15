import app from "..";
import crypto from "crypto";
import fs from "node:fs";
import path from "node:path";

export default function () {
  app.get("/fortnite/api/cloudstorage/system", async (c) => {
    try {
      const hotfixesDir = path.join(__dirname, "static/hotfixes");
      const csFiles: any = [];

      fs.readdirSync(hotfixesDir).forEach((file) => {
        const filePath = path.join(hotfixesDir, file);
        const f = fs.readFileSync(filePath);
        const fileStat = fs.statSync(filePath);

        csFiles.push({
          uniqueFilename: file,
          filename: file,
          hash: crypto.createHash("sha1").update(f).digest("hex"),
          hash256: crypto.createHash("sha256").update(f).digest("hex"),
          length: fileStat.size,
          contentType: "application/octet-stream",
          uploaded: new Date().toISOString(),
          storageType: "S3",
          storageIds: {},
          doNotCache: true,
        });
      });

      return c.json(csFiles);
    } catch (err) {
      console.error("Error fetching system cloudstorage:", err);
      return c.status(500);
    }
  });

  app.get("/fortnite/api/cloudstorage/system/config", async (c) => {
    try {
      const hotfixesDir = path.join(__dirname, "static/hotfixes");
      const csFiles: any = [];

      fs.readdirSync(hotfixesDir).forEach((file) => {
        const filePath = path.join(hotfixesDir, file);
        const f = fs.readFileSync(filePath);
        const fileStat = fs.statSync(filePath);

        csFiles.push({
          uniqueFilename: file,
          filename: file,
          hash: crypto.createHash("sha1").update(f).digest("hex"),
          hash256: crypto.createHash("sha256").update(f).digest("hex"),
          length: fileStat.size,
          contentType: "application/octet-stream",
          uploaded: new Date().toISOString(),
          storageType: "S3",
          storageIds: {},
          doNotCache: true,
        });
      });

      return c.json(csFiles);
    } catch (err) {
      console.error("Error fetching system config cloudstorage:", err);
      return c.status(500);
    }
  });

  app.get("/fortnite/api/cloudstorage/system/:file", async (c) => {
    try {
      const filePath = path.join(
        __dirname,
        "static/hotfixes",
        c.req.param("file")
      );
      const fileContent = fs.readFileSync(filePath, { encoding: "utf8" });

      return c.body(fileContent);
    } catch (err) {
      console.error("Error fetching system file:", err);
      return c.status(404);
    }
  });

  app.get("/fortnite/api/cloudstorage/user/:accountId", async (c) => {
    try {
      return c.json([]);
    } catch (err) {
      console.error("Error fetching user cloudstorage:", err);
      return c.status(500);
    }
  });
}
