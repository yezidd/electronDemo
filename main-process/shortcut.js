const {globalShortcut, app} = require("electron");


app.on("ready", () => {
    globalShortcut.register("CommandOrControl+X", () => {
        console.log("--快捷键被触发");
    })
});

app.on("will-quit", () => {
    globalShortcut.unregisterAll();
    console.log("------快捷键取消注册l");
})