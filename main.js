// Chiedere all'utente quanti km vuole percorrere
const userRandomOne = prompt(" Quanti km vuoi percorrere? ");


// Chiedere all'utente l'età

const userRandomTwo = prompt(" Quanti anni hai?");


var prezzoBiglietto = 0.21 * userRandomOne
var sconto = 0

if (userRandomTwo < 18) {
    sconto = (prezzoBiglietto / 100) * 20;

} else if (userRandomTwo > 65) {
    sconto = (prezzoBiglietto / 100) * 40;

}
var prezzoScontato = prezzoBiglietto - sconto;

prezzoScontato = prezzoScontato.toFixed(2);
console.log(prezzoScontato);

document.getElementById('prezzoBiglietto').innerHTML = 0.21 * userRandomOne;






