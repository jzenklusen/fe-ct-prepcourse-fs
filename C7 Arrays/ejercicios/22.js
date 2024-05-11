function tablaDelSeis() {
  // Devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
  // Desde 0 al 60.
  // Tu código:

  let array = [];
  for (let i=0; i <= 10 ; i++)
  {
    let value_to_add = 6 * i;
    array.push(value_to_add);
  }
  return array;
}

module.exports = tablaDelSeis;
