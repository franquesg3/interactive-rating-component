let selectedNote;

function selectNote(note) {
    let buttons = document.querySelectorAll(".note-button");
    buttons.forEach(button => button.classList.remove("active"));
    
    document.getElementById(`button-${note}`).classList.add("active");
    
    selectedNote = note;

    console.log(selectedNote)
};

function submitSelection() {
    
    document.querySelector('.rating-state').style.display = "none";
    document.querySelector('.thank-you').style.display = "block";
    
    let selectedRating = document.querySelector('.selected');
    selectedRating.innerHTML = `You selected ${selectedNote} out of 5`

};
