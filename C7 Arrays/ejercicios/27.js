function dePalabrasAFrase(palabras) {
  // El argumento "palabras" es un arreglo de strings.
  // Retorna un string donde todas las palabras estén concatenadas,
  // con un espacio entre cada palabra.
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
  // Tu código:

  let print = "";

  for (let i = 0; i < palabras.length ; i++) {
    if (i === 0) {print = palabras[i];}
    else {print = print + " " + palabras[i];}
    
  }

  return print;
  }

module.exports = dePalabrasAFrase;
