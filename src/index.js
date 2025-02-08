const { app, BrowserWindow } = require("electron");
const path = require("path");

let mainWindow;

app.whenReady().then(() => {
    // Open authentication window first
    authWindow = new BrowserWindow({
        width: 1000,
        height: 700,
        autoHideMenuBar: true,
        resizable: false,
        // frame: false, // Google-style minimal window
        alwaysOnTop: true, // ✅ Always on top
        icon: path.join(__dirname, "assets/icon.png"), // ✅ Set App Icon
        webPreferences: {
            preload: path.join(__dirname, "preload.js"),
            nodeIntegration: false,
            contextIsolation: true
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
