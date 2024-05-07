function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:
  let producto = 1; //empezar en 1
  let maximo = Math.max(a,b); // conseguir max
  let minimo = Math.min(a,b); // conseguir minimo

  for (let i = minimo ; i <= maximo ; i++) {
    producto *= i;
  }
  return producto === -0 ? 0 : producto;
  // es un uso del operador ternario, que es una forma corta de escribir una estructura if-else
  // Esta línea específicamente está comprobando si el valor de producto es igual a -0. 
  // Si es así, la función devuelve 0. Si no, devuelve el valor de producto.

}

module.exports = productoEntreNúmeros;