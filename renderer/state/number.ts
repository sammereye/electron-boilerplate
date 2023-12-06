import { hookstate } from "@hookstate/core";
import { ipcRenderer } from "electron";

export const COUNT = hookstate(0);

export function addToCount() {
  COUNT.set(COUNT.get() + 1);
  ipcRenderer.send("button-pressed");
}