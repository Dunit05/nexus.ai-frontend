const { ipcRenderer } = require("electron");

// Expose Electron's IPC functions to the renderer process via `window.electron`
window.electron = {
    /**
     * Sends an authentication success event to the main process.
     * This event is used to close the authentication window and open the main window.
     */
    sendAuthSuccess: () => {
        console.log("Sending auth-success event");
        ipcRenderer.send("auth-success");
    },

    /**
     * Sends an event to minimize the application window.
     */
    minimizeWindow: () => {
        console.log("Sending window-minimize event");
        ipcRenderer.send("window-minimize");
    },

    /**
     * Sends an event to close the application window.
     */
    closeWindow: () => {
        console.log("Sending window-close event");
        ipcRenderer.send("window-close");
    }
};

// Ensure the DOM is fully loaded before attaching event listeners
document.addEventListener("DOMContentLoaded", () => {
    console.log("Home screen loaded!");

    // Get references to the minimize and close buttons in the UI
    const minimizeBtn = document.getElementById("minimize");
    const closeBtn = document.getElementById("close");

    // Debugging: Check if the elements exist in the DOM
    if (!minimizeBtn) console.error("Minimize button NOT found in the DOM!");
    if (!closeBtn) console.error("Close button NOT found in the DOM!");

    // Add event listener for minimize button if found
    if (minimizeBtn) {
        minimizeBtn.addEventListener("click", () => {
            console.log("Minimize button clicked");
            window.electron.minimizeWindow();
        });
    }

    // Add event listener for close button if found
    if (closeBtn) {
        closeBtn.addEventListener("click", () => {
            console.log("Close button clicked");
            window.electron.closeWindow();
        });
    }
});
