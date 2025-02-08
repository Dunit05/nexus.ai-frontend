import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
const { ipcRenderer } = require("electron");

// Firebase Configuration
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

document.getElementById("googleLogin").addEventListener("click", async () => {
    try {
        const result = await signInWithPopup(auth, provider);
        console.log("User Signed In:", result.user);
        ipcRenderer.send("auth-success");
    } catch (error) {
        console.error("Login Failed:", error);
    }
});
