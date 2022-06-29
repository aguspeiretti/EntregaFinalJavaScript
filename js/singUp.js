// CREAR USUARIO

class Usuarios {
  constructor(nombre, apellido, nombreUsuario, clave, clave2) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.nombreUsuario = nombreUsuario;
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
    document.getElementById("nombreUsuario").value,
    document.getElementById("clave").value,
    document.getElementById("clave2").value
  );

  if (
    usuario.clave.length >= 8 &&
    usuario.clave2.length >= 8 &&
    usuario.clave === usuario.clave2
  ) {
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Usuario creado correctamente",
      showConfirmButton: false,
      timer: 1500,
    });
    baseUsuarios.push(usuario);
    localStorage.setItem("usuarios", JSON.stringify(baseUsuarios));
  } else {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "error en el registro de usuario o password intenta nuevamente",
      footer: '<a href="">Que puede estar pasando?</a>',
    });
  }

  console.log(baseUsuarios);
};

const botonRegistro = document.querySelector("#btn");
botonRegistro.addEventListener("click", crearUsuario);
