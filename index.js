//Escribir la fecha en #date
let cajaFecha=document.getElementById("date");
let fechaHoy= new Date();
console.log(fechaHoy);
cajaFecha.innerText=`Hoy es: ${fechaHoy.toLocaleDateString('es-ES')}`;

let cardContainer=document.getElementById('CardContainer');//poner tarjetas
let selectCategory=document.getElementById('categorySelect');
let changeCategory=selectCategory.addEventListener('change', ()=> {
    changeCardContainer(selectCategory.value);
});
changeCardContainer("all");
function changeCardContainer (seleccionCategoria) { //cambiamos la selección de categorias
    
    cardContainer.innerHTML=""; //borra las tarjetas
    let lsProducts = localStorage.getItem("ProductsLS");//recupera de LS la lista de productos
    let productsArray= JSON.parse(lsProducts); //lo convierte en un array de objetoJS
    /* console.log(productsObject); */
    let listaEnseñar="";
    productsArray.forEach((productObjet) => {
        if (seleccionCategoria==productObjet.idCategoria||seleccionCategoria=="all") { //si coincide catSeleccionada y cat del producto, lo escribe
    listaEnseñar+=`<div class="col-sm-6 col-md-3 mb-3 mb-sm-0"> <!-- Tarjeta -->
                     <div class="card m-md-2 m-sm-1">
                        <img src=${productObjet.foto} class="card-img-top" alt="Boli">
                             <div class="card-body">
                          <h5 class="card-title">${productObjet.name}</h5>
                          <p class="card-text">${productObjet.precio}</p>
                          <td class="cantidad"><p>Cantidad</p><input id="input-cantidad" type="number" value="1" min="1" placeholder="Cantidad" /></td>                    
                          <a href="#" class="btn btn-primary">Añadir al carrito</a>
                      </div>
                  </div>
              </div>`;
            
        }
        cardContainer.innerHTML=listaEnseñar; //pinta las tarjetas
    });
};

        

       
