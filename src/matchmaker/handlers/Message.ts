import { WebSocket } from "ws";
import { Connecting } from "../states/Connecting";
import { Waiting } from "../states/Waiting";
import { Queued } from "../states/Queued";

export async function handleStates(ws: WebSocket) {
  const status: any = ws;
  Connecting(status);
  await new Promise((resolve) => setTimeout(resolve, 800));
  Waiting(status);
  await new Promise((resolve) => setTimeout(resolve, 1000));
  Queued(status);
  await new Promise((resolve) => setTimeout(resolve, 4000));
}
