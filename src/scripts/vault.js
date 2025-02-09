document.addEventListener("DOMContentLoaded", () => {
    console.log("✅ Vault Page Loaded!");

    const dropArea = document.getElementById("drop-area");
    const userInput = document.getElementById("user-input");
    const sendButton = document.getElementById("send-message");
    const chatContainer = document.querySelector(".chat-container");

    // Drag & Drop File Upload
    dropArea.addEventListener("dragover", (event) => {
        event.preventDefault();
        dropArea.style.borderColor = "blue";
    });

    dropArea.addEventListener("dragleave", () => {
        dropArea.style.borderColor = "black";
    });

    dropArea.addEventListener("drop", (event) => {
        event.preventDefault();
        dropArea.style.borderColor = "black";
        console.log("📂 File Dropped:", event.dataTransfer.files[0].name);
        alert(`File "${event.dataTransfer.files[0].name}" uploaded!`);
    });

    // AI Chat - Send Message
    function sendMessage() {
        const userText = userInput.value.trim();
        if (!userText) return;

        // Create User Message
        const userMessage = document.createElement("div");
        userMessage.classList.add("chat-message", "user-message");
        userMessage.innerHTML = `<p>${userText}</p><i class="fas fa-user"></i>`;
        chatContainer.appendChild(userMessage);

        // Clear Input
        userInput.value = "";

        // Simulate AI Response
        setTimeout(() => {
            const aiMessage = document.createElement("div");
            aiMessage.classList.add("chat-message", "ai-message");
            aiMessage.innerHTML = `<i class="fas fa-robot"></i><p>Processing...</p>`;
            chatContainer.appendChild(aiMessage);
        }, 1000);
    }

    // Event Listeners
    sendButton.addEventListener("click", sendMessage);
    userInput.addEventListener("keypress", (event) => {
        if (event.key === "Enter") sendMessage();
    });
});
