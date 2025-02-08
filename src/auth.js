document.addEventListener("DOMContentLoaded", () => {

    const loginBtn = document.getElementById("nexusLogin");

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
