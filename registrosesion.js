
let registro = document.getElementById("registro")

registro.addEventListener("click", registroCliente)


//Necesito trasformar el objeto en string - JSON


function registroCliente(){

    //Crear la bbdd de cliente cuando se registra

    // IMPORTANTE! idUser = id ++ cada vez que se cree un usuario

    

    // console.log(newUser) 
    let lsUsers = localStorage.getItem("UsersLS"); //recoge LS
    
    let usersArray= JSON.parse(lsUsers); //lo convierte en un array de objetoJS
    console.log(usersArray);
    console.log(usersArray.length);
    let newUser = {
      idUser: usersArray.length,
      name: document.getElementById("nombre").value,
      email: document.getElementById("Correo Electronico").value,
      phone: document.getElementById("telefono").value,
      password: document.getElementById("passwordCliente").value,
      street: document.getElementById("calle").value,
      portal: document.getElementById("portal").value,
      CP: document.getElementById("cp").value,
      city: document.getElementById("ciudad").value,
      defaultLang: "es",
  }


    usersArray.push(newUser); //añades usuario
    console.log(usersArray)
    let listUsersStringfied = JSON.stringify(usersArray); //Lo preparas para LS
    localStorage.setItem("UsersLS", listUsersStringfied); //Y mandas la lista actualizada

    
}

