function combine(str1, str2, str3) {
  // Esta función debe combinar de forma alternada cada caracter de cada string.
  // La función recibe 3 argumentos. Solo debe contabilizar aquellos que NO esten vacíos.
  // Los strings pueden tener cualquier tamaño.
  // EJEMPLOS
  // combine("abc", "", "123") == "a1b2c3"
  // combine("abc", "12345", "") == "a1b2c345"
  // combine("abc", "12345", "67") == "a16b27c345"
  // Tu código:

  let arr1 = str1.split('');
  let arr2 = str2.split('');
  let arr3 = str3.split('');
  let maxElementos = Math.max(arr1.length, arr2.length, arr3.length);
  let combinacion = '';

  for (let i = 0; i < maxElementos; i++) {
    combinacion += (arr1[i] || "") + (arr2[i] || "") + (arr3[i] || "");
  }

  return combinacion;



}

module.exports = combine;