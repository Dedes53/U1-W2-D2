/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/
let int1 = 2;
let int2 = 3;
let num1;
let num2;

if (int1 > int2) {
  num1 = int1;
  num2 = int2;
} else {
  num1 = int2;
  num2 = int1;
}

const message = `${num1} è maggiore di ${num2}`;
console.log(message);

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/
let num3 = 6;
if (num3 !== 5) {
  console.log("not equal");
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/
let num4 = 10;
if (num4 % 5 === 0) {
  console.log("divisibile per 5");
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/
let num5 = 5;
let num6 = 3;
let bool = num5 === 8 || num6 === 8 || num5 + num6 === 8;
console.log(bool);

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/
let totalShoppingCart = 70;
if (totalShoppingCart < 50) {
  totalShoppingCart += 10;
}
console.log(totalShoppingCart);

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

let sales = 20 / 100;
console.log(sales);

totalShoppingCart -= totalShoppingCart * sales;
console.log(totalShoppingCart);

if (totalShoppingCart < 50) {
  totalShoppingCart += 10;
}
console.log(totalShoppingCart);

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/
let a = 2;
let b = 1;
let c = 3;
let int5;
let int4;
let int3;

if (a > b && b > c) {
  int5 = a;
  int4 = b;
  int3 = c;
  console.log("primo caso");
} else if (a > c && c > b) {
  int5 = a;
  int4 = c;
  int3 = b;
  console.log("secondo caso");
} else if (b > c && c > a) {
  int5 = b;
  int4 = c;
  int3 = a;
  console.log("terzo caso");
} else if (b > a && a > c) {
  int5 = b;
  int4 = a;
  int3 = c;
  console.log("quarto caso");
} else if (c > b && b > a) {
  int5 = c;
  int4 = b;
  int3 = a;
  console.log("quinto caso");
} else if (c > a && a > b) {
  int5 = c;
  int4 = a;
  int3 = b;
  console.log("sesto caso");
}

let message1 = `${int5}, ${int4}, ${int3}`;
console.log(message1);

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/
let val;
if (tipeof(val)===)

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
};

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
