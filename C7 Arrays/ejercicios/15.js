function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // Tu código:

  // numero maximo array
   if (array.lenght === 0) {return 0;}
   let max = array[0];
   let indice_max = 0;
   for (let i = 1; i < array.length ; i++) {
      if (array[i] > max) {
        max = array[i];
        indice_max = i;
      }


    }

   return indice_max;

}

module.exports = encontrarIndiceMayor;
