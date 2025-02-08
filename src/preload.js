const { contextBridge, ipcRenderer } = require("electron");

console.log("🚀 preload.js IS RUNNING!");

contextBridge.exposeInMainWorld("electron", {
    sendAuthSuccess: () => {
        ipcRenderer.send("auth-success");
    }
});
