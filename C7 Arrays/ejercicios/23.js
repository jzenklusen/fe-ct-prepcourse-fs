function breakStatement(num) {
  // Iterar en un bucle aumentando en 2 el número num recibido hasta un límite de 10 veces.
  // Guardar cada nuevo valor en un arreglo y retórnarlo.
  // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, 
  // debe interrumpirse la ejecución y retornar el string: "Se interrumpió la ejecución".
  // // Tu código:

  // let array = [];

  // for (let i = 0 ; i < 10 ; i++) {
  //   num += 2;
  //   if (num === i) {return "Se interrumpió la ejecución"}
  //   array.push(num);
    
  // }
  // return array;

  let array = [];

    for (let i = 1 ; i <= 10 ; i++) {
      num_to_add = num + (i*2);
      if (num_to_add === i) {return "Se interrumpió la ejecución"}
      array.push(num_to_add);
      
    }
  return array;



}

module.exports = breakStatement;


// num = 3 // 3
// i = 0  = 1 = 2 --- ntoadd 3 = 5 7


