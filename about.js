const phrase = "My name is Olga. I code things.";
const paragraph = document.querySelector(".typed-text");
let letter = 0;

function typePhrase() {
    if ( letter < phrase.length) {
    paragraph.innerHTML += phrase.charAt(letter);
    letter++;
    setTimeout(typePhrase, 150); 
    }
}

typePhrase();