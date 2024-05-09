function multiplicarElementosPorIndice(array) {
  // Multiplica cada elemento del array por su índice.
  // Devuelve el nuevo arreglo con los resultados.
  // Tu código:
  let new_array = array.map( (elemento, indice) => (elemento * indice));
  return new_array;
}

module.exports = multiplicarElementosPorIndice;
