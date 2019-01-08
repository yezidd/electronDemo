const electron = require("electron");

const BrowserWindow = electron.remote.BrowserWindow;

let openWindowDom = document.getElementById("openWindow");


let win ;

openWindowDom.onclick = () => {
    win = new BrowserWindow({
        width:400,
        height:400,
        show:false,
    });

    let child = new BrowserWindow({ parent: win, modal: true, show: false })
    child.show();

    // win.loadURL("http://www.baidu.com")
    // win.once("ready-to-show",()=>{
    //     win.show();
    // })
}