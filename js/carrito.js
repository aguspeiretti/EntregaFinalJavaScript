const carr = document.querySelector("#carr");

const vaciarCarrito = (e) => {
  const eleccion = e.target.getAttribute("data-id");
  console.log(eleccion);
  carrito = carrito.filter((membresia) => membresia.titulo != eleccion);
  localStorage.setItem("carrito", JSON.stringify(carrito));
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
        <button data-id="${membresia.titulo}" class="vaciarCarrito"> Eliminar </button>
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
