// Example array of numbers
let numeri = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Loop through the array of numbers
for (let i = 0; i < numeri.length; i++) {
  let numero = numeri[i];
  let testo = document.createTextNode(numero);

  // Check if the number is odd or even
  if (numero % 2 === 0) {
    // Even number: append the text to the green div
    let elementoVerde = document.getElementById("verde");
    elementoVerde.appendChild(testo);
  } else {
    // Odd number: append the text to the red div
    let elementoRosso = document.getElementById("rosso");
    elementoRosso.appendChild(testo);
  }
}
