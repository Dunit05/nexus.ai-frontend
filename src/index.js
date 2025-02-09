const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");

let authWindow;
let mainWindow;

app.whenReady().then(() => {
    // Create the authentication window (signup/login screen)
    authWindow = new BrowserWindow({
        width: 450,
        height: 650,
        resizable: false, // Prevent resizing
        frame: false, // Remove default Electron frame
        titleBarStyle: "hidden", // Hide title bar
        autoHideMenuBar: true, // Remove default menu bar
        icon: path.join(__dirname, "assets/icon.png"), // Set app icon
        webPreferences: {
            preload: path.join(__dirname, "preload.js"), // Load preload script
            sandbox: false, // Ensure Electron APIs work properly
            contextIsolation: false, // Disable isolation to allow `require()`
            enableRemoteModule: true, // Allow remote module usage
            nodeIntegration: true // Enable Node.js in renderer process
        }
    });

    // Load the signup page into the authentication window
    authWindow.loadFile("src/pages/signup.html");

    // Listen for the authentication success event
    ipcMain.on("auth-success", () => {
        authWindow.close(); // Close the authentication window
        createMainWindow(); // Open the main application window
    });
});

/**
 * Creates the main application window after authentication.
 */
function createMainWindow() {
    mainWindow = new BrowserWindow({
        width: 450,
        height: 650,
        resizable: false, // Prevent resizing
        frame: false, // Remove default Electron frame
        titleBarStyle: "hidden", // Hide title bar
        autoHideMenuBar: true, // Remove default menu bar
        icon: path.join(__dirname, "assets/icon.png"), // Set app icon
        webPreferences: {
            preload: path.join(__dirname, "preload.js"), // Load preload script
            sandbox: false, // Ensure Electron APIs work properly
            contextIsolation: false, // Disable isolation to allow `require()`
            enableRemoteModule: true, // Allow remote module usage
            nodeIntegration: true // Enable Node.js in renderer process
        }
    });

    // Load the main application page
    mainWindow.loadFile("src/pages/home.html");
}

// Handle request to close the application window
ipcMain.once("window-close", () => {
    app.quit();
});

// Quit the app when all windows are closed (except on macOS)
app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
});
