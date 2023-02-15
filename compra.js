let listaCarritoLS=localStorage.getItem('pedido'); //recuperamos el carrito
let listaCarritoJSON=JSON.parse(listaCarritoLS);

let listaProductosLS=localStorage.getItem('ProductsLS'); //recuperamos las Caracteriasticas de los productos
let listaProductosJSON=JSON.parse(listaProductosLS);

let clienteSS= sessionStorage.getItem('cliente'); //recuperamos el carrito
let clienteJSON=JSON.parse(clienteSS);

// console.log(listaCarritoJSON);
// console.log(listaProductosJSON);
// console.log(clienteJSON);

let cajaDatosCliente=document.getElementById('DatosCliente');
let cajaPago=document.getElementById('Pago');
let cajaRevisaProd=document.getElementById('RevisaProd');

//  console.log(cajaDatosCliente);
//  console.log(cajaPago);
//  console.log(cajaRevisaProd);

