const datosUsuario = [];

let user = () => {
  alert("Usted esta por crear un nuevo usuario");

  class User {
    constructor(usuario, clave, clave2) {
      this.usuario = usuario;
      this.clave = clave;
      this.clave2 = clave2;
    }
  }
  let nuevoUsuario = new User(
    prompt("ingrese su e-mail"),
    prompt("ingrese su password"),
    prompt("ingrese su password nuevamente")
  );

  if (
    nuevoUsuario.usuario.includes("@") &&
    nuevoUsuario.clave == nuevoUsuario.clave2
  ) {
    alert("usuario guardado exitosamente");
    datosUsuario.push(nuevoUsuario);
  } else {
    alert("usuario o verificacion de password incorrectos");
    user();
  }
  if (confirm("Desea crear otro usuario?")) {
    user();
  } else {
    alert("Gracias por crear su usuario");
  }
};

user();

console.log(datosUsuario);
