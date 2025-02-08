document.addEventListener("DOMContentLoaded", () => {

    const loginBtn = document.getElementById("googleLogin");

    if (loginBtn) {

        loginBtn.addEventListener("click", () => {

            setTimeout(() => {
                window.electron.sendAuthSuccess(); // ✅ Use exposed IPC method
            }, 1000);
        });
    } else {
        console.error("❌ Login button not found!");
    }
});
