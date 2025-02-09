// const { contextBridge, ipcRenderer } = require("electron");

// console.log("✅ preload.js is running on the signup page!");

// contextBridge.exposeInMainWorld("electron", {
//     sendAuthSuccess: () => ipcRenderer.send("auth-success"),
//     minimizeWindow: () => ipcRenderer.send("window-minimize"),
//     closeWindow: () => ipcRenderer.send("window-close"),
// });

const { ipcRenderer } = require("electron");

console.log("✅ preload.js is running!");

// ✅ Expose Electron IPC to the renderer process
window.electron = {
    sendAuthSuccess: () => {
        console.log("🔹 Sending auth-success event");
        ipcRenderer.send("auth-success");
    },
    minimizeWindow: () => {
        console.log("🔹 Sending window-minimize event");
        ipcRenderer.send("window-minimize");
    },
    closeWindow: () => {
        console.log("🔹 Sending window-close event");
        ipcRenderer.send("window-close");
    }
};