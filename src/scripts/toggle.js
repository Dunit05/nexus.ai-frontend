const { ipcRenderer } = require("electron");
const ipc=ipcRenderer; // just for shortened name

document.querySelector("#minimize").addEventListener("click", () => {
    ipc.send("window-minimize");
});

document.querySelector("#close").addEventListener("click", () => {
    ipc.send("window-close");
});
