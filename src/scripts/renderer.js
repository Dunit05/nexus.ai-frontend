document.getElementById("minimize").addEventListener("click", () => {
    window.electron.minimizeWindow(); // ✅ Uses `preload.js` API
});

document.getElementById("close").addEventListener("click", () => {
    console.log("Close button clicked");
    window.electron.closeWindow();
});
