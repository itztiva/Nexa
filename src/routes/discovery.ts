import app from "..";
import getVersion from "../utils/handlers/getVersion";
import discoveryResponses from "../../static/discovery/events";
import path from "node:path";
import fs from "node:fs";

export default function () {
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

    return c.json(Normal)
  });

  app.post("/links/api/fn/mnemonic", async (c) => {
    const Normal = require(`../../static/discovery/menu.json`);

    const defaultResponse = Normal.Panels[0].Pages[0].results.map((result: any) => result.linkData);
    return c.json(defaultResponse);
  });
}
