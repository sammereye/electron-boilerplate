import { app, BrowserWindow, Menu } from 'electron';
import { openMainWindow } from './services/windows';
import './ipc';

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) {
  app.quit();
}

// Better performance when a menu is not needed
// Menu.setApplicationMenu(null);

app.on('ready', () => {
  openMainWindow();
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

// MAC
app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    openMainWindow();
  }
});