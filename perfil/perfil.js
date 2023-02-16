 let nombreCliente = document.getElementById("nombPersona")
 let telefonoForm = document.getElementById("telefono-form")
 let emailForm = document.getElementById("email-form")
 let dniForm = document.getElementById("dni-form")
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
        dniForm.innerHTML = usuarioLogeado.dni
        calleForm.innerText = usuarioLogeado.street 
        portalForm.innerText = usuarioLogeado.portal
        cpForm.innerText = usuarioLogeado.CP
        ciudadForm.innerText = usuarioLogeado.city


