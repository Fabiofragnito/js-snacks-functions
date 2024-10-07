/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.
function getString(word) {
    let vocals = ["a","e","i","o","u"];
    let arrayVocals = [];
    for (let i = 0; i < word.length; i++) {
        if (vocals.includes(word[i])) { 
            arrayVocals.push(word[i]);
        }
        
    }
    return arrayVocals;
    
}


// Invoca la funzione qui e stampa il risultato in console
const arrayVocals = getString(word);
console.log(arrayVocals);




//Risultato atteso se si passa 'javascript': 3 (a, a, i)