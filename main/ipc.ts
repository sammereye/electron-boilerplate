import { ipcMain } from "electron";

ipcMain.on("button-pressed", (evt) => {
  console.log("Button has been pressed!");
});