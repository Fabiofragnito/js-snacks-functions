/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];

// 
// Dichiara la funzione qui.

// function getInitials(names) {  
//     let initials = [];

const getInitials = (names) =>{ 
    let initials = [];


    for (let i = 0; i < names.length; i++) {
        initials.push(names[i][0]);
        
    }

    return initials
}


// Invoca la funzione qui e stampa il risultato in console

// const initials = getInitials(names);
console.log(getInitials(names));



//Risultato atteso: ["A", "L", "M", "A", "G", "A"]