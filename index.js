//Escribir la fecha en #date
let cajaFecha=document.getElementById("date");
let fechaHoy= new Date();
// console.log(fechaHoy);
cajaFecha.innerText=`Hoy es: ${fechaHoy.toLocaleDateString('es-ES')}`;


//poner tarjetas
let cardContainer=document.getElementById('CardContainer');
let selectCategory=document.getElementById('categorySelect');
// console.log(selectCategory);
let changeCategory = selectCategory.addEventListener('change', ()=> {
    changeCardContainer(selectCategory.value);
    incluirCategoria(selectCategory.value)
});

changeCardContainer("all");

//Título Categorías 

let categoriaProducto = document.getElementById("categoriaProducto")
console.log(categoriaProducto)

let categoriaEscritura = document.getElementById("categoriaEscritura")
let categoriaCuaderno = document.getElementById("categoriaCuaderno")
let categoriaEscolar = document.getElementById("categoriaEscolar")


function incluirCategoria(seleccionCategoria){
    let listaCategoria = "";
    let listaCategoriaEscritura = "";
    let listaCategoriaCuaderno = "";

    let lsCategorias = localStorage.getItem("CategoriesLS")
    let categoriasArray = JSON.parse(lsCategorias)

    categoriasArray.forEach((productObjet) => {
        if(seleccionCategoria == productObjet.idCateg){
            listaCategoria+=`<h3 id="titulo-categorias">${productObjet.name}</h3>`
        }
        categoriaProducto.innerHTML=listaCategoria;   
    });  
    
    if(seleccionCategoria == "all"){
        listaCategoria+=`<h3 id="titulo-categorias"> Todos los productos </h3>`
        categoriaProducto.innerHTML+=listaCategoria;  
    }
   
}

incluirCategoria("all")

function changeCardContainer (seleccionCategoria) { //cambiamos la selección de categorias
    
    cardContainer.innerHTML=""; //borra las tarjetas
    let lsProducts = localStorage.getItem("ProductsLS");//recupera de LS la lista de productos
    let productsArray= JSON.parse(lsProducts); //lo convierte en un array de objetoJS
    /* console.log(productsArray); */
    let listaEnseñar = "";
   
    productsArray.forEach((productObjet) => {
        if (seleccionCategoria==productObjet.idCategoria||seleccionCategoria=="all") { //si coincide catSeleccionada y cat del producto, lo escribe
            listaEnseñar+=`<div class="col-sm-6 col-md-6 col-lg-3 mb-3 mb-sm-0"> <!-- Tarjeta -->
                                <div class="card m-md-2 m-sm-1">
                                <a href="./producto/producto.html" producto=${productObjet.idProd}><img src=${productObjet.foto} class="card-img-top" id="foto-imagen" alt=${productObjet.name} producto=${productObjet.idProd}></a>
                                    <div class="card-body">
                                        <h5 class="card-title">${productObjet.name}</h5>
                                        <p class="card-text">${productObjet.precio} €</p>
                                        <p class="cantidad">Cantidad &nbsp;&nbsp;<input id="cantidad${productObjet.idProd}" style="width:3rem" type="number" value="1" min="1"/></p>                   
                                        <p class="btn3" producto=${productObjet.idProd} data-bs-toggle="modal" data-bs-target="#miModal">Añadir</p>
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
//console.log(localStorage.getItem("pedido"));
if (localStorage.getItem("pedido")==null){ //si no hay pedido, pone uno vacio
    lista_json.forEach(producto => {
        //console.log(producto);
        let linea_pedido={idProduct:producto.idProd,cantidad:0}
        listCarrito.push(linea_pedido)
    });
    //console.log(listCarrito);
    let listaCarrols=JSON.stringify(listCarrito)
    localStorage.setItem("pedido",listaCarrols)

}

//modificar

 let cajaClick = document.getElementById('CardContainer');
 cajaClick.addEventListener('click', (eventoClick)=> {
     let linea_pedido={idProduct:0,cantidad:0};
     console.log(eventoClick.target.parentElement.childNodes[5].childNodes[1].value);
     linea_pedido.idProduct=eventoClick.target.attributes.producto.value;
     linea_pedido.cantidad=eventoClick.target.parentElement.childNodes[5].childNodes[1].value
    //  console.log(eventoClick.target.parentElement.childNodes[5].childNodes[1]);
    //  console.log(linea_pedido);
    //  console.log(eventoClick);
     listaProducto= localStorage.getItem('pedido')
    //  console.log(listaProducto);
     lista_json=JSON.parse(listaProducto)
    //  console.log(lista_json);
     lista_json.splice(linea_pedido.idProduct,1,linea_pedido)
    //  console.log(lista_json);
     let listaCarrols=JSON.stringify(lista_json)
    //  console.log(listaCarrols);
     localStorage.setItem("pedido",listaCarrols)

    //Icono carrito cambio color
    let iconoCarrito = document.getElementById("icono-carrito")
    iconoCarrito.style.fill = "red";
 });      





//poner tarjetas

let añadirProducto = cajaClick.addEventListener("click", (eventoClick) => {
//    console.log(eventoClick);
//    console.log(eventoClick.target.attributes.producto.value);
    let lineaProducto;
    lineaProducto = eventoClick.target.attributes.producto.value;
    localStorage.setItem("productoAtributo", lineaProducto)
})


