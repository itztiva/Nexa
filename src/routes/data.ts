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

    if (version.season === 10) {
        content.dynamicbackgrounds.backgrounds.backgrounds[0].stage = 'seasonx';
    } else if (version.season === 11) {
        if (version.build === 11.31 || version.build === 11.40) {
            content.dynamicbackgrounds.backgrounds.backgrounds[0].stage = 'Winter19';
        } else {
            content.dynamicbackgrounds.backgrounds.backgrounds[0].stage = 'season11';
        }
    } else if (version.season === 12) {
        content.dynamicbackgrounds.backgrounds.backgrounds[0].stage = 'season12';
    } else if (version.season === 13) {
        content.dynamicbackgrounds.backgrounds.backgrounds[0].stage = 'season13';
    } else if (version.season === 14) {
        content.dynamicbackgrounds.backgrounds.backgrounds[0].stage = 'season14';
    } else if (version.season === 15) {
        content.dynamicbackgrounds.backgrounds.backgrounds[0].stage = 'season15';
        if (version.build === 15.10) {
            content.dynamicbackgrounds.backgrounds.backgrounds[0].stage = 'season15xmas';
            content.dynamicbackgrounds.backgrounds.backgrounds[1].stage = 'XmasStore2020';
        }
    } else if (version.season === 16) {
        content.dynamicbackgrounds.backgrounds.backgrounds[0].stage = 'season16';
    } else if (version.season === 17) {
        content.dynamicbackgrounds.backgrounds.backgrounds[0].stage = 'season17';
    } else if (version.season === 18) {
        content.dynamicbackgrounds.backgrounds.backgrounds[0].stage = 'season18';
    } else if (version.season === 19) {
        if (version.build === 19.01) {
            content.dynamicbackgrounds.backgrounds.backgrounds[0].stage = 'winter2021';
            content.dynamicbackgrounds.backgrounds.backgrounds[0].backgroundimage = 'https://cdn2.unrealengine.com/t-bp19-lobby-xmas-2048x1024-f85d2684b4af.png';
        } else {
            content.dynamicbackgrounds.backgrounds.backgrounds[0].stage = 'season19';
        }
    } else if (version.season === 20) {
        if (version.build === 20.40) {
            content.dynamicbackgrounds.backgrounds.backgrounds[0].stage = 'season20';
            content.dynamicbackgrounds.backgrounds.backgrounds[0].backgroundimage = 'https://cdn2.unrealengine.com/t-bp20-40-armadillo-glowup-lobby-2048x2048-2048x2048-3b83b887cc7f.jpg';
        } else {
            content.dynamicbackgrounds.backgrounds.backgrounds[0].stage = 'season20';
            content.dynamicbackgrounds.backgrounds.backgrounds[0].backgroundimage = 'https://cdn2.unrealengine.com/s20-landscapev4-2048x1024-2494a103ae6c.png';
        }
    } else if (version.season === 21) {
        if (version.build === 21.30) {
            content.dynamicbackgrounds.backgrounds.backgrounds[0].stage = 'season2130';
            content.dynamicbackgrounds.backgrounds.backgrounds[0].backgroundimage = 'https://cdn2.unrealengine.com/nss-lobbybackground-2048x1024-f74a14565061.jpg';
        } else {
            content.dynamicbackgrounds.backgrounds.backgrounds[0].stage = 'season2100';
            content.dynamicbackgrounds.backgrounds.backgrounds[0].backgroundimage = 'https://cdn2.unrealengine.com/s21-lobby-background-2048x1024-2e7112b25dc3.jpg';
        }
    } else if (version.season === 22) {
        content.dynamicbackgrounds.backgrounds.backgrounds[0].backgroundimage = 'https://cdn2.unrealengine.com/t-bp22-lobby-square-2048x2048-2048x2048-e4e90c6e8018.jpg';
    } else if (version.season === 23) {
        if (version.build === 23.10) {
            content.dynamicbackgrounds.backgrounds.backgrounds[0].backgroundimage = 'https://cdn2.unrealengine.com/t-bp23-winterfest-lobby-square-2048x2048-2048x2048-277a476e5ca6.png';
        } else {
            content.dynamicbackgrounds.backgrounds.backgrounds[0].backgroundimage = 'https://cdn2.unrealengine.com/t-bp23-lobby-2048x1024-2048x1024-26f2c1b27f63.png';
        }
    } else if (version.season === 24) {
        content.dynamicbackgrounds.backgrounds.backgrounds[0].stage = 'defaultnotris';
        content.dynamicbackgrounds.backgrounds.backgrounds[0].backgroundimage = 'https://static.wikia.nocookie.net/fortnite/images/e/e7/Chapter_4_Season_2_-_Lobby_Background_-_Fortnite.png';
    } else if (version.season === 25) {
        content.dynamicbackgrounds.backgrounds.backgrounds[0].stage = 'defaultnotris';
        content.dynamicbackgrounds.backgrounds.backgrounds[0].backgroundimage = 'https://static.wikia.nocookie.net/fortnite/images/c/ca/Chapter_4_Season_3_-_Lobby_Background_-_Fortnite.png';
    } else if (version.season === 26) {
        if (version.build === 26.30) {
            content.dynamicbackgrounds.backgrounds.backgrounds[0].stage = 'season2630';
            content.dynamicbackgrounds.backgrounds.backgrounds[0].backgroundimage = 'https://cdn2.unrealengine.com/s26-lobby-timemachine-final-2560x1440-a3ce0018e3fa.jpg';
        } else {
            content.dynamicbackgrounds.backgrounds.backgrounds[0].stage = 'season2600';
            content.dynamicbackgrounds.backgrounds.backgrounds[0].backgroundimage = 'https://cdn2.unrealengine.com/0814-ch4s4-lobby-2048x1024-2048x1024-e3c2cf8d342d.png';
        }
    } else if (version.season === 27) {
        if (version.build === 27.11) {
            content.dynamicbackgrounds.backgrounds.backgrounds[0].stage = 'defaultnotris';
            content.dynamicbackgrounds.backgrounds.backgrounds[0].backgroundimage = 'https://cdn2.unrealengine.com/durianlobby2-4096x2048-242a51b6a8ee.jpg';
        } else {
            content.dynamicbackgrounds.backgrounds.backgrounds[0].stage = 'season2700';
        }
    } else if (version.season === 28) {
        if (version.build === 28.20) {
            content.dynamicbackgrounds.backgrounds.backgrounds[0].stage = 'defaultnotris';
            content.dynamicbackgrounds.backgrounds.backgrounds[0].backgroundimage = 'https://cdn2.unrealengine.com/s28-tmnt-lobby-4096x2048-e6c06a310c05.jpg';
        } else {
            content.dynamicbackgrounds.backgrounds.backgrounds[0].backgroundimage = 'https://cdn2.unrealengine.com/ch5s1-lobbybg-3640x2048-0974e0c3333c.jpg';
            content.dynamicbackgrounds.backgrounds.backgrounds[0].stage = 'defaultnotris';
        }
    } else if (version.season === 29) {
        if (version.build === 29.20) {
            content.dynamicbackgrounds.backgrounds.backgrounds[0].stage = 'defaultnotris';
            content.dynamicbackgrounds.backgrounds.backgrounds[0].backgroundimage = 'https://cdn2.unrealengine.com/iceberg-lobby-3840x2160-217bb6ea8af9.jpg';
        } else if (version.build === 29.40) {
            content.dynamicbackgrounds.backgrounds.backgrounds[0].stage = 'defaultnotris';
            content.dynamicbackgrounds.backgrounds.backgrounds[0].backgroundimage = 'https://cdn2.unrealengine.com/mkart-2940-sw-fnbr-lobby-3840x2160-4f1f1486a54a.jpg';
        } else {
            content.dynamicbackgrounds.backgrounds.backgrounds[0].stage = 'defaultnotris';
            content.dynamicbackgrounds.backgrounds.backgrounds[0].backgroundimage = 'https://cdn2.unrealengine.com/br-lobby-ch5s2-4096x2304-a0879ccdaafc.jpg';
        }
    } else {
        content.dynamicbackgrounds.backgrounds.backgrounds[0].backgroundimage = content.dynamicbackgrounds.backgrounds.backgrounds[0].backgroundimage;
        content.dynamicbackgrounds.backgrounds.backgrounds[0].stage = content.dynamicbackgrounds.backgrounds.backgrounds[0].stage;
    }

    return c.json(content);
  });

  app.get("/epic/id/v2/sdk/accounts", async (c) => {
    const accountId = c.req.query('accountId');
    return c.json([
      {
        accountId: accountId,
        displayName: accountId,
        preferredLanguage: "en",
        cabinedMode: false,
        empty: false,
      },
    ]);
  });

  app.get("/sdk/v1/*", async (c) => {
    return c.json({
      client: {
        "RateLimiter.InventoryClient": {
          MessageCount: 100,
          TimeIntervalInSeconds: 60.0,
        },
        BaseService: {
          HttpRetryLimit: 4,
          HttpRetryResponseCodes: [429, 503, 504],
        },
        "RateLimiter.AuthClient": {
          MessageCount: 300,
          TimeIntervalInSeconds: 60.0,
        },
        "RateLimiter.PresenceClient.Operations": {
          MessageCount: 3,
          TimeIntervalInSeconds: 20.0,
          Operation: ["SendUpdate", "SetPresence"],
        },
        "RateLimiter.ReceiptValidatorClient": {
          MessageCount: 300,
          TimeIntervalInSeconds: 60.0,
        },
        "RateLimiter.LeaderboardsClient": {
          MessageCount: 300,
          TimeIntervalInSeconds: 60.0,
        },
        "RateLimiter.MetricsClient": {
          MessageCount: 300,
          TimeIntervalInSeconds: 60.0,
        },
        "RateLimiter.StatsClient": {
          MessageCount: 300,
          TimeIntervalInSeconds: 60.0,
        },
        "RateLimiter.SDKConfigClient.Operations": {
          MessageCount: 300,
          TimeIntervalInSeconds: 60.0,
          Operation: ["RequestUpdate"],
        },
        "RateLimiter.TitleStorageClient": {
          MessageCount: 300,
          TimeIntervalInSeconds: 60.0,
        },
        "RateLimiter.EcomClient": {
          MessageCount: 300,
          TimeIntervalInSeconds: 60.0,
        },
        "RateLimiter.DataStorageClient.Operations": {
          MessageCount: 300,
          TimeIntervalInSeconds: 60.0,
          Operation: [
            "GetAccessLinks",
            "QueryFile",
            "QueryFileList",
            "CopyFile",
            "DeleteFile",
            "ReadFile",
            "WriteFile",
            "DownloadFileRedirected",
            "UploadFileRedirected",
          ],
        },
        LeaderboardsClient: {
          MaxUserScoresQueryUserIds: 100,
          MaxUserScoresQueryStats: 25,
        },
        "RateLimiter.CustomInvitesClient.Operations": {
          MessageCount: 50,
          TimeIntervalInSeconds: 60.0,
          Operation: ["SendCustomInvite"],
        },
        HTTP: {
          HttpReceiveTimeout: 30,
          bEnableHttp: true,
          HttpTimeout: 30,
          HttpConnectionTimeout: 60,
          HttpSendTimeout: 30,
          MaxFlushTimeSeconds: 2.0,
        },
        "RateLimiter.FriendClient.Operations": {
          MessageCount: 300,
          TimeIntervalInSeconds: 60.0,
          Operation: ["QueryFriends", "SendFriendInvite", "DeleteFriend"],
        },
        "RateLimiter.RTCAdminClient": {
          MessageCount: 50,
          TimeIntervalInSeconds: 60.0,
        },
        "RateLimiter.UserInfoClient": {
          MessageCount: 300,
          TimeIntervalInSeconds: 60.0,
        },
        "/Script/Engine.NetworkSettings": {
          "n.VerifyPeer": false,
        },
        "WebSockets.LibWebSockets": {
          ThreadStackSize: 131072,
          ThreadTargetFrameTimeInSeconds: 0.0333,
          ThreadMinimumSleepTimeInSeconds: 0.0,
        },
        StatsClient: {
          MaxQueryStatsStatNamesStrLength: 1900,
        },
        "RateLimiter.MetricsClient.Operations": {
          MessageCount: 300,
          TimeIntervalInSeconds: 60.0,
          Operation: ["RegisterPlayerBackendSession"],
        },
        "RateLimiter.DataStorageClient": {
          MessageCount: 300,
          TimeIntervalInSeconds: 60.0,
        },
        SanitizerClient: {
          ReplaceChar: "*",
          RequestLimit: 10,
        },
        "RateLimiter.ModsClient.Operations": {
          MessageCount: 300,
          TimeIntervalInSeconds: 60.0,
          Operation: ["InstallMod", "UninstallMod", "UpdateMod", "EnumerateMods"],
        },
        "RateLimiter.ReportsClient.Operations": {
          MessageCount: 100,
          TimeIntervalInSeconds: 60.0,
          Operation: ["SendPlayerBehaviorReport"],
        },
        "RateLimiter.RTCAdminClient.Operations": {
          MessageCount: 50,
          TimeIntervalInSeconds: 60.0,
          Operation: ["QueryJoinRoomToken", "Kick", "SetParticipantHardMute"],
        },
        "RateLimiter.FriendClient": {
          MessageCount: 300,
          TimeIntervalInSeconds: 60.0,
        },
        "RateLimiter.AchievementsClient": {
          MessageCount: 100,
          TimeIntervalInSeconds: 60.0,
        },
        LogFiles: {
          PurgeLogsDays: 5,
          MaxLogFilesOnDisk: 5,
          LogTimes: "SinceStart",
        },
        RateLimiter: {
          MessageCount: 300,
          TimeIntervalInSeconds: 60.0,
        },
        "RateLimiter.AntiCheatClient": {
          MessageCount: 120,
          TimeIntervalInSeconds: 60.0,
        },
        "RateLimiter.ProgressionSnapshot": {
          MessageCount: 300,
          TimeIntervalInSeconds: 60.0,
        },
        SessionsClient: {
          HeartbeatIntervalSecs: 30,
        },
        "RateLimiter.UserInfoClient.Operations": {
          MessageCount: 300,
          TimeIntervalInSeconds: 60.0,
          Operation: [
            "QueryLocalUserInfo",
            "QueryUserInfo",
            "QueryUserInfoByDisplayName",
            "QueryUserInfoByExternalAccount",
          ],
        },
        LobbyClient: {
          InitialResendDelayMs: 100,
          MaxConnectionRetries: 3,
          LobbySocketURL:
            "wss://api.epicgames.dev/lobby/v1/`deploymentId/lobbies/connect",
          NumConsecutiveFailuresAllowed: 5,
          MaxResendDelayMs: 2000,
          WebSocketConnectTaskMaxNetworkWaitSeconds: 15.0,
          RecoveryWaitTimeSecs: 2,
          InitialRetryDelaySeconds: 5,
          MaxSendRetries: 3,
          SentMessageTimeout: 5,
          HeartbeatIntervalSecs: 30,
          MaxRetryIntervalSeconds: 15,
        },
        "RateLimiter.SanctionsClient.Operations": {
          MessageCount: 300,
          TimeIntervalInSeconds: 60.0,
          Operation: ["QueryActivePlayerSanctions"],
        },
        "UIClient.SocialURLQueryParamNames": {
          OSName: "os_name",
          ProductId: "product_id",
          SDKCLNumber: "sdk_cl_number",
          DeploymentId: "deployment_id",
          IntegratedPlatformName: "integrated_platform_name",
          SDKVersion: "sdk_version",
          OSVersion: "os_version",
          UserId: "user_id",
          ExchangeCode: "exchange_code",
        },
        "RateLimiter.LobbyClient.ThrottledOperations": {
          MessageCount: 30,
          TimeIntervalInSeconds: 60.0,
          Operation: [
            "CreateLobby",
            "DestroyLobby",
            "JoinLobby",
            "LeaveLobby",
            "HeartbeatLobby",
            "UpdateLobby",
            "PromoteMember",
            "KickLobbyMember",
            "SendLobbyInvite",
            "RejectLobbyInvite",
            "QueryInvites",
            "FindLobby",
            "RefreshRTCToken",
            "HardMuteMember",
          ],
        },
        "RateLimiter.SessionsClient": {
          MessageCount: 300,
          TimeIntervalInSeconds: 60.0,
        },
        "RateLimiter.KWSClient": {
          MessageCount: 20,
          TimeIntervalInSeconds: 60.0,
        },
        "RateLimiter.PresenceClient": {
          MessageCount: 60,
          TimeIntervalInSeconds: 60.0,
        },
        "RateLimiter.KWSClient.Operations": {
          MessageCount: 20,
          TimeIntervalInSeconds: 60.0,
          Operation: [
            "CreateUser",
            "UpdateParentEmail",
            "QueryAgeGate",
            "QueryPermissions",
            "RequestPermissions",
          ],
        },
        "RateLimiter.InventoryClient.Operations": {
          MessageCount: 100,
          TimeIntervalInSeconds: 60.0,
          Operation: ["Open", "Close"],
        },
        "RateLimiter.LeaderboardsClient.Operations": {
          MessageCount: 300,
          TimeIntervalInSeconds: 60.0,
          Operation: [
            "QueryLeaderboardDefinitions",
            "QueryLeaderboardRanks",
            "QueryLeaderboardUserScores",
          ],
        },
        "RateLimiter.SanctionsClient": {
          MessageCount: 300,
          TimeIntervalInSeconds: 60.0,
        },
        "Messaging.EpicConnect": {
          FailedConnectionDelayMultiplier: 2.5,
          ServerHeartbeatIntervalMilliseconds: 0,
          FailedConnectionDelayMaxSeconds: 180,
          ClientHeartbeatIntervalMilliseconds: 30000,
          FailedConnectionDelayIntervalSeconds: 5,
          Url: "wss://connect.epicgames.dev",
        },
        MetricsClient: {
          HttpRetryLimit: 2,
        },
        "RateLimiter.TitleStorageClient.Operations": {
          MessageCount: 300,
          TimeIntervalInSeconds: 60.0,
          Operation: ["QueryFile", "QueryFileList", "ReadFile"],
        },
        "RateLimiter.AchievementsClient.Operations": {
          MessageCount: 100,
          TimeIntervalInSeconds: 60.0,
          Operation: [
            "QueryDefinitions",
            "QueryPlayerAchievements",
            "UnlockAchievements",
          ],
        },
        "Messaging.Stomp": {
          ClientHeartbeatIntervalMs: 30000,
          RequestedServerHeartbeatIntervalMs: 30000,
          Url: "wss://api.epicgames.dev/notifications/v1/`deploymentid`/connect",
          BlocklistMessageTypeFilters: ["lobbyinvite"],
        },
        TitleStorageClient: {
          AccessLinkDurationSeconds: 300,
          UnusedCachedFileDaysToLive: 7,
          ClearInvalidFileCacheFrequencyDays: 2,
          MaxSimultaneousReads: 10,
        },
        ConnectClient: {
          MaxProductUserIdMappingsQueryUserIds: 128,
          MinProductUserIdMappingsUpdateTimeInSeconds: 900.0,
        },
        "RateLimiter.LobbyClient.Operations": {
          MessageCount: 100,
          TimeIntervalInSeconds: 60.0,
          Operation: ["GetByLobbyId", "UpdateLobby"],
        },
        "RateLimiter.AntiCheatClient.Operations": {
          MessageCount: 120,
          TimeIntervalInSeconds: 60.0,
          Operation: ["QueryServiceStatus", "SendClientMessage"],
        },
        EcomClient: {
          PurchaseUrl:
            "https://launcher-website-prod07.ol.epicgames.com/purchase",
          PurchaseCookieName: "EPIC_BEARER_TOKEN",
          PurchaseEpicIdUrl: "https://www.epicgames.com/ecom/payment/v1/purchase",
        },
        "RateLimiter.SessionsClient.Operations": {
          MessageCount: 300,
          TimeIntervalInSeconds: 60.0,
          Operation: [
            "UpdateSession",
            "JoinSession",
            "StartSession",
            "EndSession",
            "RegisterPlayers",
            "SendInvite",
            "RejectInvite",
            "QueryInvites",
            "FindSession",
            "DestroySession",
          ],
        },
        "RateLimiter.StatsClient.Operations": {
          MessageCount: 300,
          TimeIntervalInSeconds: 60.0,
          Operation: ["IngestStat", "QueryStats"],
        },
        "RateLimiter.ReceiptValidatorClient.Operations": {
          MessageCount: 300,
          TimeIntervalInSeconds: 60.0,
          Operation: ["VerifyPurchase"],
        },
        DataStorageClient: {
          AccessLinkDurationSeconds: 300,
          MaxSimultaneousReads: 10,
          MaxSimultaneousWrites: 10,
        },
        "RateLimiter.AuthClient.Operations": {
          MessageCount: 300,
          TimeIntervalInSeconds: 60.0,
          Operation: [
            "VerifyAuth",
            "DeletePersistentAuth",
            "GenerateClientAuth",
            "LinkAccount",
            "QueryIdToken",
            "VerifyIdToken",
          ],
        },
        P2PClient: {
          IceServers: [
            "stun:stun.l.google.com:19302",
            "stun:turn.rtcp.on.epicgames.com:3478",
            "turn:turn.rtcp.on.epicgames.com:3478",
          ],
          P2PMinPort: 7777,
          P2PMaxPort: 7876,
        },
        "RateLimiter.LobbyClient": {
          MessageCount: 30,
          TimeIntervalInSeconds: 60.0,
        },
        SDKAnalytics: {
          BaseUrl: "https://api.epicgames.dev/telemetry/data/",
          DevPhase: 2,
          AppEnvironment: "Production",
          UploadType: "sdkevents",
        },
        "RateLimiter.ConnectClient": {
          MessageCount: 300,
          TimeIntervalInSeconds: 60.0,
        },
        "AntiCheat.GameplayData": {
          Url: "wss://api.epicgames.dev/cerberus-edge/v1/",
        },
        AuthClient: {
          AccountPortalURLLocaleSuffix: "lang=`code",
          PollInterval: 5,
          RefreshTokenThreshold: 100.0,
          VPCRegisterURL:
            "https://epicgames.com/id/register/quick/minor/await?code=`challenge_id&display=embedded",
          AuthorizeContinuationEndpoint:
            "https://epicgames.com/id/login?continuation=`continuation&prompt=skip_merge%20skip_upgrade",
          AuthorizeCodeEndpoint:
            "https://epicgames.com/id/authorize?client_id=`client_id&response_type=code&scope=`scope&redirect_uri=`redirect_uri&display=popup&prompt=login",
          AuthorizeContinuationEmbeddedEndpoint:
            "https://epicgames.com/id/embedded/login?continuation=`continuation&prompt=skip_merge%20skip_upgrade",
          VerifyTokenInterval: 60.0,
          PollExpiresIn: 300,
          IdTokenCacheMinExpirySeconds: 300,
          AuthorizeEndpoint:
            "https://epicgames.com/id/authorize?exchange_code=`exchange_code&scope=`scope&prompt=skip_merge%20skip_upgrade",
          AccountPortalScheme: "eos.`client_id://epic/auth",
          bOfflineAccountToken: true,
        },
        "RateLimiter.ProgressionSnapshot.Operations": {
          MessageCount: 300,
          TimeIntervalInSeconds: 60.0,
          Operation: ["SubmitSnapshot", "DeleteSnapshot"],
        },
        XMPP: {
          bEnabled: true,
          bEnableWebsockets: true,
          ThreadStackSize: 131072,
        },
        "RateLimiter.AntiCheatServer.Operations": {
          MessageCount: 100000,
          TimeIntervalInSeconds: 60.0,
          Operation: ["QueryServiceStatus", "SendClientMessage"],
        },
        "Core.Log": {
          LogEOS: "verbose",
          LogEOSMessaging: "verbose",
          LogEOSConnect: "verbose",
          LogEOSAuth: "verbose",
          LogHttpSerialization: "verbose",
          LogCore: "verbose",
          LogHttp: "warning",
          LogStomp: "verbose",
          LogXmpp: "verbose",
          LogEOSSessions: "verbose",
        },
        UIClient: {
          FriendsURL:
            "https://epic-social-game-overlay-prod.ol.epicgames.com/index.html",
          SocialSPAClientId: "cf27c69fe66441e8a8a4e8faf396ee4c",
          VPCURLLocaleSuffix: "&lang=`code",
          FriendsURLExchangeCodeSuffix: "?exchange_code=`exchange_code",
          VPCURL:
            "https://epicgames.com/id/overlay/quick/minor/verify?code=`challenge_id",
        },
        "RateLimiter.AntiCheatServer": {
          MessageCount: 100000,
          TimeIntervalInSeconds: 60.0,
        },
        "Messaging.XMPP": {
          ReconnectionDelayJitter: 1.5,
          PingTimeout: 30,
          ReconnectionDelayBase: 4.0,
          ServerPort: 443,
          bPrivateChatFriendsOnly: true,
          ReconnectionDelayMax: 300.0,
          Domain: "prod.ol.epicgames.com",
          ReconnectionDelayBackoffExponent: 2.0,
          ServerAddr: "wss://xmpp-service-prod.ol.epicgames.com",
          PingInterval: 60,
        },
        "RateLimiter.SDKConfigClient": {
          MessageCount: 300,
          TimeIntervalInSeconds: 60.0,
        },
        "RateLimiter.EcomClient.Operations": {
          MessageCount: 300,
          TimeIntervalInSeconds: 60.0,
          Operation: [
            "QueryOwnership",
            "QueryOwnershipToken",
            "QueryEntitlement",
            "QueryOffer",
            "RedeemEntitlements",
            "Checkout",
          ],
        },
        PresenceClient: {
          EpicConnectNotificationWaitTime: 99999995.0,
          PresenceQueryTimeoutSeconds: 1.0,
          bSetOfflineOnLogoutEnabled: false,
          PresenceAutoUpdateInSeconds: 999999600.0,
          bSetOfflineOnShutdownEnabled: false,
        },
        "RateLimiter.CustomInvitesClient": {
          MessageCount: 50,
          TimeIntervalInSeconds: 60.0,
        },
        "RateLimiter.ModsClient": {
          MessageCount: 300,
          TimeIntervalInSeconds: 60.0,
        },
        "RateLimiter.ConnectClient.Operations": {
          MessageCount: 300,
          TimeIntervalInSeconds: 60.0,
          Operation: [
            "LoginAccount",
            "CreateAccount",
            "LinkAccount",
            "UnlinkAccount",
            "CreateDeviceId",
            "DeleteDeviceId",
            "TransferDeviceIdAccount",
            "QueryExternalAccountMappings",
            "QueryProductUserIdMappings",
            "VerifyIdToken",
          ],
        },
        "RateLimiter.AuthClient.SensitiveOperations": {
          MessageCount: 12,
          TimeIntervalInSeconds: 60.0,
          Operation: ["GenerateUserAuth"],
        },
        "RateLimiter.ReportsClient": {
          MessageCount: 100,
          TimeIntervalInSeconds: 60.0,
        },
      },
      services: {
        RTCService: {
          BaseUrl: "https://api.epicgames.dev/rtc",
        },
        DataStorageService: {
          BaseUrl: "https://api.epicgames.dev/datastorage",
        },
        AccountsEpicIdService: {
          BaseUrl: "https://api.epicgames.dev",
        },
        MetricsService: {
          BaseUrl: "https://api.epicgames.dev/datarouter",
        },
        EcommerceService: {
          BaseUrl:
            "https://ecommerceintegration-public-service-ecomprod02.ol.epicgames.com/ecommerceintegration",
        },
        KWSService: {
          BaseUrl: "https://api.epicgames.dev/kws",
        },
        AntiCheatService: {
          BaseUrl: "https://api.epicgames.dev/anticheat",
        },
        LobbyService: {
          BaseUrl: "https://api.epicgames.dev/lobby",
        },
        StatsAchievementsService: {
          BaseUrl: "https://api.epicgames.dev/stats",
        },
        PriceEngineService: {
          BaseUrl:
            "https://priceengine-public-service-ecomprod01.ol.epicgames.com/priceengine",
        },
        AccountsService: {
          BaseUrl: "https://egp-idsoc-proxy-prod.ol.epicgames.com/account",
          RedirectUrl: "accounts.epicgames.com",
        },
        EcommerceEpicIdService: {
          BaseUrl: "https://api.epicgames.dev/epic/ecom",
        },
        PaymentEpicIdService: {
          BaseUrl: "https://api.epicgames.dev/epic/payment",
        },
        SanctionsService: {
          BaseUrl: "https://api.epicgames.dev/sanctions",
        },
        FriendService: {
          BaseUrl: "https://egp-idsoc-proxy-prod.ol.epicgames.com/friends",
        },
        ReceiptValidatorService: {
          BaseUrl: "https://api.epicgames.dev/receipt-validator",
        },
        FriendEpicIdService: {
          BaseUrl: "https://api.epicgames.dev/epic/friends",
        },
        CatalogService: {
          BaseUrl:
            "https://catalog-public-service-prod06.ol.epicgames.com/catalog",
        },
        EOSAuthService: {
          BaseUrl: "https://api.epicgames.dev",
        },
        SessionsService: {
          BaseUrl: "https://api.epicgames.dev/matchmaking",
        },
        ModsService: {
          BaseUrl: "https://api.epicgames.dev/mods",
        },
        ReportsService: {
          BaseUrl: "https://api.epicgames.dev/player-reports",
        },
        ProgressionSnapshotService: {
          BaseUrl: "https://api.epicgames.dev/snapshots",
        },
        CustomInvitesService: {
          BaseUrl: "https://api.epicgames.dev/notifications",
        },
        PresenceService: {
          BaseUrl: "https://api.epicgames.dev/epic/presence",
        },
        TitleStorageService: {
          BaseUrl: "https://api.epicgames.dev/titlestorage",
        },
        StatsIngestService: {
          BaseUrl: "https://api.epicgames.dev/ingestion/stats",
        },
        LeaderboardsService: {
          BaseUrl: "https://api.epicgames.dev/leaderboards",
        },
        InventoryService: {
          BaseUrl: "https://api.epicgames.dev/inventory",
        },
      },
      watermark: -934553538,
    });
  });
}