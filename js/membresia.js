//CREAR CARDS
const productos = document.querySelector(".container");

try {
  fetch("../productos.json")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      data.forEach((membresia) => {
        const { titulo, precio, descripcion, imagen } = membresia;
        const card = document.createElement("div");
        card.innerHTML = `
        <div class="box" id="box">
        <div class="imgBx">
        <img src=${imagen}  alt="credencial" />
        </div>
        <div class="content">
        <h2>${titulo}</h2>
          <p>${precio}</p>
          <p>${descripcion}</p>
          <button  data-id="${titulo}"class="btnCard">Comprar</button>
  
      </div>
      `;
        productos.append(card);
      });
    });
} catch (error) {
  console.log(error);
}
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
        <h2>${membresia.titulo}</h2>
        <p>${membresia.descripcion}</p>
        <p>${membresia.precio}</p>
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

const agregarAlCarrito = (e) => {
  const eleccion = e.target.getAttribute("data-id");
  console.log(eleccion);

  const memb = conjuntoMembresias.find(
    (membresia) => membresia.titulo == eleccion
  );
  carrito.push(memb);
  mostrarCarrito();
  localStorage.setItem("carrito", JSON.stringify(carrito));
};
const btnCompra = document.querySelectorAll(".btnCard");

btnCompra.forEach((btn) => {
  btn.addEventListener("click", agregarAlCarrito);
});

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
mostrarCarrito();
