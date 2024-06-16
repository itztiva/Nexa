import app from "..";
import getVersion from "../utils/handlers/getVersion";
import discoveryResponses from "../../static/discovery/events";
import path from "node:path";
import fs from "node:fs";
import crypto from "crypto";

export default function () {
  app.get("/fortnite/api/discovery/accessToken/*", async (c) => {
    const useragent: any = c.req.header("user-agent");
    const regex = useragent.match(/\+\+Fortnite\+Release-\d+\.\d+/);
    return c.json({
      branchName: regex[0],
      appId: "Fortnite",
      token: `${crypto.randomBytes(10).toString("hex")}=`,
    });
  });

  app.post("/api/v2/discovery/surface/*", async (c) => {
    return c.json({
      panels: [
        {
          panelName: "Homebar_V3",
          panelDisplayName: "Test_EpicsPicksHomebar",
          featureTags: ["col:5", "homebar"],
          firstPage: {
            results: [
              {
                lastVisited: null,
                linkCode: "reference_byepicnocompetitive_5",
                isFavorite: false,
                globalCCU: 1,
              },
            ],
            hasMore: false,
            panelTargetName: null,
          },
          panelType: "CuratedList",
          playHistoryType: null,
        },
        {
          panelName: "ByEpicNoCompetitive",
          panelDisplayName: "By Epic",
          featureTags: ["col:5"],
          firstPage: {
            results: [
              {
                lastVisited: null,
                linkCode: "set_br_playlists",
                isFavorite: false,
                globalCCU: 1,
              },
              {
                lastVisited: null,
                linkCode: "playlist_durian",
                isFavorite: false,
                globalCCU: 1,
              },
              {
                lastVisited: null,
                linkCode: "playlist_papaya",
                isFavorite: false,
                globalCCU: 1,
              },
              {
                lastVisited: null,
                linkCode: "playlist_juno",
                isFavorite: false,
                globalCCU: 1,
              },
            ],
            hasMore: true,
            panelTargetName: null,
          },
          panelType: "AnalyticsList",
          playHistoryType: null,
        },
      ],
    });
  });

  app.post("/api/v1/assets/Fortnite/*", async (c) => {
    const assets = {
      FortCreativeDiscoverySurface: {
        meta: {
          promotion: 26,
        },
        assets: {
          CreativeDiscoverySurface_Frontend: {
            meta: {
              revision: 32,
              headRevision: 32,
              revisedAt: "2023-04-25T19:30:52.489Z",
              promotion: 26,
              promotedAt: "2023-04-25T19:31:12.618Z",
            },
            assetData: {
              AnalyticsId: "v538",
              TestCohorts: [
                {
                  AnalyticsId: "c-1v2_v2_c727",
                  CohortSelector: "PlayerDeterministic",
                  PlatformBlacklist: [],
                  CountryCodeBlocklist: [],
                  ContentPanels: [
                    {
                      NumPages: 1,
                      AnalyticsId: "p1114",
                      PanelType: "AnalyticsList",
                      AnalyticsListName: "ByEpicNoBigBattle",
                      CuratedListOfLinkCodes: [],
                      ModelName: "",
                      PageSize: 7,
                      PlatformBlacklist: [],
                      PanelName: "ByEpicNoBigBattle6Col",
                      MetricInterval: "",
                      CountryCodeBlocklist: [],
                      SkippedEntriesCount: 0,
                      SkippedEntriesPercent: 0,
                      SplicedEntries: [],
                      PlatformWhitelist: [],
                      MMRegionBlocklist: [],
                      EntrySkippingMethod: "None",
                      PanelDisplayName: {
                        Category: "Game",
                        NativeCulture: "",
                        Namespace: "CreativeDiscoverySurface_Frontend",
                        LocalizedStrings: [],
                        bIsMinimalPatch: false,
                        NativeString: "LTMS",
                        Key: "ByEpicNoBigBattle6Col",
                      },
                      PlayHistoryType: "RecentlyPlayed",
                      bLowestToHighest: false,
                      PanelLinkCodeBlacklist: [],
                      CountryCodeAllowlist: [],
                      PanelLinkCodeWhitelist: [],
                      FeatureTags: [],
                      MMRegionAllowlist: [],
                      MetricName: "",
                    },
                    {
                      NumPages: 2,
                      AnalyticsId: "p969|88dba0c4e2af76447df43d1e31331a3d",
                      PanelType: "AnalyticsList",
                      AnalyticsListName: "EventPanel",
                      CuratedListOfLinkCodes: [],
                      ModelName: "",
                      PageSize: 25,
                      PlatformBlacklist: [],
                      PanelName: "EventPanel",
                      MetricInterval: "",
                      CountryCodeBlocklist: [],
                      SkippedEntriesCount: 0,
                      SkippedEntriesPercent: 0,
                      SplicedEntries: [],
                      PlatformWhitelist: [],
                      MMRegionBlocklist: [],
                      EntrySkippingMethod: "None",
                      PanelDisplayName: {
                        Category: "Game",
                        NativeCulture: "",
                        Namespace: "CreativeDiscoverySurface_Frontend",
                        LocalizedStrings: [],
                        bIsMinimalPatch: false,
                        NativeString: "Event LTMS",
                        Key: "EventPanel",
                      },
                      PlayHistoryType: "RecentlyPlayed",
                      bLowestToHighest: false,
                      PanelLinkCodeBlacklist: [],
                      CountryCodeAllowlist: [],
                      PanelLinkCodeWhitelist: [],
                      FeatureTags: ["col:6"],
                      MMRegionAllowlist: [],
                      MetricName: "",
                    },
                  ],
                  PlatformWhitelist: [],
                  SelectionChance: 0.1,
                  TestName: "testing",
                },
              ],
              GlobalLinkCodeBlacklist: [],
              SurfaceName: "CreativeDiscoverySurface_Frontend",
              TestName: "20.10_4/11/2022_hero_combat_popularConsole",
              primaryAssetId:
                "FortCreativeDiscoverySurface:CreativeDiscoverySurface_Frontend",
              GlobalLinkCodeWhitelist: [],
            },
          },
        },
      },
    };

    return c.json(assets);
  });

  app.post("/api/v1/discovery/surface/*", async (c) => {
    const Normal = require(`../../static/discovery/menu.json`);

    return c.json(Normal);
  });

  app.post("/links/api/fn/mnemonic", async (c) => {
    const ver = getVersion(c);
    const Normal = require(`../../static/discovery/menu.json`);
    const Latest = require("../../static/discovery/latest/menu.json");

    const DefaultLinks = Normal.Panels[0].Pages[0].results.map(
      (result: any) => result.linkData
    );

    if (ver.build >= 23.5) {
      return c.json(Latest);
    } else {
      return c.json(DefaultLinks);
    }
  });

  app.get("/links/api/fn/mnemonic/:playlistId/related", async (c) => {
    const playlistId = c.req.param("playlistId")
    if (playlistId == "playlist_juno") {
      return c.json({
        parentLinks: [],
        links: {
          playlist_juno: {
            namespace: "fn",
            accountId: "epic",
            creatorName: "Epic",
            mnemonic: "playlist_juno",
            linkType: "BR:Playlist",
            metadata: {
              extra_video_vuids: ["d73175b8-6c64-4f6b-ac51-f246f8945a8b"],
              lobby_background_image_urls: {
                url: "https://cdn2.unrealengine.com/legofn-launch-lobby-v2-2560x1440-e75ec82dc332.jpg",
              },
              blog_category: "lego-fortnite",
              frontend_plugin: "JunoFrontendUI",
              image_url:
                "https://cdn2.unrealengine.com/legofn-disco-1920-1920x1080-c5f52d11a179.jpg",
              requiresArbitratedWorldId: true,
              image_urls: {
                url_s:
                  "https://cdn2.unrealengine.com/legofn-disco-480-480x270-c55546b444b3.jpg",
                url_xs:
                  "https://cdn2.unrealengine.com/legofn-disco-270-270x152-78c11b5032db.jpg",
                url_m:
                  "https://cdn2.unrealengine.com/legofn-disco-640-640x360-75aa197e5b17.jpg",
                url: "https://cdn2.unrealengine.com/legofn-disco-1920-1920x1080-c5f52d11a179.jpg",
              },
              matchmaking: {
                override_playlist: "playlist_juno",
              },
              title: "LEGO Fortnite",
              video_vuid: "lPAAqsIrORbZBsKCiX",
              alt_title: {
                ar: "LEGO Fortnite",
                de: "LEGO Fortnite",
                ru: "LEGO Fortnite",
                ko: "레고 포트나이트",
                "pt-BR": "LEGO Fortnite",
                ja: "レゴ フォートナイト",
                it: "LEGO Fortnite",
                fr: "LEGO Fortnite",
                pl: "LEGO Fortnite",
                es: "LEGO Fortnite",
                "es-419": "LEGO Fortnite",
                tr: "LEGO FORTNITE",
              },
              alt_tagline: {
                ar: "استكشف عوالم مفتوحة شاسعة حيث يتلاقى سحر بناء LEGO® وFortnite. اعثر على أفضل مغامرة LEGO للنجاة في Fortnite!",
                de: "Erkunde riesige offene Welten, in denen die Magie des Bauens von LEGO® und Fortnite aufeinandertreffen. In Fortnite findest du das ultimative LEGO-Abenteuer, in dem sich alles ums Überleben und Crafting dreht!",
                ru: "Исследуйте огромные открытые миры, где соединяются чудеса строительства LEGO® и приключения Fortnite. Отправьтесь в незабываемое путешествие с LEGO® в Fortnite и сделайте всё, чтобы выжить!",
                ko: "레고® 조립의 마법과 포트나이트가 만나는 광대한 오픈 월드를 탐험해 보세요. 포트나이트에서 궁극의 서바이벌 크래프팅 레고 어드벤처를 만나 보세요!",
                "pt-BR":
                  "Explore vastos mundos abertos onde a magia da construção LEGO® encontra o Fortnite. Descubra a mais completa aventura LEGO® de criação e sobrevivência no Fortnite!",
                ja: " レゴ®の建築の魔法とフォートナイトが出会う、広大なオープンワールドを探索しよう。究極のサバイバル・クラフト、レゴ®アドベンチャーをフォートナイトで！",
                it: "Esplora vasti mondi aperti dove Fortnite incontra la magia delle costruzioni LEGO®. L'avventura LEGO definitiva ti aspetta in Fortnite!",
                fr: "Explorez de vastes mondes ouverts où les univers de Fortnite et LEGO® s'entremêlent pour un résultat haut en couleur ! Vivez une formidable expérience de survie et de construction LEGO dans Fortnite !",
                pl: "Eksploruj rozległe, otwarte światy, w których magia budowania LEGO® łączy się z Fortnite. Odkryj w Fortnite niesamowitą przygodę LEGO z elementami przetrwania i wytwarzania!",
                es: "Explora gigantescos mundos abiertos en los que la magia de la construcción de LEGO® se mezcla con Fortnite. ¡Descubre la aventura de supervivencia y construcción definitiva de LEGO en Fortnite!",
                "es-419":
                  "Explora vastos mundos abiertos donde la magia de la construcción de LEGO® y Fortnite se fusionan. ¡Descubre la aventura de supervivencia y fabricación definitiva de LEGO® en Fortnite!",
                tr: "Büyülü LEGO® yapılarının Fortnite ile buluştuğu muazzam açık dünyaları keşfet. Hayatta kalma ve üretim temalı muhteşem bir LEGO macerası şimdi Fortnite'ta!",
              },
              feature_flags: ["has_custom_ui"],
              product_tag: "Product.Juno",
              tagline:
                "Explore vast, open worlds where the magic of LEGO® building and Fortnite collide. Find the ultimate survival crafting LEGO adventure in Fortnite!",
            },
            version: 1,
            active: true,
            disabled: false,
            created: "2022-08-11T20:17:42.128Z",
            published: "2022-08-11T20:17:42.128Z",
            descriptionTags: ["survival", "co-op", "open world", "sandbox"],
            moderationStatus: "Approved",
            lastActivatedDate: "2022-08-11T20:17:42.132Z",
            discoveryIntent: "PUBLIC",
          },
        },
      });
    } else {
      return c.json({
        parentLinks: [],
        links: {
          [playlistId]: {
            namespace: "fn",
            accountId: "epic",
            creatorName: "Epic",
            mnemonic: playlistId,
            linkType: "BR:Playlist",
            metadata: {
              image_url: "",
              image_urls: {
                url_s: "",
                url_xs: "",
                url_m: "",
                url: "",
              },
              matchmaking: {
                override_playlist: playlistId,
              },
            },
            version: 95,
            active: true,
            disabled: false,
            created: "2021-10-01T00:56:45.010Z",
            published: "2021-08-03T15:27:20.251Z",
            descriptionTags: [],
            moderationStatus: "Approved",
          },
        },
      });
    }
  });
}
