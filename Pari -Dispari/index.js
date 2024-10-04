// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri e stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// Chiedi alll'utente di scegliere un numero compreso tra 1 e 5
let user_num = parseInt(prompt("Inserisci un numero tra 1 e 5"));

// il computer sceglie un numero casuale tra 1 e 5
let pc_num = random_number(1, 5);

// inizializziamo la sommare tra i 2 numeri utente e computer
let sum = user_num + pc_num;

// calcolo funzione
let result = pari_dispari(sum);

// stabilire vincitore con if/else
if ((user_num % 2 === 0 && result === "pari") || (user_num % 2 !== 0 && result === "dispari")) {
  console.log("Hai vinto!");
  alert("Hai vinto!");
}
else {
  console.log("Il computer ha vinto!");
  alert("Il computer ha vinto!");
}

// funzione per generare un numero random
function random_number(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// funzione per verificare se un numero è pari o dispari
function pari_dispari(numero) {
  if (numero % 2 === 0) {
    return "pari";
  }
  else {
    return "dispari";
  }
}
