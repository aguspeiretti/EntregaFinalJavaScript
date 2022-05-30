// ELECCION DE MEMBRESIAS //

class Membresias {
  constructor(nombre, tiempo, descripcion, costo) {
    this.nombre = nombre;
    this.tiempo = tiempo;
    this.descripcion = descripcion;
    this.costo = costo;
  }
}
const membresiaMensual = new Membresias("Mensual", "1 mes", " 30 dias", 10000);
const membresiaAnual = new Membresias("Anual", "12 mes", " 365 dias", 70000);
const membresiaDePorVida = new Membresias(
  "Para siempre!",
  "ilimitado",
  " de por vida",
  150000
);

const informacion = (membresia) => {
  alert(
    "elegiste el plan: " +
      membresia.nombre +
      "\n" +
      " tiene un tiempo de duracion de: " +
      membresia.tiempo +
      "\n" +
      " con una validez de: " +
      membresia.descripcion +
      "\n" +
      " y un costo de: " +
      membresia.costo
  );
};
const carrito = [];

const elegirPlan = () => {
  const planElegido = prompt(
    "Elija el numero del plan que mas se adapte a sus necesidades" +
      "\n1. Mensual" +
      "\n2. Anual" +
      "\n3. De por vida"
  );

  switch (planElegido) {
    case "1":
      informacion(membresiaMensual);
      carrito.push(membresiaMensual);
      break;
    case "2":
      informacion(membresiaAnual);
      carrito.push(membresiaAnual);

      break;
    case "3":
      informacion(membresiaDePorVida);
      carrito.push(membresiaDePorVida);

      break;
    default:
      alert("no es un numero valido intente nuevamente");
      elegirPlan();
      break;
  }

  if (confirm("esta decidido por este plan?")) {
    alert("tu sub total es de : " + carrito[0].costo);
  } else {
    alert("no hay problema elija otro plan.");
    carrito.pop();
    elegirPlan();
  }
};

elegirPlan();

let adicional = (carrito[0].costo * 10) / 100;

const cuotas = Number(
  prompt(
    "Elija la cantidad de cuotas:" +
      "\n" +
      "1 pago sin interes" +
      "\n" +
      "3 pago con 10% interes"
  )
);

switch (cuotas) {
  case 1:
    alert(
      "elegiste 1 cuota sin interes no se agregaran recargos a tu compra el total de tu compra es de: " +
        carrito[0].costo
    );
    alert("el costo total de tu membresia es de: " + carrito[0].costo);

    break;
  case 3:
    alert(
      "elegiste 3 cuotas tienen un recargo del 10% el total de tu recargo es de: " +
        adicional
    );
    alert(
      "el costo total de tu membresia es de: " + (carrito[0].costo + adicional)
    );

    break;

  default:
    alert("esa opcion no esta disponible");
    break;
}

// SING UP //

// AGREGAR USUARIOS  Y CONTRASENAS//

//BUSCAR USUARIOS //

//BUSCAR CONTRASENAS//
