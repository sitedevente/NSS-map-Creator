const {app, BrowserWindow} = require('electron');
const path = require('path');

const dirUrl = app.getAppPath() ;
const mainEntry = 'app.html';


require('electron-reload')(dirUrl);

app.on('ready', () =>{
    const win = new BrowserWindow({
        width: 600, 
        height: 1400,
        show: false,
        webPreferences:{
            nodeIntegration:true
        }
    });
    
    win.maximize()
    win.show()
    win.loadFile(path.join(dirUrl, mainEntry))
})

app.on('window-all-closed', () =>{
    app.quit();
})