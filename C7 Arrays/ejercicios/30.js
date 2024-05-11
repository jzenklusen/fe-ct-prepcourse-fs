function encontrarElementoRepetido(numeros) {
  // La función recibe un argumento "numeros" que es un array de números.
  // Retorna el primer elemento repetido que se encuentre en el array.
  // Tu código:

  if (numeros.length < 0) {return null;}
  numeros.sort((a,b) => a-b);
  for (let i=0 ; i < numeros.length - 1; i++) {
    if (numeros [i + 1] - numeros[i] === 0) {return numeros[i]}
  }
}

module.exports = encontrarElementoRepetido;