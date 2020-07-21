// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati

var casuali = [];
var massimo = 100;

// ciclo per generare numeri casuali ed inserirlo nell'array senza doppioni
while (casuali.length < 16) {
    var numero = generaRandom(1,100);
    if (trovaElemento(casuali,numero) == false) {
        casuali.push(numero);
    }
}
console.log(casuali);

// In seguito deve chiedere all'utente (100 - 16) volte di inserire un numero alla volta,
// sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina,
// altrimenti si continua chiedendo all'utente un altro numero.

var voltePossibili = massimo - 16;
var numeri = [];
var numUtente;
var trovato = false;

while (numeri.length < voltePossibili && trovato == false) {
    // inserimento numero utente possibile
    var numUtente = parseInt(prompt("Inserisci un numero da 1 a " + massimo));
    // controllo inserimento utente (tra 0 e 100)
    while (numUtente <= 0 || numUtente > massimo) {
        numUtente = parseInt(prompt("Attenzione, devi inserire un numero da 1 a " + massimo));
    }
    // controllo per verifica che il numero utente non sia nell'array casuale e che non sia un doppio
    if (trovaElemento(casuali,numUtente)) {
        trovato = true;
    }
    else if (trovaElemento(numeri,numUtente) == false) {
        numeri.push(numUtente);
    } else {
        alert ("Attenzione, numero già presente. Ripetere l'inserimento");
    }
}

// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero
// massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio,
// cioè il numero di volte che l’utente ha inserito un numero consentito.

if (trovato) {
    alert("Hai perso, con punteggio " + numeri.length);
} else {
    alert("Hai vinto!");
}
console.log(numeri);



// ****mie Funzioni****//
function generaRandom(min,max) {
    return Math.floor(Math.random()* (max - min + 1)) + min;
}

function trovaElemento(array,elemento) {
    var i = 0;
    while (i < array.length) {
        if (elemento == array[i]) {
            return true;
        }
    i++;
    }
    return false;
}
