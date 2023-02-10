let cardContainer=document.getElementById('CardContainer');

rellenarTarjetas()
function rellenarTarjetas() {
    
    let listaEnseñar="";
    let listapedidoLS=localStorage.getItem('pedido');
    //console.log(listapedidoLS);
let listadopedidoJS=JSON.parse(listapedidoLS);
//console.log(listadopedidoJS);

let listaProductoLS=localStorage.getItem('ProductsLS');
//console.log(listaProductoLS);
let listadoProductoJS=JSON.parse(listaProductoLS);
//console.log(listadoProductoJS);
let listaProductosParaEnseñar=[];

listadopedidoJS.forEach(lineaProducto => {
   // console.log(lineaProducto.idProduct, lineaProducto.cantidad)
if(lineaProducto.cantidad>0){//guarda lista para enseñar
    listaProductosParaEnseñar.push(lineaProducto.idProduct);
    listaEnseñar+= `<tr id="Tarjeta${listadoProductoJS[lineaProducto.idProduct].idProd}">
    <td class="d-flex flex-column justify-content-center border " >
      <img src=${listadoProductoJS[lineaProducto.idProduct].foto} class="w-50" alt="${listadoProductoJS[lineaProducto.idProduct].name}"/>
      <p>${listadoProductoJS[lineaProducto.idProduct].name}</p></td>
      <td class="align-middle">
      <input class="border align-middle"  type="number" value=${lineaProducto.cantidad} min="1"/></td>
      <td class="align-middle"><p class="card-text border align-middle">${listadoProductoJS[lineaProducto.idProduct].precio}</p></td>
      <td class="align-middle">
      <a class="btn3 " borra="true">Eliminar</a></td>
      <td class=" align-middle"><p class="card-title  border align-middle">Total ${(listadoProductoJS[lineaProducto.idProduct].precio*lineaProducto.cantidad).toFixed(2)} €</p></td>
      
  </tr>`
};

});
cardContainer.innerHTML=listaEnseñar; //pinta las tarjetas
}

cambiarCantidad();
function cambiarCantidad() {
    cardContainer.addEventListener('change', (eventoCambio)=>{

        let nuevaCAntidad=eventoCambio.target.value;
        let precio=eventoCambio.target.parentElement.parentElement.childNodes[5].childNodes[0].innerText;
        let multiplicacion = (nuevaCAntidad*precio).toFixed(2);
        eventoCambio.target.parentElement.parentElement.childNodes[9].childNodes[0].innerText=`Total ${multiplicacion} €`;
    })
    
}

quitarProducto();
function quitarProducto() {
   
    cardContainer.addEventListener('click', (eventoCambio)=>{
        console.log(eventoCambio.target.attributes[1].value);
         if(eventoCambio.target.attributes[1].value===true){
             eventoCambio.target.parentElement.parentElement.innerHTML="";

         }
    })
    
}