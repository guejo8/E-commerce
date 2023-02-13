 let nombreCliente = document.getElementById("nombPersona")
 let telefonoForm = document.getElementById("telefono-form")
 let emailForm = document.getElementById("email-form")
 let calleForm = document.getElementById("calle-form")
 let portalForm = document.getElementById("portal-form")
 let cpForm = document.getElementById("cp-form")
 let ciudadForm = document.getElementById("ciudad-form")

let usuarioSTring= sessionStorage.getItem("cliente")
console.log(usuarioSTring);
let usuarioLogeado = JSON.parse(usuarioSTring)

console.log(usuarioLogeado)

        nombreCliente.innerText = usuarioLogeado.name
        telefonoForm.innerText = usuarioLogeado.phone
        emailForm.innerText =  usuarioLogeado.email
        calleForm.innerText = usuarioLogeado.street 
        portalForm.innerText = usuarioLogeado.portal
        cpForm.innerText = usuarioLogeado.CP
        ciudadForm.innerText = usuarioLogeado.city



// Enviar la imagen para subir 

let archivo = document.getElementById("archivo")

archivo.addEventListener("change" , procesarArchivo, false ) //cada vez que cambiar el archivo

// Función para procesar el archivo

function procesarArchivo (event){ //Estamos recibiendo un evento, el cambio de la foto
    
    let imagen = event.target.files[0] //guarda las imagenes que estamos cargando

    //Lector para procesar la imagen y proyectarla en la pantalla -- Nos va a ayudar a leer la imagen
    let lector = new FileReader()
    lector.addEventListener("load" , mostrarImagen, false) //queremos que se cargue la imagen y luego se muestre por eso load = carga
    lector.readAsDataURL(imagen)

}

function mostrarImagen(event){
    let imagenSource = event.target.result
    let imagenCargada = document.getElementById("preview")

    imagenCargada.setAttribute("src", imagenSource)

}