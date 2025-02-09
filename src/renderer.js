document.addEventListener("DOMContentLoaded", () => {
    console.log("✅ Renderer.js Loaded!");

    // ✅ Check if window.electron is available
    if (!window.electron) {
        console.error("❌ window.electron is undefined! Preload.js is not injecting.");
        return;
    } else {
        console.log("✅ window.electron is available:", window.electron);
    }

    const minimizeButton = document.getElementById("minimize");
    const closeButton = document.getElementById("close");

    if (minimizeButton) {
        minimizeButton.addEventListener("click", () => {
            console.log("🔹 Minimize button clicked");
            window.electron.minimizeWindow();
        });
    } else {
        console.error("❌ Minimize button NOT found in DOM!");
    }

    if (closeButton) {
        closeButton.addEventListener("click", () => {
            console.log("🔹 Close button clicked");
            window.electron.closeWindow();
        });
    } else {
        console.error("❌ Close button NOT found in DOM!");
    }
});
