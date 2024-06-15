import app from "../index";
import axios from "axios";
import getVersion from "../utils/handlers/getVersion";

export default function () {
  app.get("/content/api/pages/fortnite-game", async (c) => {
    const version = getVersion(c);
    const game = await axios.get(
      "https://fortnitecontent-website-prod07.ol.epicgames.com/content/api/pages/fortnite-game"
    );
    const content = game.data;
    const backgrounds = content.dynamicbackgrounds.backgrounds.backgrounds;

    if (version.build == 7.40) {
      const playlist = content.playlistinformation.playlist_info.playlists;

      for (let i = 0; i < playlist.length; i++) {
        if (
          playlist[i].image === "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/v12/12BR_Cyclone_Astronomical_PlaylistTile_Main-1024x512-ab95f8d30d0742ba1759403320a08e4ea6f0faa0.jpg" &&
          playlist[i].playlist_name === "Playlist_Music_High" &&
          playlist[i].description === "Drop into Sweaty Sands for the ride of your life. (Photosensitivity Warning)" &&
          playlist[i].display_name === "Travis Scott’s Astronomical"
        ) {
          playlist[i].image = "https://i.imgur.com/3xoXe4R.png";
          playlist[i].description = "Fan-made Fortnite Live Event. Not endorsed by Epic Games. Drop into the water planet and enjoy the show.\nEvent Made by bigboitaj2005tajypoo(@jalzod), sizzyleaks & Era Dev Team(@ProjectEraFN)";
          playlist[i].display_name = "ERA FESTIVAL";
        }
      }
    }

    switch (version.season) {
      case 10:
        backgrounds[0].stage = 'seasonx';
        break;
      case 11:
        if (version.build == 11.31 || version.build == 11.40) {
          backgrounds[0].stage = 'Winter19';
        } else {
          backgrounds[0].stage = 'season11';
        }
        break;
      case 12:
        backgrounds[0].stage = 'season12';
        break;
      case 13:
        backgrounds[0].stage = 'season13';
        break;
      case 14:
        backgrounds[0].stage = 'season14';
        break;
      case 15:
        backgrounds[0].stage = 'season15';
        if (version.build == 15.10) {
          backgrounds[0].stage = 'season15xmas';
          backgrounds[1].stage = 'XmasStore2020';
        }
        break;
      case 16:
        backgrounds[0].stage = 'season16';
        break;
      case 17:
        backgrounds[0].stage = 'season17';
        break;
      case 18:
        backgrounds[0].stage = 'season18';
        break;
      case 19:
        if (version.build == 19.01) {
          backgrounds[0].stage = 'winter2021';
          backgrounds[0].backgroundimage = 'https://cdn2.unrealengine.com/t-bp19-lobby-xmas-2048x1024-f85d2684b4af.png';
        } else {
          backgrounds[0].stage = 'season19';
        }
        break;
      case 20:
        if (version.build == 20.40) {
          backgrounds[0].stage = 'season20';
          backgrounds[0].backgroundimage = 'https://cdn2.unrealengine.com/t-bp20-40-armadillo-glowup-lobby-2048x2048-2048x2048-3b83b887cc7f.jpg';
        } else {
          backgrounds[0].stage = 'season20';
          backgrounds[0].backgroundimage = 'https://cdn2.unrealengine.com/s20-landscapev4-2048x1024-2494a103ae6c.png';
        }
        break;
      case 21:
        if (version.build == 21.30) {
          backgrounds[0].stage = 'season2130';
          backgrounds[0].backgroundimage = 'https://cdn2.unrealengine.com/nss-lobbybackground-2048x1024-f74a14565061.jpg';
        } else {
          backgrounds[0].stage = 'season2100';
          backgrounds[0].backgroundimage = 'https://cdn2.unrealengine.com/s21-lobby-background-2048x1024-2e7112b25dc3.jpg';
        }
        break;
      case 22:
        backgrounds[0].backgroundimage = 'https://cdn2.unrealengine.com/t-bp22-lobby-square-2048x2048-2048x2048-e4e90c6e8018.jpg';
        break;
      case 23:
        if (version.build == 23.10) {
          backgrounds[0].backgroundimage = 'https://cdn2.unrealengine.com/t-bp23-winterfest-lobby-square-2048x2048-2048x2048-277a476e5ca6.png';
        } else {
          backgrounds[0].backgroundimage = 'https://cdn2.unrealengine.com/t-bp23-lobby-2048x1024-2048x1024-26f2c1b27f63.png';
        }
        break;
      case 24:
        backgrounds[0].stage = 'defaultnotris';
        backgrounds[0].backgroundimage = 'https://static.wikia.nocookie.net/fortnite/images/e/e7/Chapter_4_Season_2_-_Lobby_Background_-_Fortnite.png';
        break;
      case 25:
        backgrounds[0].stage = 'defaultnotris';
        backgrounds[0].backgroundimage = 'https://static.wikia.nocookie.net/fortnite/images/c/ca/Chapter_4_Season_3_-_Lobby_Background_-_Fortnite.png';
        break;
      case 26:
        if (version.build == 26.30) {
          backgrounds[0].stage = 'season2630';
          backgrounds[0].backgroundimage = 'https://cdn2.unrealengine.com/s26-lobby-timemachine-final-2560x1440-a3ce0018e3fa.jpg';
        } else {
          backgrounds[0].stage = 'season2600';
          backgrounds[0].backgroundimage = 'https://cdn2.unrealengine.com/0814-ch4s4-lobby-2048x1024-2048x1024-e3c2cf8d342d.png';
        }
        break;
      case 27:
        if (version.build == 27.11) {
          backgrounds[0].stage = 'defaultnotris';
          backgrounds[0].backgroundimage = 'https://cdn2.unrealengine.com/durianlobby2-4096x2048-242a51b6a8ee.jpg';
        } else {
          backgrounds[0].stage = 'season2700';
        }
        break;
      case 28:
        if (version.build == 28.20) {
          backgrounds[0].stage = 'defaultnotris';
          backgrounds[0].backgroundimage = 'https://cdn2.unrealengine.com/s28-tmnt-lobby-4096x2048-e6c06a310c05.jpg';
        } else {
          backgrounds[0].backgroundimage = 'https://cdn2.unrealengine.com/ch5s1-lobbybg-3640x2048-0974e0c3333c.jpg';
          backgrounds[0].stage = 'defaultnotris';
        }
        break;
      case 29:
        if (version.build == 29.20) {
          backgrounds[0].stage = 'defaultnotris';
          backgrounds[0].backgroundimage = 'https://cdn2.unrealengine.com/iceberg-lobby-3840x2160-217bb6ea8af9.jpg';
        } else if (version.build == 29.40) {
          backgrounds[0].stage = 'defaultnotris';
          backgrounds[0].backgroundimage = 'https://cdn2.unrealengine.com/mkart-2940-sw-fnbr-lobby-3840x2160-4f1f1486a54a.jpg';
        } else {
          backgrounds[0].stage = 'defaultnotris';
          backgrounds[0].backgroundimage = 'https://cdn2.unrealengine.com/br-lobby-ch5s2-4096x2304-a0879ccdaafc.jpg';
        }
        break;
      default:
        backgrounds[0].backgroundimage = content.dynamicbackgrounds.backgrounds.backgrounds[0].backgroundimage;
        backgrounds[0].stage = content.dynamicbackgrounds.backgrounds.backgrounds[0].stage;
    }

    return c.json(content);
  });
}