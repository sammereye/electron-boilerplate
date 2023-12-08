import { contextBridge, ipcRenderer } from "electron";
import IpcConstants from "../models/ipcConstants";

declare global {
  interface Window {
    electron:  {
      buttonPressed: (count: number) => Promise<number>,
      getBankAccountData: () => Promise<object>,
    }
  }
}

contextBridge.exposeInMainWorld('electron', {
  buttonPressed: (count: number) => ipcRenderer.invoke(IpcConstants.AddToCount, count),
  getBankAccountData: () => ipcRenderer.invoke(IpcConstants.GetBankAccountData)
})
