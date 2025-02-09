// Wait until the DOM is fully loaded before running the script
document.addEventListener("DOMContentLoaded", () => {
    console.log("Notes Page Loaded!");

    // Get references to UI elements
    const notesList = document.getElementById("notes-list"); // Container for displaying notes
    const addNoteBtn = document.getElementById("add-note"); // Button to add a new note

    // ==========================
    // Load Existing Notes
    // ==========================

    // Retrieve stored notes from localStorage or initialize an empty array
    const notes = JSON.parse(localStorage.getItem("notes")) || [];

    /**
     * Renders the list of notes on the page.
     * Iterates through stored notes and creates elements dynamically.
     */
    function renderNotes() {
        notesList.innerHTML = ""; // Clear existing notes before re-rendering

        notes.forEach((note, index) => {
            // Create a new note element
            const noteElement = document.createElement("div");
            noteElement.classList.add("note"); // Apply styling class
            noteElement.innerHTML = `
                <span>${note}</span> 
                <i class="fas fa-trash delete-note" data-index="${index}"></i>
            `;

            // Append note element to the notes list
            notesList.appendChild(noteElement);
        });
    }

    // ==========================
    // Add a New Note
    // ==========================

    /**
     * Prompts the user to enter a new note, then saves it.
     * Updates local storage and re-renders the note list.
     */
    addNoteBtn.addEventListener("click", () => {
        const newNote = prompt("Enter your note:"); // Prompt user for input
        if (newNote) {
            notes.push(newNote); // Add new note to array
            localStorage.setItem("notes", JSON.stringify(notes)); // Save updated notes
            renderNotes(); // Refresh UI
        }
    });

    // ==========================
    // Delete a Note
    // ==========================

    /**
     * Listens for clicks on the delete button inside notes.
     * Removes the corresponding note from storage and UI.
     */
    notesList.addEventListener("click", (event) => {
        if (event.target.classList.contains("delete-note")) {
            const index = event.target.dataset.index; // Get note index
            notes.splice(index, 1); // Remove the note from the array
            localStorage.setItem("notes", JSON.stringify(notes)); // Update storage
            renderNotes(); // Refresh UI
        }
    });

    // ==========================
    // Initial Render
    // ==========================

    renderNotes(); // Load and display stored notes on page load
});
