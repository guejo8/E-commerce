let cardContainerProducto = document.getElementById('CardContainerProducto');

let recogerIdioma = localStorage.getItem("idioma")
let escucharIdioma= JSON.parse(recogerIdioma)
// console.log(escucharIdioma)


function changeCardContainerProducto(){

            let consigueProducto = localStorage.getItem("ProductsLS")
            let productosArray= JSON.parse(consigueProducto)
            let consigueIdProducto = localStorage.getItem("productoAtributo")
            let productosId = JSON.parse(consigueIdProducto)
               

            switch(escucharIdioma) {
                    case "en":
                        productosArray.forEach((producto) => {
                            if(producto.idProd === productosId){
                                cardContainerProducto.innerHTML =`<div class="col-sm-6 col-md-3 mb-3 mb-sm-0" id="tarjeta-detalle"> <!-- Tarjeta -->
                                <div class="card m-md-2 m-sm-1" id="tarjeta-detalle">
                                <a href="producto.html"><img src=${producto.foto} class="card-img-top" alt=${producto.name}></a>
                                    <div class="card-body">
                                    <h5 class="card-title">${producto.nameen}</h5>
                                    <p class="card-text">${producto.descriptionen}</p>
                                    <p class="card-text">${producto.precio} £</p>
                                    <p class="cantidad">Cantidad &nbsp;&nbsp;<input id="cantidad${producto.idProd}" style="width:3rem" type="number" value="1" min="1"/></p>                   
                                    <p href="#" class="btn3" producto=${producto.idProd}>Añadir</p>
                                </div>
                            </div>
                        </div>`;
                    
                            }
                        })
    
                        break;
                        case "eu":
                            productosArray.forEach((producto) => {
                                if(producto.idProd === productosId){
                                    cardContainerProducto.innerHTML =`<div class="col-sm-6 col-md-3 mb-3 mb-sm-0" id="tarjeta-detalle"> <!-- Tarjeta -->
                                    <div class="card m-md-2 m-sm-1">
                                    <a href="producto.html"><img src=${producto.foto} class="card-img-top" alt=${producto.name}></a>
                                        <div class="card-body">
                                        <h5 class="card-title">${producto.nameeu}</h5>
                                        <p class="card-text">${producto.descriptioneu}</p>
                                        <p class="card-text">${producto.precio} €</p>
                                        <p class="cantidad">Cantidad &nbsp;&nbsp;<input id="cantidad${producto.idProd}" style="width:3rem" type="number" value="1" min="1"/></p>                   
                                        <p href="#" class="btn3" producto=${producto.idProd}>Añadir</p>
                                    </div>
                                </div>
                            </div>`;
                        
                                }
                            })
        
                            break;
            
                default:
                     productosArray.forEach((producto) => {
                        if(producto.idProd === productosId){
                            cardContainerProducto.innerHTML =`<div class="col-sm-6 col-md-3 mb-3 mb-sm-0" id="tarjeta-detalle"> <!-- Tarjeta -->
                            <div class="card m-md-2 m-sm-1">
                            <a href="producto.html"><img src=${producto.foto} class="card-img-top" alt=${producto.name}></a>
                                <div class="card-body">
                                <h5 class="card-title">${producto.name}</h5>
                                <p class="card-text">${producto.description}</p>
                                <p class="card-text">${producto.precio} €</p>
                                <p class="cantidad">Cantidad &nbsp;&nbsp;<input id="cantidad${producto.idProd}" style="width:3rem" type="number" value="1" min="1"/></p>                   
                                <p href="#" class="btn3" id="boton-añadir" producto=${producto.idProd}>Añadir</p>
                            </div>
                        </div>
                    </div>`;
                
                       }
                   })

                    break;
            }

        }

changeCardContainerProducto()
        

  let cajaClick = document.getElementById("CardContainerProducto");
  console.log(cajaClick)
    cajaClick.addEventListener('click', (eventoClick)=> {
     let linea_pedido={idProduct:0,cantidad:0};
    

     linea_pedido.idProduct=eventoClick.target.attributes.producto.value;
     linea_pedido.cantidad=eventoClick.target.parentElement.childNodes[7].childNodes[1].value
    
      //console.log(linea_pedido);
     console.log(eventoClick);
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