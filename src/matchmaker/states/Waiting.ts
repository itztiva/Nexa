export function Waiting(ws: WebSocket) {
  ws.send(
    JSON.stringify({
      payload: {
        totalPlayers: 1,
        connectedPlayers: 1,
        state: "Waiting",
      },
      name: "StatusUpdate",
    }),
  );
}
