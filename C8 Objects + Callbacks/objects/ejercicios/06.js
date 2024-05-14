const contarPropiedades = (objeto) => {
  // Cuenta y retorna el total de propiedades que tiene el objeto.
  // PISTA: Puedes iterarlo usando el bucle for-in.
  // Tu código:

  let contador =0;
  for (let propiedad in objeto) {
    if (objeto.hasOwnProperty( propiedad)) {contador = contador + 1;}
  }
  return contador;
};

// objeto.hasOwnProperty(propiedad) se usa para asegurar que solo cuentes las propiedades propias del 
// objeto y no las heredadas a través de la cadena de prototipos. 
// Esto es especialmente útil si el objeto podría haber heredado propiedades que no quieres contar.

module.exports = contarPropiedades;
