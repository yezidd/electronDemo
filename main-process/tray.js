const {Tray, Menu, MenuItem} = require("electron");

const path = require("path");

let appIcon = new Tray(path.join(__dirname, "../icon/update.png"));

let trayMenu = new Menu();

trayMenu.append(new MenuItem({label: "你好呀"}))


appIcon.on("right-click", function () {
    console.log(arguments);
})

appIcon.setToolTip("桌面事例");

appIcon.setContextMenu(trayMenu);

