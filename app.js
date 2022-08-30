var notes = [];


document.addEventListener("DOMContentLoaded", event => {
    renderNotes();
 
    document.querySelector("form").addEventListener("submit", event => {
        event.preventDefault();
        const note = document.querySelector("textarea").value;
        if (note.length==0) {
            alert("Hé coco, aucun texte dans la box, nan mais wake up quoi ><' ");
        } else {
            notes.push(note);
            renderNotes();
            document.querySelector("textarea").value = "";
        }
    });
})


function renderNotes() {
    const ul = document.querySelector("#notes");
    ul.innerHTML = "";
    notes.forEach( (note, index) => {
        const li = document.createElement("li");
        li.innerHTML = note;
        const deleteButton = document.createElement("a");
        deleteButton.innerHTML = '<span class="icon">delete</span>';
        deleteButton.addEventListener("click", event => {
            if (confirm(" Tu es vraimeeeent sur de vouloir deleeete cette note ? ")) {
                notes.splice(index, 1);
                renderNotes();
            }
        });
        li.appendChild(deleteButton);
        ul.appendChild(li);
    })
}