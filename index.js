const {app, BrowserWindow, Menu, MenuItem} = require('electron');
const path = require('path');
const mapEditor = require('./Menu/mapEditor')

const dirUrl = app.getAppPath() ;
require('electron-reload')(dirUrl);

const createWindow = () => {
    const window = new BrowserWindow({
        width: 600, 
        height: 1400,
        show: false,
        webPreferences:{
            nodeIntegration:true
        }
    });
    window.maximize()
    return window
}

const loadMapEditor = (window) => {
    window.show()

    const menu = Menu.buildFromTemplate(mapEditor);
    Menu.setApplicationMenu(menu);

    window.loadFile(path.join(dirUrl, 'mapEditor.html'))
}

const launchApp = () => {
    
    const window = createWindow();
    loadMapEditor(window)    
}

app.on('ready', launchApp)

app.on('window-all-closed', () =>{
    app.quit();
})