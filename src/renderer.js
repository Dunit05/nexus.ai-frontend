// Wait for the DOM to fully load before running the script
document.addEventListener("DOMContentLoaded", () => {
    console.log("Renderer.js Loaded!");

    // Ensure that the `window.electron` API is available
    if (!window.electron) {
        console.error("window.electron is undefined! Preload.js may not be injecting properly.");
        return; // Exit the script early if Electron APIs are unavailable
    } else {
        console.log("window.electron is available:", window.electron);
    }

    // Get references to the minimize and close buttons in the UI
    const minimizeButton = document.getElementById("minimize");
    const closeButton = document.getElementById("close");

    // Add event listener for the minimize button
    if (minimizeButton) {
        minimizeButton.addEventListener("click", () => {
            console.log("Minimize button clicked");
            window.electron.minimizeWindow(); // Call the Electron API to minimize the window
        });
    } else {
        console.error("Minimize button not found in the DOM!");
    }

    // Add event listener for the close button
    if (closeButton) {
        closeButton.addEventListener("click", () => {
            console.log("Close button clicked");
            window.electron.closeWindow(); // Call the Electron API to close the window
        });
    } else {
        console.error("Close button not found in the DOM!");
    }
});
