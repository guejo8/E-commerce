let cardContainerProducto = document.getElementById('CardContainerProducto');

let recogerIdioma = localStorage.getItem("idioma")
let escucharIdioma= JSON.parse(recogerIdioma)
console.log(escucharIdioma)


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
                                <p href="#" class="btn3" producto=${producto.idProd}>Añadir</p>
                            </div>
                        </div>
                    </div>`;
                
                       }
                   })

                    break;
            }

        }

changeCardContainerProducto()
    
// document.getElementById("boton-añadir").addEventListener("click", function() {
//     var producto = JSON.parse(localStorage.getItem("producto"));
//     var carrito = JSON.parse(localStorage.getItem("carrito")) || [];
//     carrito.push(producto);
//     localStorage.setItem("carrito", JSON.stringify(carrito));

//     let iconoCarrito = document.getElementById("icono-carrito")
//     iconoCarrito.style.fill = "red";
//  });      