function obtenerElementoAleatorio(array) {

   // Devuelve un elemento aleatorio del arreglo array.
   // PISTA: Usa el método Math.random().
   // Tu código:
   
   // numero maximo array
   // let max = array[0];
   // for (let i = 1; i < array.length ; i++) {
   //    if (array[i] > max) {max = numbers [i];}
   // }

   return array[Math.floor(Math.random() * array.length)];


}

module.exports = obtenerElementoAleatorio;
