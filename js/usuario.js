// CREAR USUARIO

class Usuarios {
  constructor(nombre, apellido, clave, clave2) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.clave = clave;
    this.clave2 = clave2;
  }
}
const baseUsuarios = [];

const crearUsuario = (e) => {
  e.preventDefault();

  const usuario = new Usuarios(
    document.getElementById("nombre").value,
    document.getElementById("apellido").value,
    document.getElementById("clave").value,
    document.getElementById("clave2").value
  );

  if (
    usuario.clave.length >= 8 &&
    usuario.clave2.length >= 8 &&
    usuario.clave === usuario.clave2
  ) {
    alert("usuario registrado");
    baseUsuarios.push(usuario);
  } else {
    alert("error en el registro de usuario o password intenta nuevamente");
  }

  console.log(baseUsuarios);
};

const botonRegistro = document.querySelector("#btn");
botonRegistro.addEventListener("click", crearUsuario);
