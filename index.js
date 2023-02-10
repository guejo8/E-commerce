//Escribir la fecha en #date
let cajaFecha=document.getElementById("date");
let fechaHoy= new Date();
console.log(fechaHoy);
cajaFecha.innerText=`Hoy es: ${fechaHoy.toLocaleDateString('es-ES')}`;

//poner tarjetas
let cardContainer=document.getElementById('CardContainer');
let selectCategory=document.getElementById('categorySelect');
let changeCategory=selectCategory.addEventListener('change', ()=> {
    changeCardContainer(selectCategory.value);
});
changeCardContainer("all");
function changeCardContainer (seleccionCategoria) { //cambiamos la selección de categorias
    
    cardContainer.innerHTML=""; //borra las tarjetas
    let lsProducts = localStorage.getItem("ProductsLS");//recupera de LS la lista de productos
    let productsArray= JSON.parse(lsProducts); //lo convierte en un array de objetoJS
    /* console.log(productsArray); */
    let listaEnseñar="";
    productsArray.forEach((productObjet) => {
        if (seleccionCategoria==productObjet.idCategoria||seleccionCategoria=="all") { //si coincide catSeleccionada y cat del producto, lo escribe
    listaEnseñar+=`<div class="col-sm-6 col-md-3 mb-3 mb-sm-0"> <!-- Tarjeta -->
                     <div class="card m-md-2 m-sm-1">
                     <a href="#" producto=${productObjet.idProd}><img src=${productObjet.foto} class="card-img-top" alt=${productObjet.name} producto=${productObjet.idProd}></a>
                          <div class="card-body">
                            <h5 class="card-title">${productObjet.name}</h5>
                            <p class="card-text">${productObjet.precio} €</p>
                            <p class="cantidad">Cantidad &nbsp;&nbsp;<input id="cantidad${productObjet.idProd}" style="width:3rem" type="number" value="1" min="1"/></p>                   
                            <p href="#" class="btn3" producto=${productObjet.idProd} data-bs-toggle="modal" data-bs-target="#miModal">Añadir al carrito</p>
                      </div>
                  </div>
              </div>`;
            
        }
        cardContainer.innerHTML=listaEnseñar; //pinta las tarjetas


    });
};

//crear carrito
let listCarrito=[]
let listaProducto= localStorage.getItem('ProductsLS')
let lista_json=JSON.parse(listaProducto)
//console.log(lista_json);
lista_json.forEach(producto => {
    //console.log(producto);
    let linea_pedido={idProduct:producto.idProd,cantidad:0}
    listCarrito.push(linea_pedido)
});
//console.log(listCarrito);
let listaCarrols=JSON.stringify(listCarrito)
localStorage.setItem("pedido",listaCarrols)

//Consguir producto - id
//  let cogerProducto = []
//  lista_json.forEach(producto => {
//      let linea_producto={idProduct:producto.idProd}
//      cogerProducto.push(linea_producto)
//  })

//  let productoObjeto = JSON.stringify(cogerProducto)
//  localStorage.setItem("producto", productoObjeto)

//modificar

 let cajaClick = document.getElementById('CardContainer');
//  let palasaca = cajaClick.addEventListener('click', (eventoClick)=> {
//     let linea_pedido={idProduct:0,cantidad:0};
//     linea_pedido.idProduct=eventoClick.target.attributes.producto.value;
//     linea_pedido.cantidad=eventoClick.target.parentElement.childNodes[7].value
//     console.log(eventoClick.target.parentElement.childNodes[5].value);
//     console.log(linea_pedido);
//     console.log(eventoClick);
//     listaProducto= localStorage.getItem('pedido')
//     console.log(listaProducto);
//     lista_json=JSON.parse(listaProducto)
//     console.log(lista_json);
//     lista_json.splice(linea_pedido.idProduct,1,linea_pedido)
//     console.log(lista_json);
//     listaCarrols=JSON.stringify(lista_json)
//     console.log(listaCarrols);
//     localStorage.setItem("pedido",listaCarrols)


// });      

//Cambio Icono carrito
//Hay elementos

let hayElementos = false;
lista_json.forEach((item) => {
    if(item.cantidad > 0){
        hayElementos = true;
    }
})

// Cambiar color

let iconoCarrito = document.getElementById("icono-carrito")
if(hayElementos = true){
    //pop-up
    
    iconoCarrito.style.fill = "red";
} else {
    iconoCarrito
}

//poner tarjetas

let añadirProducto = cajaClick.addEventListener("click", (eventoClick) => {
   console.log(eventoClick);
   console.log(eventoClick.target.attributes.producto.value);
    let lineaProducto;
    lineaProducto = eventoClick.target.attributes.producto.value;
    localStorage.setItem("productoAtributo", lineaProducto)
})

console.log(añadirProducto)

