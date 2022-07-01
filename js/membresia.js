//CREAR CARDS
const productos = document.querySelector(".container");

try {
  fetch("../productos.json")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
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
      const agregarAlCarrito = (e) => {
        const eleccion = e.target.getAttribute("data-id");
        const memb = data.find((membresia) => membresia.titulo == eleccion);
        console.log(memb);
        carrito.push(memb);
        Swal.fire({
          icon: "success",
          title: "Producto agregado al carrito",
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
          },
        });

        localStorage.setItem("carrito", JSON.stringify(carrito));
        setTimeout(() => {
          window.location.href = "../html/carrito.html";
        }, 3000);
      };
      const btnCompra = document.querySelectorAll(".btnCard");
      btnCompra.forEach((btn) => {
        btn.addEventListener("click", agregarAlCarrito);
      });
    });
} catch (error) {
  console.log(error);
}

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
