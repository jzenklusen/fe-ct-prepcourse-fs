const obtenerValorPropiedad = (objeto, propiedad) => {
   // Recibe un objeto y el nombre de una propiedad.
   // Devuelve el valor de esta propiedad.
   // Tu código:

   // verificacion si objeto es nulo o undefined
   if (!objeto) {return undefined;}

   // verificar si la propiedad existe en el objeto y no es null
   if ( objeto.hasOwnProperty(propiedad) && objeto[propiedad]  !== null ) {
      //si la propiedad existe y no es null retorna el valor
      const a = objeto[propiedad];
      return a;
   }

   // si la propiedad no existe o es null, retorna undefined
   return undefined;
   
   
};

module.exports = obtenerValorPropiedad;
