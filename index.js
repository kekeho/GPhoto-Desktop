const electron = require('electron');
const app = electron.app
const BrowserWindow = electron.BrowserWindow;

let mainWindow = null;
app.on('ready', () => {
  mainWindow = new BrowserWindow({width: 1100, height: 800});
  mainWindow.loadURL('https://photos.google.com');
  
  mainWindow.on('closed', function(){
    mainWindow = null;
  })
})