function esPotenciaDeDos(numero) {
  // La función recibe un "numero" por argumento.
  // Determina si es una potencia de 2.
  // Devuelve true si lo es, sino devuelve false.
  // PISTA: Utiliza un bucle while.
  // Tu código:
  if (numero <= 0) {return false;} // numeros negativos y ceros no pueden ser potencia de 2
  while (numero > 1) {
    if (numero % 2 !== 0) {return false;} // si n no es divisible por 2, no es potencia de 2
    numero /= 2; // divide n en 2
  }
  return true; // if la division llega hasta 1 - n era potencia de 2.

}

module.exports = esPotenciaDeDos;
