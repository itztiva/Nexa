import app from "..";
import axios from "axios";
import getVersion from "../utils/handlers/getVersion";

export default function () {
  app.get("/content/api/pages/fortnite-game", async (c) => {
    const version = getVersion(c);
    const game = await axios.get(
      "https://fortnitecontent-website-prod07.ol.epicgames.com/content/api/pages/fortnite-game"
    );
    const content = game.data;

    if (version.build == 7.40) {
        const playlist = content.playlistinformation.playlist_info.playlists;
      
        for (let i = 0; i < playlist.length; i++) {
          if (playlist[i].image === "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/v12/12BR_Cyclone_Astronomical_PlaylistTile_Main-1024x512-ab95f8d30d0742ba1759403320a08e4ea6f0faa0.jpg" &&
              playlist[i].playlist_name === "Playlist_Music_High" &&
              playlist[i].description === "Drop into Sweaty Sands for the ride of your life. (Photosensitivity Warning)" &&
              playlist[i].display_name === "Travis Scott’s Astronomical") {
              
            playlist[i].image = "https://i.imgur.com/3xoXe4R.png";
            playlist[i].description = "Fan-made Fortnite Live Event. Not endorsed by Epic Games. Drop into the water planet and enjoy the show.\nEvent Made by bigboitaj2005tajypoo(@jalzod), sizzyleaks & Era Dev Team(@ProjectEraFN)";
            playlist[i].display_name = "ERA FESTIVAL";
          }
        }
      }

    return c.json(content)
  });
}
