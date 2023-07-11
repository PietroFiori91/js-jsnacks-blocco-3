let array = [];
let sumElements = 0;

while (sumElements < 50) {
  let numero = parseInt(prompt("Inserisci un numero:"));
  array.push(numero);
  sumElements += numero;
}

console.log("La somma degli elementi è maggiore o uguale a 50");
console.log(array);
