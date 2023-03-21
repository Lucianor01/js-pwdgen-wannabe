/*  Chiedi all’utente il suo nome,
    poi chiedi il suo cognome,
    poi chiedi il suo colore preferito
    Infine scrivi sulla pagina nomecognomecolorepreferito21 
*/

const nome = prompt("Come ti chiami?");

const cognome = prompt("Qual è il tuo cognome?");

const colorePreferito = prompt("Qual è il tuo colore preferito?");

const numero = 21;

let passwordGenerator = nome + cognome + colorePreferito + numero;

console.log(passwordGenerator);

document.getElementById(`password`).innerHTML = `<p>Ciao la tua password è:</p> <h2>${nome}${cognome}${colorePreferito}${numero}</h2>`