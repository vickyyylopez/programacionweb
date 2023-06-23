let CARRITO = [];
let total = 0;

function sumar(precio, producto) {
  CARRITO.push(producto);
  document.getElementById("cantidad").innerHTML = "Cantidad de productos: " + CARRITO.length;
  total += precio;
  document.getElementById("total").innerHTML = "TOTAL: $" + total;
  alert ("Se ha añadido un producto a tu carrito")
}

function vaciarCarrito() {
  CARRITO = [];
  total = 0;
  document.getElementById("cantidad").innerHTML = "Cantidad de productos: " + 0;
  document.getElementById("total").innerHTML = "TOTAL: $" + total;
}

function comprar() {
  vaciarCarrito();
  alert("La compra se ha realizado con éxito");
}

const myModal = document.getElementById('myModal');
const myInput = document.getElementById('myInput');

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus();
});


