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

// Ensure the DOM is loaded before adding event listeners
document.addEventListener("DOMContentLoaded", () => {
    console.log("✅ Home screen loaded!");

    // Minimize and Close Button Events
    document.getElementById("minimize").addEventListener("click", () => {
        window.electron.minimizeWindow();
    });

    document.getElementById("close").addEventListener("click", () => {
        window.electron.closeWindow();
    });

    // Puzzle Button Events
    document.getElementById("vault").addEventListener("click", () => {
        console.log("🔹 Vault clicked");
        window.location.href = "vault.html";
    });

    document.getElementById("availability").addEventListener("click", () => {
        console.log("🔹 Check Availability clicked");
        window.location.href = "availability.html";
    });

    document.getElementById("notes").addEventListener("click", () => {
        console.log("🔹 Personal Notes clicked");
        window.location.href = "notes.html";
    });

    document.getElementById("ask-nexus").addEventListener("click", () => {
        console.log("🔹 Ask Nexus clicked");
        window.location.href = "ask-nexus.html";
    });
});