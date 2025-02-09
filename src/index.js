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
        frame: false,
        titleBarStyle: "hidden",
        autoHideMenuBar: true,
        icon: path.join(__dirname, "assets/icon.png"),
        webPreferences: {
            preload: path.join(__dirname, "preload.js"),
            sandbox: false,  // ✅ Ensure this is false
        contextIsolation: false,  // ✅ Disable to allow `require()`
        enableRemoteModule: true, // ✅ Ensure remote modules are enabled
        nodeIntegration: true  // ✅ Fully enable Node.js in preload
        }
    });

    authWindow.loadFile("src/pages/signup.html");

    ipcMain.on("auth-success", () => {
        authWindow.close();
        createMainWindow();
    });
});

function createMainWindow() {
    mainWindow = new BrowserWindow({
        width: 450,
        height: 650,
        resizable: false,
        frame: false,
        titleBarStyle: "hidden",
        autoHideMenuBar: true,
        icon: path.join(__dirname, "assets/icon.png"),
        webPreferences: {
            preload: path.join(__dirname, "preload.js"),
            sandbox: false,  // ✅ Ensure this is false
        contextIsolation: false,  // ✅ Disable to allow `require()`
        enableRemoteModule: true, // ✅ Ensure remote modules are enabled
        nodeIntegration: true  // ✅ Fully enable Node.js in preload
        }
    });

    mainWindow.loadFile("src/pages/home.html");
}


ipcMain.once("window-close", () => {
    app.quit();
});

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
});
