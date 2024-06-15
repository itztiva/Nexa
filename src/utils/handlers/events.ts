function createEvent(eventType: any) {
  return {
    eventType,
    activeUntil: "9999-01-01T00:00:00.000Z",
    activeSince: "2020-01-01T00:00:00.000Z",
  };
}

function getEvents(ver: any) {
    let events = [
        createEvent(`EventFlag.Season${ver.season}`),
        createEvent(`EventFlag.${ver.lobby}`),
    ];

    if (ver.season === 10) {
        events.push(createEvent("EventFlag.S10_Mystery"));
    }

    if (ver.season === 11) {
        events = events.concat([
            createEvent("EventFlag.LTE_CoinCollectXP"),
            createEvent("EventFlag.LTE_Fortnitemares2019"),
            createEvent("EventFlag.LTE_Galileo_Feats"),
            createEvent("EventFlag.LTE_Galileo"),
            createEvent("EventFlag.LTE_WinterFest2019"),
        ]);

        if (ver.build >= 11.2) {
            events.push(createEvent("EventFlag.Starlight"));
        }

        if (ver.build < 11.3) {
            events = events.concat([
                createEvent("EventFlag.Season11.Fortnitemares.Quests.Phase1"),
                createEvent("EventFlag.Season11.Fortnitemares.Quests.Phase2"),
                createEvent("EventFlag.Season11.Fortnitemares.Quests.Phase3"),
                createEvent("EventFlag.Season11.Fortnitemares.Quests.Phase4"),
                createEvent("EventFlag.StormKing.Landmark"),
            ]);
        } else {
            events = events.concat([
                createEvent("EventFlag.HolidayDeco"),
                createEvent("EventFlag.Season11.WinterFest.Quests.Phase1"),
                createEvent("EventFlag.Season11.WinterFest.Quests.Phase2"),
                createEvent("EventFlag.Season11.WinterFest.Quests.Phase3"),
                createEvent("EventFlag.Season11.Frostnite"),
            ]);
        }
    }

    if (ver.build === 11.31 || ver.build === 11.4) {
        events = events.concat([
            createEvent("EventFlag.Winterfest.Tree"),
            createEvent("EventFlag.LTE_WinterFest"),
            createEvent("EventFlag.LTE_WinterFest2019"),
        ]);
    }

    return events;
}

export default {
    getEvents,
    createEvent
}