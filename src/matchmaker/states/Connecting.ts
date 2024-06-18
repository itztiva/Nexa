export function Connecting(ws: WebSocket) {
  ws.send(
    JSON.stringify({
      payload: {
        state: "Connecting",
      },
      name: "StatusUpdate",
    }),
  );
}
