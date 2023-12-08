import { ipcMain } from "electron";
import IpcConstants from '../models/ipcConstants';

ipcMain.handle(IpcConstants.AddToCount, async (evt, count): Promise<number> => {
  await sleep(2000);
  return count + 1;
});

ipcMain.handle(IpcConstants.GetBankAccountData, async (evt): Promise<object> => {
  const resp = await fetch('https://api.sampleapis.com/fakebank/accounts');
  const json = await resp.json();
  return json;
});

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));