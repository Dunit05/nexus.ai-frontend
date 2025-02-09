const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");

let authWindow;
let mainWindow;

app.whenReady().then(() => {
    // Open authentication window first
    authWindow = new BrowserWindow({
        width: 450,
        height: 650,
        resizable: false,
        frame: false, // ✅ Removes default title bar
        titleBarStyle: "hidden", // ✅ Hides default title
        autoHideMenuBar: true, // ✅ Removes default menu bar
        icon: path.join(__dirname, "assets/icon.png"), // ✅ Set App Icon
        webPreferences: {
            preload: path.join(__dirname, "preload.js"), // ✅ Use preload
            contextIsolation: true,
            enableRemoteModule: false,
            nodeIntegration: false  // ❌ Keep nodeIntegration disabled for security
        }
    });

    authWindow.loadFile("src/pages/signup.html");
});

function createMainWindow() {

    mainWindow = new BrowserWindow({
        width: 450,
        height: 650,
        resizable: false,
        frame: false, // ✅ Removes default title bar
        titleBarStyle: "hidden", // ✅ Hides default title
        autoHideMenuBar: true, // ✅ Removes default menu bar
        icon: path.join(__dirname, "assets/icon.png"), // ✅ Set App Icon
        webPreferences: {
            preload: path.join(__dirname, "preload.js"),
            nodeIntegration: false,
            contextIsolation: true
        }
    });

    mainWindow.loadFile("src/pages/home.html");

    ipcMain.on("window-minimize", () => {
        mainWindow.minimize();
    });

    ipcMain.on("window-maximize", () => {
        if (mainWindow.isMaximized()) {
            mainWindow.unmaximize();
        } else {
            mainWindow.maximize();
        }
    });

    ipcMain.on("window-close", () => {
        mainWindow.close();
    });
}

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
});
