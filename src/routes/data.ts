import app from "../index";
import axios from "axios";
import getVersion from "../utils/handlers/getVersion";

export default function () {
  app.get("/content/api/pages/fortnite-game", async (c) => {
    const version = getVersion(c);
    const game: any = await axios.get(
      "https://fortnitecontent-website-prod07.ol.epicgames.com/content/api/pages/fortnite-game",
    );
    let content: any = game.data;

    content = Object.assign(
      {},
      content,
      {
        emergencynotice: {
          news: {
            platform_messages: [],
            _type: "Battle Royale News",
            messages: [
              {
                hidden: false,
                _type: "CommonUI Simple Message Base",
                subgame: "br",
                body: "Made by Itztiva \nDiscord: https://discord.gg/nexa-1229545680641462282",
                title: "Nexa",
                spotlight: false,
              },
            ],
          },
          "jcr:isCheckedOut": true,
          _title: "emergencynotice",
          _noIndex: false,
          alwaysShow: true,
          "jcr:baseVersion": "a7ca237317f1e761d4ee60-7c40-45a8-aa3e-bb0a2ffa9bb5",
          _activeDate: "2018-08-06T19:00:26.217Z",
          lastModified: "2020-10-30T04:50:59.198Z",
          _locale: "en-US",
        },
      },
      {
        emergencynoticev2: {
          "jcr:isCheckedOut": true,
          _title: "emergencynoticev2",
          _noIndex: false,
          emergencynotices: {
            _type: "Emergency Notices",
            emergencynotices: [
              {
                hidden: false,
                _type: "CommonUI Emergency Notice Base",
                title: "Nexa",
                body: "Made by Itztiva \nDiscord: https://discord.gg/nexa-1229545680641462282",
              },
            ],
          },
          _activeDate: "2018-08-06T19:00:26.217Z",
          lastModified: "2021-03-17T15:07:27.924Z",
          _locale: "en-US",
        },
        battleroyalenewsv2: {
          news: {
            motds: [
              {
                entryType: "Website",
                image:
                  "https://media.discordapp.net/attachments/1241535588394471545/1251931646555324426/Izdelek_brez_naslova_33.png?ex=66705fb4&is=666f0e34&hm=730eb730ea6523eabe6ec8956c9d1fcb06719189f0dbf76358c1f9c55b366143&=&format=webp&quality=lossless&width=1200&height=389",
                tileImage:
                  "https://media.discordapp.net/attachments/1241535588394471545/1251931646555324426/Izdelek_brez_naslova_33.png?ex=66705fb4&is=666f0e34&hm=730eb730ea6523eabe6ec8956c9d1fcb06719189f0dbf76358c1f9c55b366143&=&format=webp&quality=lossless&width=1200&height=389",
                videoMute: false,
                hidden: false,
                tabTitleOverride: "Nexa",
                _type: "CommonUI Simple Message MOTD",
                title: "Nexa",
                body: "Made by Itztiva \nDiscord: https://discord.gg/nexa-1229545680641462282",
                videoLoop: false,
                videoStreamingEnabled: false,
                sortingPriority: 0,
                id: "NexaNewsBR",
                videoAutoplay: false,
                videoFullscreen: false,
                spotlight: false,
                websiteURL: "https://discord.gg/nexa-1229545680641462282",
                websiteButtonText: "Join our discord",
              },
            ],
          },
          "jcr:isCheckedOut": true,
          _title: "battleroyalenewsv2",
          header: "",
          style: "None",
          _noIndex: false,
          alwaysShow: false,
          "jcr:baseVersion": "a7ca237317f1e704b1a186-6846-4eaa-a542-c2c8ca7e7f29",
          _activeDate: "2020-01-21T14:00:00.000Z",
          lastModified: "2021-02-10T23:57:48.837Z",
          _locale: "en-US",
        },
      },
    );

    if (version.build == 7.4) {
      const playlist = content.playlistinformation.playlist_info.playlists;

      for (let i = 0; i < playlist.length; i++) {
        if (
          playlist[i].image ===
          "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/v12/12BR_Cyclone_Astronomical_PlaylistTile_Main-1024x512-ab95f8d30d0742ba1759403320a08e4ea6f0faa0.jpg" &&
          playlist[i].playlist_name === "Playlist_Music_High" &&
          playlist[i].description ===
          "Drop into Sweaty Sands for the ride of your life. (Photosensitivity Warning)" &&
          playlist[i].display_name === "Travis Scott’s Astronomical"
        ) {
          playlist[i].image = "https://i.imgur.com/3xoXe4R.png";
          playlist[i].description =
            "Fan-made Fortnite Live Event. Not endorsed by Epic Games. Drop into the water planet and enjoy the show.\nEvent Made by bigboitaj2005tajypoo(@jalzod), sizzyleaks & Era Dev Team(@ProjectEraFN)";
          playlist[i].display_name = "ERA FESTIVAL";
        }
      }
    }

    if (version.build == 8.51) {
      const playlist = content.playlistinformation.playlist_info.playlists;

      for (let i = 0; i < playlist.length; i++) {
        if (
          playlist[i].image ===
          "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/v12/12BR_Cyclone_Astronomical_PlaylistTile_Main-1024x512-ab95f8d30d0742ba1759403320a08e4ea6f0faa0.jpg" &&
          playlist[i].playlist_name === "Playlist_Music_High" &&
          playlist[i].description ===
          "Drop into Sweaty Sands for the ride of your life. (Photosensitivity Warning)" &&
          playlist[i].display_name === "Travis Scott’s Astronomical"
        ) {
          playlist[i].image =
            "https://static.wikia.nocookie.net/fortnite/images/1/1b/Breakthrough_%28Full%29_-_Loading_Screen_-_Fortnite.png/revision/latest/scale-to-width-down/1000?cb=20211112181350";
          playlist[i].description = "The choice is yours!";
          playlist[i].display_name = "The Unvaulting";
        }
      }
    }

    if (version.build == 9.4 || version.build == 9.41) {
      const playlist = content.playlistinformation.playlist_info.playlists;

      for (let i = 0; i < playlist.length; i++) {
        if (
          playlist[i].image ===
          "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/v12/12BR_Cyclone_Astronomical_PlaylistTile_Main-1024x512-ab95f8d30d0742ba1759403320a08e4ea6f0faa0.jpg" &&
          playlist[i].playlist_name === "Playlist_Music_High" &&
          playlist[i].description ===
          "Drop into Sweaty Sands for the ride of your life. (Photosensitivity Warning)" &&
          playlist[i].display_name === "Travis Scott’s Astronomical"
        ) {
          playlist[i].image =
            "https://i.kinja-img.com/image/upload/c_fit,q_60,w_1315/c0wwjgqh8weurqve8zkb.jpg0";
          playlist[i].description =
            "Initiate Island Defense Protocol. Emergency hyperfuel jetpacks have been granted. Take to the skies and find cover on sky platforms.";
          playlist[i].display_name = "The Final Showdown";
        }
      }
    }

    if (version.season === 10) {
      content.dynamicbackgrounds.backgrounds.backgrounds[0].stage = "seasonx";
      content.dynamicbackgrounds.backgrounds.backgrounds[0].backgroundimage = "";
    } else if (version.season === 11) {
      if (version.build === 11.31 || version.build === 11.4) {
        content.dynamicbackgrounds.backgrounds.backgrounds[0].stage = "Winter19";
        content.dynamicbackgrounds.backgrounds.backgrounds[0].backgroundimage = "";
      } else {
        content.dynamicbackgrounds.backgrounds.backgrounds[0].stage = "season11";
        content.dynamicbackgrounds.backgrounds.backgrounds[0].backgroundimage = "";
      }
    } else if (version.season === 12) {
      content.dynamicbackgrounds.backgrounds.backgrounds[0].stage = "season12";
      content.dynamicbackgrounds.backgrounds.backgrounds[0].backgroundimage = "";
    } else if (version.season === 13) {
      content.dynamicbackgrounds.backgrounds.backgrounds[0].stage = "season13";
      content.dynamicbackgrounds.backgrounds.backgrounds[0].backgroundimage = "";
    } else if (version.season === 14) {
      content.dynamicbackgrounds.backgrounds.backgrounds[0].stage = "season14";
      content.dynamicbackgrounds.backgrounds.backgrounds[0].backgroundimage = "";
    } else if (version.season === 15) {
      content.dynamicbackgrounds.backgrounds.backgrounds[0].stage = "season15";
      content.dynamicbackgrounds.backgrounds.backgrounds[0].backgroundimage = "";

      if (version.build === 15.1) {
        content.dynamicbackgrounds.backgrounds.backgrounds[0].stage = "season15xmas";
        content.dynamicbackgrounds.backgrounds.backgrounds[1].stage = "XmasStore2020";
      }
    } else if (version.season === 16) {
      content.dynamicbackgrounds.backgrounds.backgrounds[0].stage = "season16";
      content.dynamicbackgrounds.backgrounds.backgrounds[0].backgroundimage = "";
    } else if (version.season === 17) {
      content.dynamicbackgrounds.backgrounds.backgrounds[0].stage = "season17";
      content.dynamicbackgrounds.backgrounds.backgrounds[0].backgroundimage = "";
    } else if (version.season === 18) {
      content.dynamicbackgrounds.backgrounds.backgrounds[0].stage = "season18";
      content.dynamicbackgrounds.backgrounds.backgrounds[0].backgroundimage = "";
    } else if (version.season === 19) {
      if (version.build === 19.01) {
        content.dynamicbackgrounds.backgrounds.backgrounds[0].stage = "winter2021";
        content.dynamicbackgrounds.backgrounds.backgrounds[0].backgroundimage =
          "https://cdn2.unrealengine.com/t-bp19-lobby-xmas-2048x1024-f85d2684b4af.png";
      } else {
        content.dynamicbackgrounds.backgrounds.backgrounds[0].stage = "season19";
        content.dynamicbackgrounds.backgrounds.backgrounds[0].backgroundimage = "";
      }
    } else if (version.season === 20) {
      if (version.build === 20.4) {
        content.dynamicbackgrounds.backgrounds.backgrounds[0].stage = "season20";
        content.dynamicbackgrounds.backgrounds.backgrounds[0].backgroundimage =
          "https://cdn2.unrealengine.com/t-bp20-40-armadillo-glowup-lobby-2048x2048-2048x2048-3b83b887cc7f.jpg";
      } else {
        content.dynamicbackgrounds.backgrounds.backgrounds[0].stage = "season20";
        content.dynamicbackgrounds.backgrounds.backgrounds[0].backgroundimage =
          "https://cdn2.unrealengine.com/s20-landscapev4-2048x1024-2494a103ae6c.png";
      }
    } else if (version.season === 21) {
      if (version.build === 21.3) {
        content.dynamicbackgrounds.backgrounds.backgrounds[0].stage = "season2130";
        content.dynamicbackgrounds.backgrounds.backgrounds[0].backgroundimage =
          "https://cdn2.unrealengine.com/nss-lobbybackground-2048x1024-f74a14565061.jpg";
      } else {
        content.dynamicbackgrounds.backgrounds.backgrounds[0].stage = "season2100";
        content.dynamicbackgrounds.backgrounds.backgrounds[0].backgroundimage =
          "https://cdn2.unrealengine.com/s21-lobby-background-2048x1024-2e7112b25dc3.jpg";
      }
    } else if (version.season === 22) {
      content.dynamicbackgrounds.backgrounds.backgrounds[0].backgroundimage =
        "https://cdn2.unrealengine.com/t-bp22-lobby-square-2048x2048-2048x2048-e4e90c6e8018.jpg";
    } else if (version.season === 23) {
      if (version.build === 23.1) {
        content.dynamicbackgrounds.backgrounds.backgrounds[0].backgroundimage =
          "https://cdn2.unrealengine.com/t-bp23-winterfest-lobby-square-2048x2048-2048x2048-277a476e5ca6.png";
      } else {
        content.dynamicbackgrounds.backgrounds.backgrounds[0].backgroundimage =
          "https://cdn2.unrealengine.com/t-bp23-lobby-2048x1024-2048x1024-26f2c1b27f63.png";
      }
    } else if (version.season === 24) {
      content.dynamicbackgrounds.backgrounds.backgrounds[0].stage = "defaultnotris";
      content.dynamicbackgrounds.backgrounds.backgrounds[0].backgroundimage =
        "https://static.wikia.nocookie.net/fortnite/images/e/e7/Chapter_4_Season_2_-_Lobby_Background_-_Fortnite.png";
    } else if (version.season === 25) {
      content.dynamicbackgrounds.backgrounds.backgrounds[0].stage = "defaultnotris";
      content.dynamicbackgrounds.backgrounds.backgrounds[0].backgroundimage =
        "https://static.wikia.nocookie.net/fortnite/images/c/ca/Chapter_4_Season_3_-_Lobby_Background_-_Fortnite.png";
    } else if (version.season === 26) {
      if (version.build === 26.3) {
        content.dynamicbackgrounds.backgrounds.backgrounds[0].stage = "season2630";
        content.dynamicbackgrounds.backgrounds.backgrounds[0].backgroundimage =
          "https://cdn2.unrealengine.com/s26-lobby-timemachine-final-2560x1440-a3ce0018e3fa.jpg";
      } else {
        content.dynamicbackgrounds.backgrounds.backgrounds[0].stage = "season2600";
        content.dynamicbackgrounds.backgrounds.backgrounds[0].backgroundimage =
          "https://cdn2.unrealengine.com/0814-ch4s4-lobby-2048x1024-2048x1024-e3c2cf8d342d.png";
      }
    } else if (version.season === 27) {
      if (version.build === 27.11) {
        content.dynamicbackgrounds.backgrounds.backgrounds[0].stage = "defaultnotris";
        content.dynamicbackgrounds.backgrounds.backgrounds[0].backgroundimage =
          "https://cdn2.unrealengine.com/durianlobby2-4096x2048-242a51b6a8ee.jpg";
      } else {
        content.dynamicbackgrounds.backgrounds.backgrounds[0].stage = "season2700";
      }
    } else if (version.season === 28) {
      if (version.build === 28.2) {
        content.dynamicbackgrounds.backgrounds.backgrounds[0].stage = "defaultnotris";
        content.dynamicbackgrounds.backgrounds.backgrounds[0].backgroundimage =
          "https://cdn2.unrealengine.com/s28-tmnt-lobby-4096x2048-e6c06a310c05.jpg";
      } else {
        content.dynamicbackgrounds.backgrounds.backgrounds[0].backgroundimage =
          "https://cdn2.unrealengine.com/ch5s1-lobbybg-3640x2048-0974e0c3333c.jpg";
        content.dynamicbackgrounds.backgrounds.backgrounds[0].stage = "defaultnotris";
      }
    } else if (version.season === 29) {
      if (version.build === 29.2) {
        content.dynamicbackgrounds.backgrounds.backgrounds[0].stage = "defaultnotris";
        content.dynamicbackgrounds.backgrounds.backgrounds[0].backgroundimage =
          "https://cdn2.unrealengine.com/iceberg-lobby-3840x2160-217bb6ea8af9.jpg";
      } else if (version.build === 29.4) {
        content.dynamicbackgrounds.backgrounds.backgrounds[0].stage = "defaultnotris";
        content.dynamicbackgrounds.backgrounds.backgrounds[0].backgroundimage =
          "https://cdn2.unrealengine.com/mkart-2940-sw-fnbr-lobby-3840x2160-4f1f1486a54a.jpg";
      } else {
        content.dynamicbackgrounds.backgrounds.backgrounds[0].stage = "defaultnotris";
        content.dynamicbackgrounds.backgrounds.backgrounds[0].backgroundimage =
          "https://cdn2.unrealengine.com/br-lobby-ch5s2-4096x2304-a0879ccdaafc.jpg";
      }
    } else if (version.season === 29) {
      content.dynamicbackgrounds.backgrounds.backgrounds[0].stage = "season3100";
      content.dynamicbackgrounds.backgrounds.backgrounds[0].backgroundimage =
        "https://cdn2.unrealengine.com/ch5s4-lobbybg-final-2136x1202-e5885322faf1.jpg";
    } else {
      content.dynamicbackgrounds.backgrounds.backgrounds[0].backgroundimage = "";
      content.dynamicbackgrounds.backgrounds.backgrounds[0].backgroundimage;
      content.dynamicbackgrounds.backgrounds.backgrounds[0].stage = "";
      content.dynamicbackgrounds.backgrounds.backgrounds[0].stage;
    }

    return c.json(content);
  });
  // credits to neonite / hybridfnbr
  app.post("/api/v1/fortnite-br/surfaces/*/target", async (c) => {
    return c.json({
      contentType: "collection",
      contentId: "fortnite-br-br-motd-collection",
      tcId: "8784961a-44e7-4fd5-82a6-8ef11e8c211d",
      contentMeta: '{"c93adbc7a8a9f94a916de62aa443e2d6":["93eff180-1465-496e-9be4-c02ef810ad82"]}',
      contentItems: [
        {
          contentType: "content-item",
          contentId: "93eff180-1465-496e-9be4-c02ef810ad82",
          tcId: "5085a6fa-108c-4f0c-abdd-3259c6406890",
          contentFields: {
            Buttons: [
              {
                Action: {
                  _type: "MotdDiscoveryAction",
                  category: "set_br_playlists",
                  islandCode: "set_br_playlists",
                  shouldOpen: true,
                },
                Style: "0",
                Text: "Play Now",
                _type: "Button",
              },
            ],
            FullScreenBackground: {
              Image: [
                {
                  width: 1920,
                  height: 1080,
                  url: "https://cdn1.epicgames.com/offer/fn/Blade_2560x1440_2560x1440-95718a8046a942675a0bc4d27560e2bb",
                },
                {
                  width: 960,
                  height: 540,
                  url: "https://cdn1.epicgames.com/offer/fn/Blade_2560x1440_2560x1440-95718a8046a942675a0bc4d27560e2bb",
                },
              ],
              _type: "FullScreenBackground",
            },
            FullScreenBody: "Made by Itztiva\nDiscord: https://discord.gg/idk",
            FullScreenTitle: "Nexa",
            TeaserBackground: {
              Image: [
                {
                  width: 1024,
                  height: 512,
                  url: "https://cdn1.epicgames.com/offer/fn/Blade_2560x1440_2560x1440-95718a8046a942675a0bc4d27560e2bb",
                },
              ],
              _type: "TeaserBackground",
            },
            TeaserTitle: "Nexa",
            VerticalTextLayout: false,
          },
          contentSchemaName: "DynamicMotd",
          contentHash: "c93adbc7a8a9f94a916de62aa443e2d6",
        },
      ],
    });
  });
}
