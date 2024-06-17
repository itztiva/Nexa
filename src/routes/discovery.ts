import app from "..";
import getVersion from "../utils/handlers/getVersion";
import { Nexa } from "../utils/handlers/errors";
import discoveryResponses from "../../static/discovery/events";
import path from "node:path";
import fs from "node:fs";
import crypto from "crypto";

export default function () {
  app.get("/fortnite/api/discovery/accessToken/*", async (c) => {
    const useragent: any = c.req.header("user-agent");
    if (!useragent) return c.json(Nexa.internal.invalidUserAgent);
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
              primaryAssetId: "FortCreativeDiscoverySurface:CreativeDiscoverySurface_Frontend",
              GlobalLinkCodeWhitelist: [],
            },
          },
        },
      },
    };

    return c.json(assets);
  });

  app.post("/fortnite/api/game/v2/creative/discovery/surface/*", async (c) => {
    const Normal = require(`../../static/discovery/menu.json`);

    return c.json(Normal);
  });

  app.post("/api/v1/discovery/surface/*", async (c) => {
    const Normal = require(`../../static/discovery/menu.json`);

    return c.json(Normal);
  });

  app.post("/links/api/fn/mnemonic", async (c) => {
    const ver = getVersion(c);
    const Normal = require(`../../static/discovery/menu.json`);
    const Latest = require("../../static/discovery/latest/menu.json");

    const DefaultLinks = Normal.Panels[0].Pages[0].results.map((result: any) => result.linkData);

    if (ver.build >= 23.5) {
      return c.json(Latest);
    } else {
      return c.json(DefaultLinks);
    }
  });

  app.get("/links/api/fn/mnemonic/:playlistId/related", async (c) => {
    const playlistId = c.req.param("playlistId");
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
  });
}
