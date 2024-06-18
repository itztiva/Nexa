import { WebSocketServer, WebSocket } from "ws";
import { handleStates } from "./handlers/Message";

const server = new WebSocketServer({ port: 5555 });

server.on("connection", (ws: WebSocket & { dispatchEvent: (event: Event) => boolean }) => {
  handleStates(ws);
});
