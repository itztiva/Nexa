import app from "..";
import fs from "node:fs";
import path from "node:path";

const userpath = new Set();
const profilesDir = path.join(__dirname, "..", "..", "static", "profiles");

export default function () {
  app.post(
    "/fortnite/api/game/v2/profile/:accountId/client/:operation",
    async (c) => {
      let MultiUpdate: any = [];
      let profileChanges: any = [];
      let BaseRevision = 0;
      let profile: any;

      const query = c.req.query();

      if (!query.profileId) {
        return c.text("Profile ID not found", 404);
      }

      const profileId = query.profileId;

      const files = fs.readdirSync(profilesDir);
      files.forEach((file) => {
        if (file.endsWith(".json")) {
          const profiles = require(path.join(profilesDir, file));
          if (!profiles.rvn) profiles.rvn = 0;
          if (!profiles.items) profiles.items = {};
          if (!profiles.stats) profiles.stats = {};
          if (!profiles.stats.attributes) profiles.stats.attributes = {};
          if (!profiles.commandRevision) profiles.commandRevision = 0;

          const profilePath = path.join(profilesDir, `profile_${profileId}.json`);

          if (!fs.existsSync(profilePath)) {
            fs.writeFileSync(profilePath, JSON.stringify(profiles, null, 2));
          }

          if (file === `profile_${profileId}.json`) {
            profile = fs.existsSync(profilePath)
              ? JSON.parse(fs.readFileSync(profilePath, "utf8"))
              : profiles;
          }
        }
      });

      BaseRevision = profile ? profile.rvn : 0;

      switch (c.req.param("operation")) {
        case "QueryProfile":
          break;
        case "SetMtxPlatform":
          break;
        case "ClientQuestLogin":
          break;
        case "EquipBattleRoyaleCustomization":
          const body = await c.req.json();
          let statName;
          let itemToSlot;
          switch (body.slotName) {
            case "Character":
              statName = "favorite_character";
              itemToSlot = body.itemToSlot;
              profile.stats.attributes[statName] = itemToSlot;
              profileChanges.push({
                changeType: "statModified",
                name: statName,
                value: profile.stats.attributes[statName],
              });
              break;
            case "Backpack":
              statName = "favorite_backpack";
              itemToSlot = body.itemToSlot;
              profile.stats.attributes[statName] = itemToSlot;
              profileChanges.push({
                changeType: "statModified",
                name: statName,
                value: profile.stats.attributes[statName],
              });
              break;
            case "Pickaxe":
              statName = "favorite_pickaxe";
              itemToSlot = body.itemToSlot;
              profile.stats.attributes[statName] = itemToSlot;
              profileChanges.push({
                changeType: "statModified",
                name: statName,
                value: profile.stats.attributes[statName],
              });
              break;
            case "Glider":
              statName = "favorite_glider";
              itemToSlot = body.itemToSlot;
              profile.stats.attributes[statName] = itemToSlot;
              profileChanges.push({
                changeType: "statModified",
                name: statName,
                value: profile.stats.attributes[statName],
              });
              break;
            case "SkyDiveContrail":
              statName = "favorite_skydivecontrail";
              itemToSlot = body.itemToSlot;
              profile.stats.attributes[statName] = itemToSlot;
              profileChanges.push({
                changeType: "statModified",
                name: statName,
                value: profile.stats.attributes[statName],
              });
              break;
            case "MusicPack":
              statName = "favorite_musicpack";
              itemToSlot = body.itemToSlot;
              profile.stats.attributes[statName] = itemToSlot;
              profileChanges.push({
                changeType: "statModified",
                name: statName,
                value: profile.stats.attributes[statName],
              });
              break;
            case "LoadingScreen":
              statName = "favorite_loadingscreen";
              itemToSlot = body.itemToSlot;
              profile.stats.attributes[statName] = itemToSlot;
              profileChanges.push({
                changeType: "statModified",
                name: statName,
                value: profile.stats.attributes[statName],
              });
              break;
            case "Dance":
            case "ItemWrap":
              const bIsDance = body.slotName === "Dance";
              statName = bIsDance ? "favorite_dance" : "favorite_itemwraps";
              let arr = profile.stats.attributes[statName] || [];
              if (body.indexWithinSlot === -1) {
                arr = [];
                for (let i = 0; i < (bIsDance ? 6 : 7); ++i) {
                  arr[i] = body.itemToSlot;
                }
              } else {
                arr[body.indexWithinSlot || 0] = body.itemToSlot;
              }
              for (let i = 0; i < arr.length; ++i) {
                if (arr[i] == null) {
                  arr[i] = "";
                }
              }
              profile.stats.attributes[statName] = arr;
              profileChanges.push({
                changeType: "statModified",
                name: statName,
                value: profile.stats.attributes[statName],
              });
              break;
            default:
              break;
          }
          profile.rvn++;
          profile.commandRevision++;
          break;
        default:
          break;
      }

      profileChanges.push({
        changeType: "fullProfileUpdate",
        profile: profile,
      });

      const profilePath = path.join(profilesDir, `profile_${profileId}.json`);
      fs.writeFileSync(profilePath, JSON.stringify(profile, null, 2));

      const response = {
        profileRevision: profile ? profile.rvn || 0 : 0,
        profileId: query.profileId,
        profileChangesBaseRevision: BaseRevision,
        profileChanges: profileChanges,
        profileCommandRevision: profile ? profile.commandRevision || 0 : 0,
        serverTime: new Date().toISOString(),
        multiUpdate: MultiUpdate,
        responseVersion: 1,
      };

      userpath.add(profileId);

      return c.json(response);
    }
  );
}