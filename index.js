const { app, BrowserWindow } = require ('electron');

const customTitlebar = require('custom-electron-titlebar');

function createWindow() {
  const win = new BrowserWindow({ width: 800, height: 600, frame: false, transparent: true, });
  win.loadURL("http://localhost:3000");
}

new customTitlebar.Titlebar({
  backgroundColor: customTitlebar.Color.fromHex('#FFFFFF')
});

app.on("ready", createWindow);