let numeri = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < numeri.length; i++) {
  let numero = numeri[i];
  let testo = document.createTextNode(numero);

  if (numero % 2 === 0) {
    let elementoVerde = document.getElementById("verde");
    elementoVerde.appendChild(testo);
  } else {
    let elementoRosso = document.getElementById("rosso");
    elementoRosso.appendChild(testo);
  }
}
