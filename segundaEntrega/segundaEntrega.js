const productName = document.getElementsByClassName("product");
const productCant = document.getElementsByClassName("cantIngresada");
const description = document.getElementsByClassName("description");

let arrayProduct = [];
let product = {
  producto: productName[0].value,
  stock: parseInt(productCant[0].value),
  descripcion: description[0].value,
};

const cargarProducto = () => {
  if (arrayProduct.length === 0) {
    arrayProduct.push(product);
  } else {
    for (let i = 0; arrayProduct.length > i; i++) {
      if (i.producto === product.producto) {
        i.stock += product.productCant;
      } else {
        arrayProduct.push(product);
      }
    }
  }
  console.log(arrayProduct);
};

console.log(arrayProduct);
