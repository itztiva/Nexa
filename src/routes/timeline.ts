import app from "..";
import eventsManager from '../utils/handlers/events'
import getVersion from "../utils/handlers/getVersion";

export default function () {
  app.get("/fortnite/api/calendar/v1/timeline", async (c) => {
    const ver = getVersion(c);
    const Events = eventsManager.getEvents(ver);

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
              activeEvents: Events,
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