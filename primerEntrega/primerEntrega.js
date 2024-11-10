const productos = [
  {
    prod: "Lente colimador",
    precio: 45,
    descripcion: "Lente colimador D30 F100",
  },
  {
    prod: "Lente protector",
    precio: 20,
    descripcion: "Lente protector D30",
  },
  {
    prod: "Nozle 1.5",
    precio: 10,
    descripcion: "Pico de corte Diametro 1.5",
  },
  {
    prod: "Alcohol Isopropilico",
    precio: 10,
    descripcion: "Alcohol Isopropilico 1L",
  },
];

let nombre = prompt("Ingrese su nombre");
let mensaje = `Bienvenido ${nombre}!! \n`;
let carrito = [];
let precioTotal = 0;

const seleccionarProductos = () => {
  let seleccion = prompt(
    "Elija el producto que desea llevar, escriba 'Cancelar' para terminar su pedido"
  ).toLocaleLowerCase();
  for (producto of productos) {
    if (seleccion == producto.prod.toLocaleLowerCase()) {
      carrito.push(producto);
    }
  }
};

const metodosDePago = () => {
  let pago = prompt(
    "Como desea abonarlos? \n Escriba 1: transferencia bancara (cuenta con un 5% de descuento) \n\n 2: tarjeta de debito (cuenta con un 2% de descuento) \n\n 3: tarjeta de credito (hasta 3 cuotas sin interes)"
  );

  switch (pago) {
    case "1":
      precioTotal = precioTotal - precioTotal * 0.05;
      alert(`precio a pagar: ` + precioTotal);
      break;
    case "2":
      precioTotal = precioTotal - precioTotal * 0.02;
      alert("precio a pagar" + precioTotal);
      break;
    case "3":
      precioTotal = precioTotal / 3;
      alert("El valor de las cuotas es de " + precioTotal);
      break;
    default:
      alert("El valor ingresado no es correcto");
      break;
  }
};

const mostrarCarrito = () => {
  let mensajeCarrito = "";

  for (producto of carrito) {
    mensajeCarrito += `Productos seleccionados
    
    Nombre: ${producto.prod}
    Precio $${producto.precio}
    Descripcion: ${producto.descripcion}
    `;
    precioTotal += producto.precio;
  }

  alert(mensajeCarrito + `\n\nEl precio final es de: ${precioTotal}`);
};

const stock = () => {
  for (producto of productos) {
    mensaje += `Estos son los productos que tenemos disponibles


    Nombre: ${producto.prod}
    Precio $${producto.precio}
    Descripcion: ${producto.descripcion}
    `;
  }
  alert(mensaje);
};

stock();

const simulador = () => {
  let confirmar = true;

  while (confirmar == true) {
    seleccionarProductos();
    confirmar = confirm("Desea agregar otro producto?");
  }

  mostrarCarrito();
  metodosDePago();
};

simulador();
