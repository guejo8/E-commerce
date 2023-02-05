/* Inicio de sesión del Usuario */

// Rol de usuario
   //Conseguir los datos del usuario

   let listaUsers = JSON.parse(localStorage.getItem("UsersLS"))
   
   function obtenerListaUsuarios(){
   
    if (listaUsers === null){
       return "Usuario no encontrado, por favor registrate para seguir con la compra"
    }
     
    return listaUsers
    
   }
   
   
   //Esta función es para validar el email y la contraseña
   
   //paso como argumento emai y password para validar que están en mi base de datos.
   
   function validarCredenciales(pemail, cpassword){
   
      listaUsers = obtenerListaUsuarios(); // Esta función nos devuelve la lista de usuarios
      console.log(listaUsers)
      
      var acceso = false;
           
       for(let i =  0; i < listaUsers.length; i++){
           if((pemail === listaUsers[i].email) && (cpassword === listUsers[i].password)){          
                acceso = true
                
                sessionStorage.setItem("usuarioName" , listaUsers[i].name) //Capturamos con sessionStorage el nombre de la persona que inicia sesión.
                sessionStorage.setItem("usuarioEmail" , listaUsers[i].email)
                sessionStorage.setItem("usuarioPhone" , listaUsers[i].phone)
                sessionStorage.setItem("usuarioPassword" , listaUsers[i].password)
                sessionStorage.setItem("usuarioCalle" , listaUsers[i].street)
                sessionStorage.setItem("usuarioPortal" , listaUsers[i].portal)
                sessionStorage.setItem("usuarioCP" , listaUsers[i].CP)
                sessionStorage.setItem("usuarioCiudad" , listaUsers[i].city)
                
                //si tuvieramos rol: sessionStorage.setItem("rolactivo",listaUsers[i][a])
           } 
       }
       return acceso
   }




// Esta logica es la que va a interactuar con el botón de inicio de sesión

let botonSession = document.querySelector("#btnIngresar")
botonSession.addEventListener("click" , iniciarSession)

function iniciarSession(){
    var emailSession  = "";
    var passwordSession = ""; 
    var acceso = false;

    emailSession = document.querySelector("#email").value
    passwordSession = document.querySelector("#password").value

    console.log(emailSession)
    console.log(passwordSession)

    acceso = validarCredenciales(emailSession, passwordSession);
    console.log(acceso)

    if(acceso === true){
        ingresar()
}
}

function ingresar(){
    window.location.href= "perfil.html" //Esta función redirige a la página de perfil
}