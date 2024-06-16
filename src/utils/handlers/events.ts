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

  if (ver.build == 4.5) {
    events.push(createEvent("EventFlag.BR_S4_Geode_Countdown"));
  }

  if (ver.build == 7.2) {
    events.push(createEvent("EventFlag.LTM_14DaysOfFortnite"));
    events.push(createEvent("P1"));
  }

  if (ver.build == 7.3) {
    events.push(createEvent("F0"));
    events.push(createEvent("FEST_POSTER"));
  }

  if (ver.build == 8.51) {
    events.push(createEvent("EventFlag.UnvaultingCountdown"));
    events.push(createEvent("GWS1"));
  }

  if (ver.build == 9.4) {
    events.push(createEvent("CDTime"));
  }

  if (ver.season === 10) {
    events.push(createEvent("EventFlag.S10_Mystery"));
  }

  if (ver.build == 10.4) {
    events.push(createEvent("NN1"));
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

    if (ver.build === 11.31 || ver.build === 11.4) {
      events = events.concat([
        createEvent("EventFlag.Winterfest.Tree"),
        createEvent("EventFlag.LTE_WinterFest"),
        createEvent("EventFlag.LTE_WinterFest2019"),
      ]);
    }

    if (ver.build == 12.41) {
      events.push(createEvent("JCD01"));
    }

    if (ver.build == 12.61) {
      events.push(createEvent("FLA01"));
    }

    if (ver.build == 13.4) {
      events.push(createEvent("SM1"));
    }

    if (ver.build == 14.6) {
      events.push(createEvent("FLA01"));
    }

    if (ver.build == 17.3) {
      events.push(createEvent("BEL01"));
    }

    if (ver.build == 17.5) {
      events.push(createEvent("KEL01"));
    }

    if (ver.build == 18.4) {
      // Chapter 2 Finale Event
      events.push(createEvent("GGL01"));
    }

    if (ver.build == 20.4) {
      // Collision Event
      events.push(createEvent("AL01"));
    }

    if (ver.build == 21.4) {
      // Dragon Ball
      events.push(createEvent("Event_S21_Stamina"));
    }

    if (ver.build == 22.4) {
      // Fracture Event
      events.push(createEvent("RL01"));
    }

    if (ver.build == 23.1) {
      // Winterfest 2022
      events.push(createEvent("CalendarEvent_Season23_Winterfest"));
    }

    if (ver.build == 23.5) {
      // Most Wanted tab
      events.push(createEvent("EventFlag.Event_Vaultbreakers"));
    }

    if (ver.build == 24.4) {
      // Star Wars 2023 tab
      events.push(createEvent("EventFlag.Event_PlotTwist"));
    }

    if (ver.build == 25.3) {
      // Jujutsu Kaisen tab
      events.push(createEvent("EventFlag.Event_BelongTreaty"));
    }

    if (ver.build == 27.11) {
      // Durian Event
      events.push(createEvent("DL01"));
      events.push(createEvent("RufusWeek2"))
      events.push(createEvent("RufusWeek3"))
      events.push(createEvent("RufusWeek4"))
    }

    if (ver.build == 28.1) {
      // TMNT Tab countdown
      events.push(createEvent("EventFlag.Event_LinedNotebook_Teaser"));
    }

    if (ver.build == 28.2) {
      // TMNT mini pass
      events.push(createEvent("EventFlag.Event_LinedNotebook"));
    }

    if (ver.build == 28.3) {
      //Pre-Emergence Event
      events.push(createEvent("CH5S1CPPE"));
    } 

    if (ver.build == 29.0) {
      events.push(createEvent("EventFlag.Event_S29_SeasonalActivation"));
    }

    if (ver.build == 29.2) {
      events.push(createEvent("EventFlag.Event_S29_ColdDay"));
    }

    if (ver.build == 29.4) {
      events.push(createEvent("EventFlag.Event_Osiris"));
    }
  }

  return events;
}

export default {
  getEvents,
  createEvent,
};
