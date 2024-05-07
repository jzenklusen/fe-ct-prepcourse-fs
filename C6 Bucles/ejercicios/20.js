function sumarHastaNConBreak(n) {
   // La función recibe un numero n por argumento.
   // Devuelve la suma de todos los números desde 1 hasta n.
   // Si la suma supera a 100, detén el bucle usando break.
   // Tu código:
   let resultado = 0;
   for (let i = 1; i <= n ; i++) {
      resultado += i ;
      if (resultado > 100) {break;}
      // else {suma += i;}
   }
   return resultado;
}

module.exports = sumarHastaNConBreak;
