// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

// Reminder = una parola è palindroma quando letta al contrario rimane uguale

// Definiamo un prompt per chiedere all’utente di inserire una parola

let user_word = prompt("Inserisci una parola");

// Con if/else stabilisco se la parola inserita dall'utente è palindroma

if (palindrome_word(user_word)) {
  console.log(`${user_word} è una parola palindroma`);
  alert(`${user_word} è una parola palindroma`);
} else {
  console.log(`${user_word} non è una parola palindroma`);
  alert(`${user_word} non è una parola palindroma`);
}

// Creo la funzione per definire se la parola è palindroma

function palindrome_word(user_word) {
  
  let inizio = 0;
  let fine = user_word.length - 1;

  for (let i = 0; i < Math.floor(user_word.length); i++) {
    if (user_word[inizio] !== user_word[fine]) {
      return false;
    }
  }
  
  return true;
}
