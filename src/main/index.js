const {app,BrowserWindow} = require('electron')
var path = require('path')
let win;

let windowConfig = {
    width:360,
    height:550,
    resizable:false,
    maximizable:false,
    show:false,
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

    win.once('ready-to-show', () => {
        win.show()
      })

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


