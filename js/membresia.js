//CREAR CARDS

class Membresias {
  constructor(imagen, titulo, precio, descripcion) {
    this.imagen = imagen;
    this.titulo = titulo;
    this.precio = precio;
    this.descripcion = descripcion;
  }
}
const mensual = new Membresias(
  "../img/mensual.svg",
  "mensual",
  "$10000",
  "membresia valida por 30 dias."
);

const Anual = new Membresias(
  "../img/anual.svg",
  "Anual",
  "$70000",
  "membresia valida por 365 dias."
);

const dePorVida = new Membresias(
  "../img/ps.svg",
  "De por vida ",
  "$150000",
  "membresia valida por siempre."
);

const conjuntoMembresias = [mensual, Anual, dePorVida];

const cardContainer = document.getElementById("cardContainer");

conjuntoMembresias.forEach((membresia) => {
  const card = document.createElement("div");
  card.innerHTML = `
  <div class="box" id="box">
  <div class="imgBx">
  <img src=${membresia.imagen}  alt="credencial" />
  </div>
  <div class="content">
  <h2>${membresia.titulo}</h2>
    <p>${membresia.descripcion}</p>
    <p>${membresia.precio}</p>
    <button  data-id="${membresia.titulo}"class="btnCard">Comprar</button>

</div>
`;
  cardContainer.append(card);
});
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
