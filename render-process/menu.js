//这部分代码是通过在渲染进程中使用menu组件然后监听dom的右键点击事件来现实menu实现右键的menu
// const { remote } = require('electron')
// const { Menu, MenuItem } = remote
//
// const menu = new Menu();
//
// menu.append(new MenuItem({ label: 'MenuItem1', click() { console.log('item 1 clicked') } }))
// menu.append(new MenuItem({ label: 'copy', role:"copy" }))
// menu.append(new MenuItem({ type: 'separator' }))
// menu.append(new MenuItem({ label: 'MenuItem2', type: 'checkbox', checked: true ,click(menuItem, browserWindow, event){console.log(menuItem)}}))
//
// window.addEventListener('contextmenu', (e) => {
//     e.preventDefault()
//     menu.popup()
// }, false);


//也可以通过主进程和渲染进程之间的通信，通知主进程显示右键菜单
const {ipcRenderer} = require("electron");

document.oncontextmenu = () => {
    ipcRenderer.send("show-context-menu", () => {
        console.log("发送右键菜单事件");
    });
}