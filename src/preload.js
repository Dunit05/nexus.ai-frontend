const { contextBridge } = require("electron");

contextBridge.exposeInMainWorld("electronAPI", {
    example: () => console.log("Hello from Preload!")
});
