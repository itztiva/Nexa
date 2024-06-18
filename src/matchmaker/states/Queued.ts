import { v4 as uuidv4 } from "uuid";

export function Queued(ws: WebSocket) {
  const ticketId = uuidv4().replace(/-/gi, "");
  ws.send(
    JSON.stringify({
      payload: {
        ticketId: ticketId,
        queuedPlayers: 0,
        estimatedWaitSec: 0,
        status: {},
        state: "Queued",
      },
      name: "StatusUpdate",
    }),
  );
}
