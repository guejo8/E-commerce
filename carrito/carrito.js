let cardContainer=document.getElementById('CardContainer');
let totalFacturaHTML=document.getElementById('totalFactura');
let botonPaga=document.getElementById('logueaopaga');

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
    
    listaEnseñar+= `<div producto=${listadoProductoJS[lineaProducto.idProduct].idProd} class="row align-content-center align-items-center border">

    <div class="col-3 .d-flex.justify-content-center.align-items-center" >
        <img class="border-0 w-50"  src=${listadoProductoJS[lineaProducto.idProduct].foto} alt="${listadoProductoJS[lineaProducto.idProduct].name}"/>
        <p >${listadoProductoJS[lineaProducto.idProduct].name}</p>
    </div>
    <div class=" col-2 align-middle">
        <input class="w-50"  type="number" value=${lineaProducto.cantidad} min="1"/>
    </div>
      <div class="col-2 align-middle"><p class="card-text ">${listadoProductoJS[lineaProducto.idProduct].precio}</p></div>
      <div class="col-2 align-middle"><a class="btn3" borra="divue">Eliminar</a></div>
      <div class=" col-3 align-middle"><p class="card-title"> ${(listadoProductoJS[lineaProducto.idProduct].precio*lineaProducto.cantidad).toFixed(2)} €</p></div>
      
  </div>`
};

});
cardContainer.innerHTML=listaEnseñar; //pinta las tarjetas
calculaFactura()
}

cambiarCantidad();
function cambiarCantidad() {
    cardContainer.addEventListener('change', (eventoCambio)=>{

        let nuevaCAntidad=eventoCambio.target.value;
        let precio=eventoCambio.target.parentElement.parentElement.childNodes[5].childNodes[0].innerText;
        let multiplicacion = (nuevaCAntidad*precio).toFixed(2);
        posicion=eventoCambio.target.parentElement.parentElement.atdivibutes[0].value
        console.log(posicion);
        eventoCambio.target.parentElement.parentElement.childNodes[9].childNodes[0].innerText=` ${multiplicacion} €`;
         listaProducto= localStorage.getItem('pedido');
              lista_json=JSON.parse(listaProducto);
               console.log(lista_json[posicion]);
              lista_json[posicion].cantidad= nuevaCAntidad;
               console.log(lista_json[posicion]);
              lista_json.splice(posicion,1,lista_json[posicion])
              listaCarrols=JSON.stringify(lista_json)
              localStorage.setItem("pedido",listaCarrols)
              calculaFactura()
    })
}

quitarProducto();
function quitarProducto() {
   
    cardContainer.addEventListener('click', (eventoCambio)=>{
        // console.log(eventoCambio.target.atdivibutes[1]);
         if(eventoCambio.target.atdivibutes.borra.value){
            // console.log(eventoCambio.target.parentElement.parentElement.atdivibutes[0].value);
            posicion=eventoCambio.target.parentElement.parentElement.atdivibutes[0].value
             eventoCambio.target.parentElement.parentElement.innerHTML="";
             listaProducto= localStorage.getItem('pedido');
             lista_json=JSON.parse(listaProducto);
            //  console.log(lista_json[posicion]);
             lista_json[posicion].cantidad= 0;
            //  console.log(lista_json[posicion]);
             lista_json.splice(posicion,1,lista_json[posicion])
             listaCarrols=JSON.stringify(lista_json)
             localStorage.setItem("pedido",listaCarrols)
         }
         calculaFactura()
    })
    
}

function calculaFactura() {  
    let listapedidoLS=localStorage.getItem('pedido');
    //console.log(listapedidoLS);
    let listadopedidoJS=JSON.parse(listapedidoLS);
    //console.log(listadopedidoJS);

    let listaProductoLS=localStorage.getItem('ProductsLS');
    //console.log(listaProductoLS);
    let listadoProductoJS=JSON.parse(listaProductoLS);
    //console.log(listadoProductoJS);
    let totalFactura=0;
    console.log(totalFactura);

    listadopedidoJS.forEach(lineaProducto => {
        totalFactura+= (lineaProducto.cantidad)*(listadoProductoJS[lineaProducto.idProduct].precio);
        console.log(lineaProducto.cantidad);
        console.log(listadoProductoJS[lineaProducto.idProduct].precio);
        console.log(totalFactura);
    });
    totalFacturaHTML.innerText= `${totalFactura.toFixed(2)} €`;
 
};

botonPaga.addEventListener('click', ()=>{
 let cliente= JSON.stringify(sessionStorage.getItem('cliente'));
 if (cliente==='null'){

    window.location.href= "../Loginregisdivo.html" 
}else{
    
    window.location.href= "../compra.html" 
}
});


//POP UP FUNCIONALIDAD

var my_modal = document.getElementById("my_popup")


function showModal(){
    my_modal.style.display = "block";
}

setTimeout(showModal, 3000)

function closeModal(){
    my_modal.style.display = "none";
}

setTimeout(closeModal, 13000)

