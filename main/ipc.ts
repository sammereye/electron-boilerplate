import { ipcMain } from "electron";
import { createNewWindow } from './services/windows';

ipcMain.on("button-pressed", (evt) => {
  console.log("Button has been pressed!");
});

ipcMain.on("open-new-window", (evt) => {
  createNewWindow();
});

ipcMain.on('get-bank-account-data', async (evt) => {
  console.log('server to client to set data');
  const resp = await fetch('https://api.sampleapis.com/fakebank/accounts');
  const json = await resp.json();
  
  evt.sender.send('set-bank-account-data', json);
});