import { BrowserWindow, BrowserWindowConstructorOptions } from 'electron';
import { getUserConfigData, setUserConfigData } from '../services/config';
import { UserConfig } from '../../models/userConfig';

export async function openMainWindow(webpackEntry: string, preloadEntry: string): Promise<BrowserWindow> {
  let windows = BrowserWindow.getAllWindows();
  if (windows.length === 0) {
    await createMainWindow(webpackEntry, preloadEntry);
    windows = BrowserWindow.getAllWindows();
  } else {
    windows[0].show();
    windows[0].focus();
  }

  return windows[0];
}

async function createMainWindow(webpackEntry: string, preloadEntry:string) {
  const userConfig: UserConfig = getUserConfigData();

  const config: BrowserWindowConstructorOptions = {
    width: userConfig.mainWindow.width,
    height: userConfig.mainWindow.height,
    x: userConfig.mainWindow.x,
    y: userConfig.mainWindow.y,
    webPreferences: {
      contextIsolation: false,
      nodeIntegration: true,
      spellcheck: false,
      preload: preloadEntry
    }
  };
  
  const win = new BrowserWindow(config);

  win.on("resize", () => {
    const userConfig: UserConfig = getUserConfigData();
    userConfig.mainWindow.width = win.getBounds().width;
    userConfig.mainWindow.height = win.getBounds().height;

    setUserConfigData(userConfig);
  })

  win.on("move", () => {
    const userConfig: UserConfig = getUserConfigData();
    userConfig.mainWindow.x = win.getBounds().x;
    userConfig.mainWindow.y = win.getBounds().y;

    setUserConfigData(userConfig);
  })
  
  const loadedPromise = new Promise<void>((resolve, reject) => {
    const timeout = setTimeout(
      () => reject(new Error("Timed-out waiting for window to load")),
      10000
    );
    win.webContents.once("did-finish-load", () => {
      clearTimeout(timeout);
      resolve();
    });
  });

  win.loadURL(webpackEntry);
  await loadedPromise;
}