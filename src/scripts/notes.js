document.addEventListener("DOMContentLoaded", () => {
    console.log("✅ Notes Page Loaded!");

    const notesList = document.getElementById("notes-list");
    const addNoteBtn = document.getElementById("add-note");

    // Load existing notes from local storage
    const notes = JSON.parse(localStorage.getItem("notes")) || [];

    function renderNotes() {
        notesList.innerHTML = "";
        notes.forEach((note, index) => {
            const noteElement = document.createElement("div");
            noteElement.classList.add("note");
            noteElement.innerHTML = `<span>${note}</span> <i class="fas fa-trash delete-note" data-index="${index}"></i>`;
            notesList.appendChild(noteElement);
        });
    }

    // Add a new note
    addNoteBtn.addEventListener("click", () => {
        const newNote = prompt("Enter your note:");
        if (newNote) {
            notes.push(newNote);
            localStorage.setItem("notes", JSON.stringify(notes));
            renderNotes();
        }
    });

    // Delete a note
    notesList.addEventListener("click", (event) => {
        if (event.target.classList.contains("delete-note")) {
            const index = event.target.dataset.index;
            notes.splice(index, 1);
            localStorage.setItem("notes", JSON.stringify(notes));
            renderNotes();
        }
    });

    // Initial Render
    renderNotes();
});
