const {app, BrowserWindow} = require("electron");

const path = require("path");

const url = require("url");

let win;


function createWindow() {
    win = new BrowserWindow({
        width: 800,
        height: 600
    });

    const URL = url.format({
        pathname: path.join(__dirname, "app/index.html"),
        protocol: 'file',
        slashes: true
    });

    win.loadURL(URL);

    win.webContents.openDevTools();

    require("./main-process/menu");
    require("./main-process/tray");
    require("./main-process/dialog");
    require("./main-process/notification");

    win.on("close", () => {
        win = null;
    })
}

require("./main-process/shortcut");
app.on("ready", createWindow);

app.on("window-all-closed", () => {
    if ("darwin" !== process.platform) {
        app.quit();
    }
});

app.on("activate", () => {
    if (win == null) {
        createWindow();
    }
})
