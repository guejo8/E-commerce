let cardContainerProducto = document.getElementById('CardContainerProducto');

cardContainerProducto.addEventListener("click", changeCardContainerProducto)

function changeCardContainerProducto(){

            let consigueProducto = localStorage.getItem("ProductsLS")
            let productosArray = JSON.parse(consigueProducto);
            let guardadoProducto = localStorage.getItem("producto")
           

            let enseñaProducto ="";

            productosArray.forEach((producto) => {
                if(guardadoProducto.idProduct === producto.idProd){
                    enseñaProducto+=`<div class="col-sm-6 col-md-3 mb-3 mb-sm-0"> <!-- Tarjeta -->
                    <div class="card m-md-2 m-sm-1">
                    <a href="producto.html"><img src=${producto.foto} class="card-img-top" alt=${producto.name}></a>
                        <div class="card-body">
                        <h5 class="card-title">${producto.name}</h5>
                        <p class="card-text">${producto.precio} €</p>
                        <p class="cantidad">Cantidad &nbsp;&nbsp;<input id="cantidad${producto.idProd}" style="width:3rem" type="number" value="1" min="1"/></p>                   
                        <p href="#" class="btn3" producto=${producto.idProd}>Añadir al carrito</p>
                    </div>
                </div>
            </div>`;
        
                }
                cardContainerProducto.innerHTML =  enseñaProducto
            })

}