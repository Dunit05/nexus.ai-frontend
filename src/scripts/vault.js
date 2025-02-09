// Ensure the DOM is fully loaded before running the script
document.addEventListener("DOMContentLoaded", () => {
    console.log("Vault Page Loaded!");

    // Get references to necessary UI elements
    const dropArea = document.getElementById("drop-area"); // File drop zone
    const userInput = document.getElementById("user-input"); // Chat input field
    const sendButton = document.getElementById("send-message"); // Send message button
    const chatContainer = document.querySelector(".chat-container"); // Chat display container

    // ==========================
    // Drag & Drop File Upload
    // ==========================

    // Highlight drop area when a file is dragged over it
    dropArea.addEventListener("dragover", (event) => {
        event.preventDefault(); // Prevent default file handling
        dropArea.style.borderColor = "blue"; // Change border color to indicate active drop zone
    });

    // Reset border when the file is dragged out
    dropArea.addEventListener("dragleave", () => {
        dropArea.style.borderColor = "black";
    });

    // Handle file drop event
    dropArea.addEventListener("drop", (event) => {
        event.preventDefault(); // Prevent default browser behavior
        dropArea.style.borderColor = "black"; // Reset border color

        // Get the dropped file and log its name
        const droppedFile = event.dataTransfer.files[0];
        if (droppedFile) {
            console.log("File Dropped:", droppedFile.name);
            alert(`File "${droppedFile.name}" uploaded!`);
        }
    });

    // ==========================
    // AI Chat - Send Message
    // ==========================

    /**
     * Sends a user message and simulates an AI response.
     */
    function sendMessage() {
        const userText = userInput.value.trim(); // Get and trim user input
        if (!userText) return; // Exit if input is empty

        // Create a new chat message for the user
        const userMessage = document.createElement("div");
        userMessage.classList.add("chat-message", "user-message"); // Add styling classes
        userMessage.innerHTML = `<p>${userText}</p><i class="fas fa-user"></i>`; // Add message content
        chatContainer.appendChild(userMessage); // Append to chat container

        // Clear input field after sending the message
        userInput.value = "";

        // Simulate AI response with a short delay
        setTimeout(() => {
            const aiMessage = document.createElement("div");
            aiMessage.classList.add("chat-message", "ai-message"); // Add AI styling
            aiMessage.innerHTML = `<i class="fas fa-robot"></i><p>Processing...</p>`; // Placeholder text
            chatContainer.appendChild(aiMessage); // Append AI message
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
