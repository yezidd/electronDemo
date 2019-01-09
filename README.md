# 自己测试的一些小栗子

> Hello World

+ 创建窗口

+ 明白哪些接口的归属(主进程和渲染进程)

> 创建窗口的例子(openWindow.js)

+ modal

+ 父子窗口 和强制父子窗口

+ 打开一个窗口

+ 通过remote实现主进程和渲染进程的通信

> Menu菜单(Menu.js)

+ 创建窗口菜单

+ 创建dock栏菜单

+ 创建右键菜单栏菜单(通过渲染进程自身实现 监听dom的oncontextmenu或者是通过渲染进程和主进程之间的通信通知主进程进行菜单的渲染)

> Tray 设置系统托盘

+ 设置系统托盘

+ 设置系统托盘的图标

+ 设置系统托盘的显示的菜单栏和点击事件

+ 点击事件 需要分清楚平台 并且设置了点击出现菜单之后 鼠标左键点击和双击都失效了

> 对话框

+ 可以打开一个消息框

+ 可以打开一个带按钮的消息框 回调函数用来确定点击了那个按钮 通过index索引来确定

+ 可以打开一个文件选取框

+ 可以打开一个文件存储框

+ 可以打开一个错误信息提示框

> 消息通知Notification

+ 不知道为什么只能触发一次通知，之后就不再显示，不知道是不是跟系统设置有关系？

> 注册全局快捷键

+ app.on("ready")=>globalShortcut.register()

+ app.on("will-quit")=>globalShortcut.unregisterAll()

+ 这是快捷键的基本逻辑