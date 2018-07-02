const {app,BrowserWindow} = require('electron')
var path = require('path')
let win;

let windowConfig = {
    width:400,
    height:600
}

function createWindow() {
    win = new BrowserWindow(windowConfig)
    // console.log(__dirname)
    let baseDir = path.dirname(__dirname)
    let url = require('url').format({
        protocol: 'file',
        slashes: true,
        pathname: path.join(baseDir, '/render/index.html')
      })
    // console.log(url)
    win.loadURL(url)
    // win.webContents.openDevTools();
    win.on('close',()=>{
        win = null
    });
    // win.on('resize',()=>{
    //     win.reload()
    // })
}


 
app.on('ready',createWindow);
app.on('window-all-closed',() => {
    app.quit();
});
 
app.on('activate',() => {
    if(win == null){
        createWindow();
    }
})


