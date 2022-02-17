function suma(numero1, numero2) {
  return (numero1 + numero2);
}

function calcular(numero1, numero2, callback) {
  return callback(numero1, numero2);
}

console.log(calcular(2, 3, suma));