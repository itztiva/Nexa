import app from "..";
import getVersion from "../utils/handlers/getVersion";

export default function () {
    app.get("/fortnite/api/calendar/v1/timeline", async (c) => {
        const ver = getVersion(c);
      
        let Events = [
          {
            eventType: `EventFlag.Season${ver.season}`,
            activeUntil: "9999-01-01T00:00:00.000Z",
            activeSince: "2020-01-01T00:00:00.000Z",
          },
          {
            eventType: `EventFlag.${ver.lobby}`,
            activeUntil: "9999-01-01T00:00:00.000Z",
            activeSince: "2020-01-01T00:00:00.000Z",
          },
        ];
      
        if (ver.season == 10) {
          Events.push({
            eventType: "EventFlag.S10_Mystery",
            activeUntil: "9999-01-01T00:00:00.000Z",
            activeSince: "2020-01-01T00:00:00.000Z",
          });
        }
      
        if (ver.season == 11) {
          Events.push(
            {
              eventType: "EventFlag.LTE_CoinCollectXP",
              activeUntil: "9999-01-01T00:00:00.000Z",
              activeSince: "2020-01-01T00:00:00.000Z",
            },
            {
              eventType: "EventFlag.LTE_Fortnitemares2019",
              activeUntil: "9999-01-01T00:00:00.000Z",
              activeSince: "2020-01-01T00:00:00.000Z",
            },
            {
              eventType: "EventFlag.LTE_Galileo_Feats",
              activeUntil: "9999-01-01T00:00:00.000Z",
              activeSince: "2020-01-01T00:00:00.000Z",
            },
            {
              eventType: "EventFlag.LTE_Galileo",
              activeUntil: "9999-01-01T00:00:00.000Z",
              activeSince: "2020-01-01T00:00:00.000Z",
            },
            {
              eventType: "EventFlag.LTE_WinterFest2019",
              activeUntil: "9999-01-01T00:00:00.000Z",
              activeSince: "2020-01-01T00:00:00.000Z",
            }
          );
      
          if (ver.build >= 11.2) {
            Events.push({
              eventType: "EventFlag.Starlight",
              activeUntil: "9999-01-01T00:00:00.000Z",
              activeSince: "2020-01-01T00:00:00.000Z",
            });
          }
      
          if (ver.build < 11.3) {
            Events.push(
              {
                eventType: "EventFlag.Season11.Fortnitemares.Quests.Phase1",
                activeUntil: "9999-01-01T00:00:00.000Z",
                activeSince: "2020-01-01T00:00:00.000Z",
              },
              {
                eventType: "EventFlag.Season11.Fortnitemares.Quests.Phase2",
                activeUntil: "9999-01-01T00:00:00.000Z",
                activeSince: "2020-01-01T00:00:00.000Z",
              },
              {
                eventType: "EventFlag.Season11.Fortnitemares.Quests.Phase3",
                activeUntil: "9999-01-01T00:00:00.000Z",
                activeSince: "2020-01-01T00:00:00.000Z",
              },
              {
                eventType: "EventFlag.Season11.Fortnitemares.Quests.Phase4",
                activeUntil: "9999-01-01T00:00:00.000Z",
                activeSince: "2020-01-01T00:00:00.000Z",
              },
              {
                eventType: "EventFlag.StormKing.Landmark",
                activeUntil: "9999-01-01T00:00:00.000Z",
                activeSince: "2020-01-01T00:00:00.000Z",
              }
            );
          } else {
            Events.push(
              {
                eventType: "EventFlag.HolidayDeco",
                activeUntil: "9999-01-01T00:00:00.000Z",
                activeSince: "2020-01-01T00:00:00.000Z",
              },
              {
                eventType: "EventFlag.Season11.WinterFest.Quests.Phase1",
                activeUntil: "9999-01-01T00:00:00.000Z",
                activeSince: "2020-01-01T00:00:00.000Z",
              },
              {
                eventType: "EventFlag.Season11.WinterFest.Quests.Phase2",
                activeUntil: "9999-01-01T00:00:00.000Z",
                activeSince: "2020-01-01T00:00:00.000Z",
              },
              {
                eventType: "EventFlag.Season11.WinterFest.Quests.Phase3",
                activeUntil: "9999-01-01T00:00:00.000Z",
                activeSince: "2020-01-01T00:00:00.000Z",
              },
              {
                eventType: "EventFlag.Season11.Frostnite",
                activeUntil: "9999-01-01T00:00:00.000Z",
                activeSince: "2020-01-01T00:00:00.000Z",
              }
            );
          }
        }
      
        if (ver.build == 11.31 || ver.build == 11.4) {
          Events.push(
            {
              eventType: "EventFlag.Winterfest.Tree",
              activeUntil: "9999-01-01T00:00:00.000Z",
              activeSince: "2020-01-01T00:00:00.000Z",
            },
            {
              eventType: "EventFlag.LTE_WinterFest",
              activeUntil: "9999-01-01T00:00:00.000Z",
              activeSince: "2020-01-01T00:00:00.000Z",
            },
            {
              eventType: "EventFlag.LTE_WinterFest2019",
              activeUntil: "9999-01-01T00:00:00.000Z",
              activeSince: "2020-01-01T00:00:00.000Z",
            }
          );
        }
      
        if (true) {
          const events: any = [];
      
          const EventsSet = new Set(Events.map((e) => e.eventType));
          for (let i = 0; i < events.length; i++) {
            const event = events[i];
            if (!EventsSet.has(event)) {
              Events.push({
                eventType: event,
                activeUntil: "9999-01-01T00:00:00.000Z",
                activeSince: "2020-01-01T00:00:00.000Z",
              });
            }
          }
        }
      
        const idk = new Date();
        const dUTC = new Date(
          Date.UTC(
            idk.getUTCFullYear(),
            idk.getUTCMonth(),
            idk.getUTCDate(),
            24,
            0,
            0,
            0
          )
        );
        const midnight = new Date(dUTC.getTime() - 60000);
        const isoDate = midnight.toISOString();
      
        return c.json({
          channels: {
            "client-matchmaking": {
              states: [],
              cacheExpire: "9999-01-01T00:00:00.000Z",
            },
            "client-events": {
              states: [
                {
                  validFrom: "0001-01-01T00:00:00.000Z",
                  Events: Events,
                  state: {
                    activeStorefronts: [],
                    eventNamedWeights: {},
                    seasonNumber: ver.season,
                    seasonTemplateId: `AthenaSeason:athenaseason${ver.season}`,
                    matchXpBonusPoints: 0,
                    seasonBegin: "2020-01-01T00:00:00Z",
                    seasonEnd: "9999-01-01T00:00:00Z",
                    seasonDisplayedEnd: "9999-01-01T00:00:00Z",
                    weeklyStoreEnd: isoDate,
                    stwEventStoreEnd: "9999-01-01T00:00:00.000Z",
                    stwWeeklyStoreEnd: "9999-01-01T00:00:00.000Z",
                    sectionStoreEnds: {
                      Featured: isoDate,
                    },
                    dailyStoreEnd: isoDate,
                  },
                },
              ],
              cacheExpire: isoDate,
            },
          },
          eventsTimeOffsetHrs: 0,
          cacheIntervalMins: 10,
          currentTime: new Date().toISOString(),
        });
      });
}