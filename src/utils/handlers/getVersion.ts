import app from "../..";

interface Version {
  season: number;
  build: number;
  CL: string;
  lobby: string;
}

export default function getVersion(c: any): Version {
  let ver: Version = { season: 0, build: 0.0, CL: "0", lobby: "" };

  if (c.req.header("user-agent")) {
    let CL = "";
    let userAgentParts = c.req.header("user-agent").split("-");
    CL = userAgentParts[userAgentParts.length - 1].split(" ")[0].split(",")[0];

    let buildIndex = c.req.header("user-agent").indexOf("Release-");
    if (buildIndex !== -1) {
      let build = c.req.header("user-agent")
        .substring(buildIndex + 8)
        .split("-")[0];
      let buildP = build.split(".");
      ver.season = parseInt(buildP[0], 10);
      ver.build = parseFloat(`${buildP[0]}.${buildP[1]}${buildP[2]}`);
      ver.CL = CL;
      ver.lobby = `LobbySeason${ver.season}`;
    }
  }
  return ver;
}
