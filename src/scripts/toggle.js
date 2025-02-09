// Import Electron's IPC Renderer for communication with the main process
const { ipcRenderer } = require("electron");

// Create a shortened alias for ipcRenderer to simplify calls
const ipc = ipcRenderer;

// ==========================
// Window Control Listeners
// ==========================

// Listen for a click event on the minimize button
document.querySelector("#minimize").addEventListener("click", () => {
    ipc.send("window-minimize"); // Send event to main process to minimize window
});

// Listen for a click event on the close button
document.querySelector("#close").addEventListener("click", () => {
    ipc.send("window-close"); // Send event to main process to close window
});
