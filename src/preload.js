const { contextBridge, ipcRenderer } = require("electron");

console.log("🚀 preload.js IS RUNNING!"); // ✅ Debugging Log

contextBridge.exposeInMainWorld("electron", {
    // Authentication Success Event
    sendAuthSuccess: () => ipcRenderer.send("auth-success"),

    // Window Controls
    maximizeWindow: () => ipcRenderer.send("window-maximize"),
    closeWindow: () => ipcRenderer.send("window-close"),
});
