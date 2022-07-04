console.log("estoy activo");

const usuario1 = JSON.parse(localStorage.getItem("usuarios"));

const iconoLogin = document.querySelectorAll(".registro")[0];
console.log(iconoLogin);

const nuevoIcono = document.createElement("button");
nuevoIcono.className = "login l3";
nuevoIcono.innerHTML = `<i class="fa-solid fa-circle-user ico-login"></i> ${usuario1[0].nombreUsuario}`;
iconoLogin.append(nuevoIcono);
const pU = document.getElementsByClassName("l3")[0];

const icono = document.getElementsByClassName("popUp-usuario")[0];
pU.addEventListener("click", () => {
  icono.classList.toggle("active");
});
// dar funcionalidad al boton de cerra
const cerrar = document.querySelector("#cerrar-sesion");
cerrar.addEventListener("click", () => {
  localStorage.removeItem("usuarios");
  window.location.href = "../index.html";
});

const loguer = JSON.parse(localStorage.getItem("logeados"));

if (loguer.length > 0) {
  const miSesion = document.getElementsByClassName("popUp-usuario")[0];
  console.log(miSesion);
  const a = document.createElement("a");
  a.setAttribute("href", "../html/interfazUsuario.html");
  a.className = "pU";
  a.innerHTML = `
<i class="fa-solid fa-user"></i> Mi sesion`;
  miSesion.append(a);
}
