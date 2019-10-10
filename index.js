const {app, BrowserWindow} = require('electron');

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
    win.loadFile('./app.html')
})

app.on('window-all-closed', () =>{
    app.quit();
})