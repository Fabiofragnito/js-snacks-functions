/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.

function getString(names, letter) {
    let filteredString = [];
    for (let i = 0; i < names.length; i++) {
        if (names[i][0] === letter) {
            filteredString.push(names[i]);
        }
        
    }

    return filteredString;

}
// Invoca la funzione qui e stampa il risultato in console
const filteredString = getString(names, "L");
console.log(filteredString);




//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]