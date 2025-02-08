document.addEventListener("DOMContentLoaded", function () {
    const notesContainer = document.getElementById("notesContainer");
    const addNoteBtn = document.getElementById("addNote");

    // Function to create a new note entry
    function createNote(text = "New Note") {
        const note = document.createElement("div");
        note.classList.add("note-item");
        note.textContent = text;
        notesContainer.appendChild(note);
    }

    // Event Listener for Adding Notes
    addNoteBtn.addEventListener("click", function () {
        createNote();
    });
});
