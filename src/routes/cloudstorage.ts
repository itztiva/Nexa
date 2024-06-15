import app from "..";
import crypto from "crypto";
import fs from "node:fs";
import path from "node:path";
import getVersion from "../utils/handlers/getVersion";

export default function () {
  app.get("/fortnite/api/cloudstorage/system", async (c) => {
    try {
      const hotfixesDir = path.join(__dirname, "../../static/hotfixes");
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
      const hotfixesDir = path.join(__dirname, "../../static/hotfixes");
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

  app.get('/fortnite/api/cloudstorage/system/:file', async (c) => {
    try {
      const version = getVersion(c);
      const filePath = path.join(
        __dirname,
        '../../static/hotfixes',
        c.req.param('file')
      );
      let fileContent = fs.readFileSync(filePath, { encoding: 'utf8' });
  
      if (c.req.param('file') === 'DefaultGame.ini') {
        const replacements: { [key: number]: { find: string; replace: string } } = {
          7.30: {
            find: '+FrontEndPlaylistData=(PlaylistName=Playlist_Music_Low, PlaylistAccess=(bEnabled=false, CategoryIndex=1, DisplayPriority=-999))',
            replace: '+FrontEndPlaylistData=(PlaylistName=Playlist_Music_Low, PlaylistAccess=(bEnabled=true, CategoryIndex=1, DisplayPriority=-999))'
          },
          7.40: {
            find: '+FrontEndPlaylistData=(PlaylistName=Playlist_Music_High, PlaylistAccess=(bEnabled=false, CategoryIndex=1, DisplayPriority=-999))',
            replace: '+FrontEndPlaylistData=(PlaylistName=Playlist_Music_High, PlaylistAccess=(bEnabled=true, CategoryIndex=1, DisplayPriority=-999))'
          },
          8.51: {
            find: '+FrontEndPlaylistData=(PlaylistName=Playlist_Music_Med, PlaylistAccess=(bEnabled=false, CategoryIndex=1, DisplayPriority=-999))',
            replace: '+FrontEndPlaylistData=(PlaylistName=Playlist_Music_Med, PlaylistAccess=(bEnabled=true, CategoryIndex=1, DisplayPriority=-999))'
          },
          9.40: {
            find: '+FrontEndPlaylistData=(PlaylistName=Playlist_Music_Higher, PlaylistAccess=(bEnabled=false, CategoryIndex=1, DisplayPriority=-999))',
            replace: '+FrontEndPlaylistData=(PlaylistName=Playlist_Music_Higher, PlaylistAccess=(bEnabled=true, CategoryIndex=1, DisplayPriority=-999))'
          },
          9.41: {
            find: '+FrontEndPlaylistData=(PlaylistName=Playlist_Music_Higher, PlaylistAccess=(bEnabled=false, CategoryIndex=1, DisplayPriority=-999))',
            replace: '+FrontEndPlaylistData=(PlaylistName=Playlist_Music_Higher, PlaylistAccess=(bEnabled=true, CategoryIndex=1, DisplayPriority=-999))'
          },
          10.40: {
            find: '+FrontEndPlaylistData=(PlaylistName=Playlist_Music_Highest, PlaylistAccess=(bEnabled=false, CategoryIndex=1, DisplayPriority=-999))',
            replace: '+FrontEndPlaylistData=(PlaylistName=Playlist_Music_Highest, PlaylistAccess=(bEnabled=true, CategoryIndex=1, DisplayPriority=-999))'
          },
          11.30: {
            find: '+FrontEndPlaylistData=(PlaylistName=Playlist_Music_Lowest, PlaylistAccess=(bEnabled=false, CategoryIndex=1, DisplayPriority=-999))',
            replace: '+FrontEndPlaylistData=(PlaylistName=Playlist_Music_Lowest, PlaylistAccess=(bEnabled=true, CategoryIndex=1, DisplayPriority=-999))'
          },
          12.41: {
            find: '+FrontEndPlaylistData=(PlaylistName=Playlist_Music_High, PlaylistAccess=(bEnabled=false, CategoryIndex=1, DisplayPriority=-999))',
            replace: '+FrontEndPlaylistData=(PlaylistName=Playlist_Music_High, PlaylistAccess=(bEnabled=true, CategoryIndex=1, DisplayPriority=-999))'
          },
          12.61: {
            find: '+FrontEndPlaylistData=(PlaylistName=Playlist_Fritter_64, PlaylistAccess=(bEnabled=false, CategoryIndex=1, DisplayPriority=-999))',
            replace: '+FrontEndPlaylistData=(PlaylistName=Playlist_Fritter_64, PlaylistAccess=(bEnabled=true, CategoryIndex=1, DisplayPriority=-999))'
          }
        };
  
        const replacement = replacements[version.build];
        if (replacement) {
          fileContent = fileContent.replace(replacement.find, replacement.replace);
        }
      }
  
      return c.text(fileContent);
    } catch (err) {
      console.error('Error fetching system file:', err);
      return c.notFound();
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
