const { ipcRenderer } = require("electron");

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

    // Debugging - Check if elements exist before adding event listeners
    const minimizeBtn = document.getElementById("minimize");
    const closeBtn = document.getElementById("close");

    if (!minimizeBtn) console.error("❌ Minimize button NOT found in DOM!");
    if (!closeBtn) console.error("❌ Close button NOT found in DOM!");

    if (minimizeBtn) {
        minimizeBtn.addEventListener("click", () => {
            console.log("🔹 Minimize button clicked");
            window.electron.minimizeWindow();
        });
    }

    if (closeBtn) {
        closeBtn.addEventListener("click", () => {
            console.log("🔹 Close button clicked");
            window.electron.closeWindow();
        });
    }
});
