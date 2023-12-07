import { ipcRenderer } from "electron";

export function openNewWindow(): void {
  ipcRenderer.send('open-new-window');
}