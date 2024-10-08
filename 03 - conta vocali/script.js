/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.

// function getString(word) {
    const getString = (str) =>{ 
    let vocals = ["a","e","i","o","u"];
    let arrayVocals = [];
    for (let i = 0; i < str.length; i++) {
        if (vocals.includes(str[i])) { 
            arrayVocals.push(str[i]);
        }
        
    }
    return arrayVocals;
    return arrayVocals.length;
    
}


// Invoca la funzione qui e stampa il risultato in console
// const arrayVocals = getString(word);
console.log(getString(word));




//Risultato atteso se si passa 'javascript': 3 (a, a, i)