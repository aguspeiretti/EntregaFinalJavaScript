// Traer el usuario del localStorage
const usuario = JSON.parse(localStorage.getItem("usuarios"));
console.log(usuario);

// crear saludo

const saludo = document.querySelector("#saludo");
const iconoLogin = document.querySelector("#registro");
console.log(iconoLogin);
const saludar = document.createElement("div");
saludar.className = "saludar";
saludar.innerHTML = `<h2 class="hola"> Hola ${usuario[0].nombreUsuario} bienvenido a tu sesión </h2>`;
saludo.append(saludar);

// crear pop up usuario

const nuevoIcono = document.createElement("button");
nuevoIcono.className = "login l3";
nuevoIcono.innerHTML = `<i class="fa-solid fa-circle-user ico-login"></i> ${usuario[0].nombreUsuario}`;
iconoLogin.append(nuevoIcono);
const pU = document.getElementsByClassName("l3")[0];
console.log(pU);
const icono = document.getElementsByClassName("popUp-usuario")[0];
console.log(icono);
pU.addEventListener("click", () => {
  icono.classList.toggle("active");
});

// dar funcionalidad al boton de cerrar

const cerrar = document.querySelector("#cerrar-sesion");
cerrar.addEventListener("click", () => {
  localStorage.removeItem("usuarios");
  window.location.href = "../index.html";
});
