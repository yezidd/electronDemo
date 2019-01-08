const path = require("path");

const {Notification} = require("electron");

const option = {
    title: "标题",
    body: "主题内容"
}

console.log("------"+Notification.isSupported());

const notification = new Notification("你好呀");

notification.show();

console.log("----可以显示通知吗")