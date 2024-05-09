function convertirStringAMayusculas(array) {
  // Convierte a mayúsculas todos los strings del array.
  // Retorna el arreglo resultante.
  // Tu código:
  return array.map(element => typeof element === 'string' ? element.toUpperCase() : element);
}

module.exports = convertirStringAMayusculas;
