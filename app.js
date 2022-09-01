var notes = []; // mon tableau avec les notes

// écouteur d'évnement le contenu du DOM lorsqu'il est chargé j'effectue le contenu de la fonction mais d'abord je rend les notes
document.addEventListener("DOMContentLoaded", event => {
    renderNotes();
 
// Lorsque j'envoie le form j'annule l'envoi et je reste sur la page avec le prevent default 
// Je déclare une constante note qui va prendre le contenu de textaera SI VIDE -> message hé coco, si non je pousse ma note dans le tableau   déclaré au début, je apelle la fonction qui affiche la note et ensuite je remet la text à box à 0.
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

// Pour ma fonction render Notes : je récupère mes ul via le dom et je les emptys
// Pour chaque note en fonction de l'index dans le tableau je créé un li dans lequel je mets la valeur de la note 
// Je déclare un Button comme un lien et je lui injecte un texte avec le span 
// j'ajoute sur chaque boutton delete au cluck un event qui vas demander de confirmer la suppresion de la note avec cofrim dans le if de ce manière pas de else, si ok je suprimme la valeur de l'index dans le tableau et le 1 sert à indiquer que suprimme une valer et non pas tout le tabelau
// je rerend ma liste de notes juste derrière


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
        li.appendChild(deleteButton); // j'ajoute ma fonction de suppresion dans le li créé
        ul.appendChild(li); // J'ajoute mon li dans le ul
    })
}