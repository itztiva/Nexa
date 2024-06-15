import app from "..";
import fs from 'node:fs'
import path from "node:path"

const userpath = new Set();
const profilesDir = path.join(__dirname, '..', '..', 'static', 'profiles');

export default function () {
    app.post('/fortnite/api/game/v2/profile/:accountId/client/:operation', async (c) => {
        let MultiUpdate: any[] = [];
        let ApplyProfileChanges: any[] = [];
        let BaseRevision = 0;
        let profile: any;
      
        const query = c.req.query();
        
        if (!query.profileId) {
          return c.text('Profile ID not found', 404);
        }
      
        const profileId = query.profileId;
        
        const files = fs.readdirSync('../static/profiles');
        files.forEach((file) => {
          if (file.endsWith('.json')) {
            const profiles = require(`../../static/profiles/${file}`);
            if (!profiles.rvn) profiles.rvn = 0;
            if (!profiles.items) profiles.items = {};
            if (!profiles.stats) profiles.stats = {};
            if (!profiles.stats.attributes) profiles.stats.attributes = {};
            if (!profiles.commandRevision) profiles.commandRevision = 0;
      
            const accountId = c.req.param('accountId');
            const profilePath = path.join(profilesDir, `${profileId}.json`);
      
            if (!fs.existsSync(profilePath)) {
              fs.writeFileSync(profilePath, JSON.stringify(profiles, null, 2));
            }
      
            if (file === `profile_${profileId}.json`) {
              profile = fs.existsSync(profilePath)
                ? JSON.parse(fs.readFileSync(profilePath, 'utf8'))
                : profiles;
            }
          }
        });
      
        BaseRevision = profile ? profile.rvn : 0;
      
        switch (c.req.param('operation')) {
          case 'QueryProfile':
            break;
          case 'SetMtxPlatform':
            break;
          case 'ClientQuestLogin':
            break;
          default:
            break;
        }
      
        ApplyProfileChanges.push({
          changeType: 'fullProfileUpdate',
          profile: profile,
        });
      
        const response = {
          profileRevision: profile ? profile.rvn || 0 : 0,
          profileId: query.profileId,
          profileChangesBaseRevision: BaseRevision,
          profileChanges: ApplyProfileChanges,
          profileCommandRevision: profile ? profile.commandRevision || 0 : 0,
          serverTime: new Date().toISOString(),
          multiUpdate: MultiUpdate,
          responseVersion: 1,
        };
      
        userpath.add(profileId);
      
        return c.json(response);
      });
}