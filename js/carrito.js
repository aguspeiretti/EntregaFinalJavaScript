const carr = document.querySelector("#carr");

const vaciarCarrito = () => {
  if (localStorage.getItem("carrito")) {
    localStorage.removeItem("carrito");
  }
  carrito = [];
  mostrarCarrito();
};

const mostrarCarrito = () => {
  carr.innerHTML = "";
  carrito.forEach((membresia) => {
    const carring = document.createElement("div");
    carring.className = "carring";
    carring.innerHTML = `
        <img src=${membresia.imagen} alt="" />
        <div class="carring-info">
        <h2>${membresia.titulo}</h2>
        <p>${membresia.descripcion}</p>
        <p>${membresia.precio}</p>
        </div>
        <button class="vaciarCarrito"> Eliminar </button>

        `;
    carr.append(carring);
  });
  if (carrito.length > 0) {
    const eliminarCarrito = document.querySelectorAll(".vaciarCarrito");
    eliminarCarrito.forEach((button) => {
      button.addEventListener("click", vaciarCarrito);
    });
  }
};

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
mostrarCarrito();

document.querySelector("#finalizarBtn").addEventListener("click", () => {
  window.location.href = "../html/pago.html";
});
