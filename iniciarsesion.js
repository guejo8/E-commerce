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
       
       console.log(listaUsers)
       
       for(let i =  0; i < listaUsers.length; i++){
           console.log(cpassword);
        console.log(listUsers[i].password);
        console.log((pemail == listaUsers[i].email) && (cpassword == listUsers[i].password));
           if((pemail == listaUsers[i].email) && (cpassword == listUsers[i].password)){          
                acceso = true
                sessionStorage.setItem("cliente", JSON.stringify(listaUsers[i]))               
                //si tuvieramos rol: sessionStorage.setItem("rolactivo",listaUsers[i][a])
           } 
       }
       return acceso
   }



// Esta logica es la que va a interactuar con el botón de inicio de sesión

    let botonSession = document.getElementById("btnIngresar")

    if(botonSession){ // se escribe este if para que no nos de error en la consola (no puede leer addEventListener)
       botonSession.addEventListener("click" , iniciarSessionUsuario)
    }
    

        function iniciarSessionUsuario(){
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
            } // Y sino incluir un mensaje de usuario no registrado o datos no correctos
            else{
                alert("No hay usuario con esos datos")
            }
        }

        function ingresar(){
            window.location.href= "./perfil/Perfil.html" //Esta función redirige a la página de perfil
        }
