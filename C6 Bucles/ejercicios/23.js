function esNumeroPrimo(numero) {
  // La función recibe un argumento "numero".
  // Determina si este corresponde a un número primo.
  // De ser así, retorna true.
  // De lo contrario, retorna false.
  // IMPORTANTE: Recuerda que un número primo es aquel que
  // solo es divisible por sí mismo y por 1.
  // Tu código:
  if (numero < 2) {return false;} // numero primo debe ser mayor a 1
  for (var i = 2; i < numero ; i++) {
    if (numero % i === 0) {return false;} // si numero es divisible por i, no es primo
  }
  return true; // si no se encontro ningun divisor, numero es primo - por fuera de for

}

module.exports = esNumeroPrimo;
