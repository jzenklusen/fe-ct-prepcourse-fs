function pasarUsuarioAPremium(objetoMuchosUsuarios) {
  // El parámetro "objetoMuchosUsuarios" es un arreglo de objetos (usuarios).
  // Cada usuario tiene una propiedad llamada "esPremium".
  // Define esta propiedad de todos los usuarios como true.
  // Retornar el arreglo.
  // Tu código:

  // objetoMuchosUsuarios.forEach(function(usuario) {usuario.esPreimum = true;});

  // return objetoMuchosUsuarios;

  // objetosMuchosUsuarios.forEach(function(usuario) {
  //   usuario.esPreimum = true;
  //    } ) ; 
  //   return objetoMuchosUsuarios;

  for (let i=0 ; i < objetoMuchosUsuarios.length ; i++) {
    let usuarioActual = objetoMuchosUsuarios[i]
    usuarioActual.esPremium = true;
  }

  return objetoMuchosUsuarios;
  
  


}

module.exports = pasarUsuarioAPremium;
