document.addEventListener("DOMContentLoaded", () => {
    console.log("✅ Ask Nexus Page Loaded!");

    const chatBox = document.getElementById("chat-box");
    const userInput = document.getElementById("user-input");
    const sendButton = document.getElementById("send-message");

    // Function to send message
    function sendMessage() {
        const userText = userInput.value.trim();
        if (!userText) return;

        // Create User Message
        const userMessage = document.createElement("div");
        userMessage.classList.add("chat-message", "user-message");
        userMessage.innerHTML = `<p>${userText}</p><i class="fas fa-user"></i>`;
        chatBox.appendChild(userMessage);

        // Clear Input
        userInput.value = "";

        // Simulate AI Response
        setTimeout(() => {
            const aiMessage = document.createElement("div");
            aiMessage.classList.add("chat-message", "ai-message");
            aiMessage.innerHTML = `<i class="fas fa-robot"></i><p>Processing...</p>`;
            chatBox.appendChild(aiMessage);

            // Scroll to the latest message
            chatBox.scrollTop = chatBox.scrollHeight;
        }, 1000);
    }

    // Event Listeners
    sendButton.addEventListener("click", sendMessage);
    userInput.addEventListener("keypress", (event) => {
        if (event.key === "Enter") sendMessage();
    });
});
