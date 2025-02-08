const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");

let authWindow;
let mainWindow;

app.whenReady().then(() => {
    // Open authentication window first
    authWindow = new BrowserWindow({
        width: 400,
        height: 500,
        autoHideMenuBar: true,
        resizable: false,
        icon: path.join(__dirname, "assets/icon.png"), // ✅ Set App Icon
        webPreferences: {
            preload: path.join(__dirname, "preload.js"), // ✅ Use preload
            contextIsolation: true,
            enableRemoteModule: false,
            nodeIntegration: false  // ❌ Keep nodeIntegration disabled for security
        }
    });

    authWindow.loadFile("auth.html");

    ipcMain.on("auth-success", () => {
        authWindow.close();
        createMainWindow();
    });
});

function createMainWindow() {

    mainWindow = new BrowserWindow({
        width: 1000,
        height: 700,
        webPreferences: {
            preload: path.join(__dirname, "preload.js"),
            nodeIntegration: false,
            contextIsolation: true
        }
    });

    mainWindow.loadFile("index.html");
}

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
});
