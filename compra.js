cajaMensaje=document.getElementById('mensaje');
let manolito=sessionStorage.getItem("cliente")
let cliente=JSON.parse(manolito);
mensaje=`Gracias, ${cliente.name}, tu compra ha sido procesada.
No tardes en volver`
cajaMensaje.innerText=mensaje;