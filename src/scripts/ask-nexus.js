// Ensure the DOM is fully loaded before running the script
document.addEventListener("DOMContentLoaded", () => {
    console.log("Ask Nexus Page Loaded!");

    // ==========================
    // Select UI Elements
    // ==========================

    const chatBox = document.getElementById("chat-box"); // Chat container for displaying messages
    const userInput = document.getElementById("user-input"); // Input field for user messages
    const sendButton = document.getElementById("send-message"); // Send button

    // ==========================
    // Function to Send a Message
    // ==========================

    /**
     * Handles sending a user message and simulating an AI response.
     */
    function sendMessage() {
        const userText = userInput.value.trim(); // Get and trim user input
        if (!userText) return; // Exit if input is empty

        // Create a new user message element
        const userMessage = document.createElement("div");
        userMessage.classList.add("chat-message", "user-message"); // Apply styling classes
        userMessage.innerHTML = `<p>${userText}</p><i class="fas fa-user"></i>`; // Add message content
        chatBox.appendChild(userMessage); // Append to chat container

        // Clear input field after sending message
        userInput.value = "";

        // Simulate AI response with a short delay
        setTimeout(() => {
            const aiMessage = document.createElement("div");
            aiMessage.classList.add("chat-message", "ai-message"); // Add AI styling
            aiMessage.innerHTML = `<i class="fas fa-robot"></i><p>Processing...</p>`; // Placeholder text
            chatBox.appendChild(aiMessage); // Append AI response

            // Scroll chat box to the latest message
            chatBox.scrollTop = chatBox.scrollHeight;
        }, 1000);
    }

    // ==========================
    // Event Listeners
    // ==========================

    // Send message when clicking the send button
    sendButton.addEventListener("click", sendMessage);

    // Send message when pressing "Enter" in the input field
    userInput.addEventListener("keypress", (event) => {
        if (event.key === "Enter") sendMessage();
    });
});
