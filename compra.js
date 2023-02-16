let listaCarritoLS=localStorage.getItem('pedido'); //recuperamos el carrito
let listaCarritoJSON=JSON.parse(listaCarritoLS);

let listaProductosLS=localStorage.getItem('ProductsLS'); //recuperamos las Caracteriasticas de los productos
let listaProductosJSON=JSON.parse(listaProductosLS);

let clienteSS= sessionStorage.getItem('cliente'); //recuperamos el carrito
let clienteJSON=JSON.parse(clienteSS);

let cajaDatosCliente=document.getElementById('DatosCliente'); //RELLENA DATOS DEL CLIENTE

let cajaPago=document.getElementById('Pago');
let cajaRevisaProd=document.getElementById('RevisaProd');
let totalFacturaHTML=document.getElementById('totalFactura');
let baseImponibleHTML=document.getElementById('BaseImponible')
let ivaHTML=document.getElementById('IVA')

let listaEnseñar="";
var total=0.0;

 let etiquetaCliente=`<div>
                 <h3>${clienteJSON.name}</h3>
                 <p>Dirección: ${clienteJSON.street} ${clienteJSON.portal}, ${clienteJSON.CP}  ${clienteJSON.city}</p>
                 <p>Email: ${clienteJSON.email}</p>
                 <p>Teléfono: ${clienteJSON.phone}</p>
             </div>`;

// etiquetaCliente="Hola " + clienteJSON.name+ " Bienvenido";
// etiquetaCliente=`Hola ${clienteJSON.name} Bienvenido`;
           cajaDatosCliente.innerHTML=etiquetaCliente; //FIN RELLENA DATOS DEL CLIENTE



listaCarritoJSON.forEach(lineaProducto => { //RELLENA ETIQUETAS DE PRODUCTO
    // console.log(lineaProducto.idProduct, lineaProducto.cantidad)
     if(lineaProducto.cantidad>0){//guarda lista para enseñar
        
     
         listaEnseñar+= `<div class="row align-content-center align-items-center border">
                            <div class="col-sm-3 ">
                                <img class="border-0"src=${listaProductosJSON[lineaProducto.idProduct].foto} alt="${listaProductosJSON[lineaProducto.idProduct].name}" class="img-thumbnail">
                                <p >${listaProductosJSON[lineaProducto.idProduct].name}</p>
                            </div>
                            <div class="col-sm-3 ">${lineaProducto.cantidad} Uds</div> 
                            <div class="col-sm-3 "> ${listaProductosJSON[lineaProducto.idProduct].precio} €</div>
                            <div class="col-sm-3 ">Total ${(listaProductosJSON[lineaProducto.idProduct].precio*lineaProducto.cantidad).toFixed(2)} €</div>
                        </div>`
     };

 });
 cajaRevisaProd.innerHTML+=listaEnseñar; //FIN RELLENA ETIQUETAS DE PRODUCTO
 calculaFactura();

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
    // console.log(totalFactura);

    listadopedidoJS.forEach(lineaProducto => {
        totalFactura+= (lineaProducto.cantidad)*(listadoProductoJS[lineaProducto.idProduct].precio);
        // console.log(lineaProducto.cantidad);
        // console.log(listadoProductoJS[lineaProducto.idProduct].precio);
        // console.log(totalFactura);
    });
    totalFacturaHTML.innerText= `TOTAL FACTURA ${totalFactura.toFixed(2)} €`;
    baseImponibleHTML.innerText=`BASE IMPONIBLE : ${(totalFactura*(1-0.21)).toFixed(2)} €`;
    ivaHTML.innerText=`IVA 21%: ${(totalFactura*0.21).toFixed(2)} €`; 
};