// Traer el usuario del localStorage
const usuario = JSON.parse(localStorage.getItem("usuarios"));

// crear saludo

const saludo = document.querySelector("#saludo");

const saludar = document.createElement("div");
saludar.className = "saludar";
saludar.innerHTML = `<h2 class="hola"> Hola ${usuario[0].nombreUsuario} bienvenido a tu sesión </h2>`;
saludo.append(saludar);
// crear pop up usuario

const iconoLogin = document.querySelectorAll(".registro")[0];
console.log(iconoLogin);

const nuevoIcono = document.createElement("button");
nuevoIcono.className = "login l3";
nuevoIcono.innerHTML = `<i class="fa-solid fa-circle-user ico-login"></i> ${usuario[0].nombreUsuario}`;
iconoLogin.append(nuevoIcono);
const pU = document.getElementsByClassName("l3")[0];

const icono = document.getElementsByClassName("popUp-usuario")[0];

pU.addEventListener("click", () => {
  icono.classList.toggle("active");
});

// dar funcionalidad al boton de cerrar

const cerrar = document.querySelector("#cerrar-sesion");
cerrar.addEventListener("click", () => {
  localStorage.removeItem("usuarios");
  localStorage.removeItem("logeados");
  window.location.href = "../index.html";
});

// traer el logueado del localStorage

const logeados = JSON.parse(localStorage.getItem("logeados"));
