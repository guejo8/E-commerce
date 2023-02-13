
//Declarando variables para recoger los datos del HTML
let formulario_login = document.querySelector(".formulario__login");
let formulario_register = document.querySelector(".formulario__register");
let contenedor_login_register = document.querySelector(".contenedor__login-register");
let caja_login = document.querySelector("#caja__trasera-login");
let caja_register = document.querySelector("#caja__trasera-register");

let botonIniciar = document.getElementById("btn__iniciar-sesion")
let botonRegistrar = document.getElementById("btn__registrarse")

//Funcionalidad de los boton: el usuario clica y va directamente a loguin o registro

botonIniciar .addEventListener("click", iniciarSesion);
botonRegistrar.addEventListener("click", register);

// Funcionalidad de la pantalla

window.addEventListener("resize", anchoPage); // Que se ejecute la función mientras la pantalla se va disminuyendo(resize: dependiendo del tamaño)

    //FUNCIONES

    // 1 - Ancho de la pantalla

function anchoPage(){

    // Creamos un if else para hacer el formulario responsive

    //Esta parte es para la parte de la caja trasera para se muestre dos en mas de 850 y solo una u otra en los demás tamaños

    if (window.innerWidth > 850){ // si el ancho de la ventana es mayor
        caja_register.style.display = "block";
        caja_login.style.display = "block";
    }else{
        caja_register.style.display = "block";
        caja_register.style.opacity = "1";
        caja_login.style.display = "none";
        formulario_login.style.display = "block";
        contenedor_login_register.style.left = "0rem";
        formulario_register.style.display = "none"; 
        
         
    }
}

anchoPage(); // Se ejecuta la función cuando se recarga la página

    // 2 - Iniciar Sesion

    function iniciarSesion(){
         // Creamos un if else para hacer el formulario responsive

        if (window.innerWidth > 850){ // si el ancho de la ventana es mayor
            formulario_login.style.display = "block"; // quiero que aparezca el formulario de login 
            contenedor_login_register.style.left = "3rem"; // quiero que tenga un espacio entre el formulario y la parte trasera
            formulario_register.style.display = "none"; // no quiero que apezca el formulario de registro 
            caja_register.style.opacity = "1"; // quiero que se muestre la parte trasera de registro
            caja_login.style.opacity = "0"; // no quiero que se muestre la parte trasera de login
        }else{
            formulario_login.style.display = "block";
            contenedor_login_register.style.left = "0rem"; // ya no hay margenes porque está una encima
            formulario_register.style.display = "none";
            // Importante: aquí es display no opacity
            caja_register.style.display = "block"; // quiero que se muestre la parte trasera de registro
            caja_login.style.display = "none";// no quiero que se muestre la parte trasera de login
        }
    }

    // 3 - Registrarse - Esta función se ejecuta cuando le damos click al botón registrase

    function register(){
         // Creamos un if else para hacer el formulario responsive

        if (window.innerWidth > 850){ // si el ancho de la ventana es mayor
            formulario_login.style.display = "none"; // formulario de login que no se muestre
            contenedor_login_register.style.left = "25rem"; // lo vamos a enviar al lado derecho para que aparezca el formulario de registro.
            formulario_register.style.display = "block"; // el formulario de registro se muestra, en SCSS le hemos dicho display = "none"
            caja_register.style.opacity = "0"; // que no aparezca  para que solo aparezca login
            caja_login.style.opacity = "1"; // que aparezca que es la que se quiere mostrar
        }else{
            formulario_login.style.display = "none";
            contenedor_login_register.style.left = "0rem"; // ya no hay margenes porque está una encima
            formulario_register.style.display = "block";
             // Importante: aquí es display no opacity 
            caja_register.style.display = "none"; // no quiero que se muestre la parte trasera de registro
            caja_login.style.display = "block"; // quiero que se muestre la parte trasera de login
            caja_login.style.opacity = "1"; //Le hemos dado opcidad de 0 en SCSS
        }
}



//Aceptar la política de privacidad 

let checkBox = document.getElementById("checkbox")
checkBox.addEventListener("click", clicado)

function clicado(){
        
    if(checkBox.checked){

    document.getElementById('registro').disabled = false;

    } else {
    
    document.getElementById('registro').disabled = true;

    }
}



//Requerimientos de formulario

const formularioValidacion = document.getElementById("formulario-validacion")
const inputs = document.querySelectorAll("#formulario-validacion input")
const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password:/^(?=(?:.*\d))(?=.*[A-Z])(?=.*[a-z])(?=.*[.,*!?¿¡/#$%&])\S{8,64}$/, // Al menos un número 0-9. Al menos una mayúscula. Al menos una minúscula. Al menos un carácter especial (.,*!?¿¡/#$%&). Longitud mínima de 8 caracteres, 64 máxima. No acepta espacios.
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{9}$/, // 9 números   
    calle: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    portal: "/^[0-9a-zA-Z]+$/",  // Admite números y letras
    CP: /^\d{5}$/, // 5 numeros.
    ciudad: /^[a-zA-ZÀ-ÿ\s]{1,40}$/
}

const campos = {
	nombre: false, 
	password: false,
	email: false,
	telefono: false,
    calle: false,
    portal:false,
    CP: false,
    ciudad: false
}

const validarFormulario = (e) => {
	switch (e.target.name) {
		case "nombre":
			validarCampo(expresiones.nombre, e.target, 'nombre');
		break;
		case "password":
			validarCampo(expresiones.password, e.target, 'password');			
		break;
		case "email":
			validarCampo(expresiones.email, e.target, 'email');
		break;
		case "telefono":
			validarCampo(expresiones.telefono, e.target, 'telefono');
		break;
        case "calle":
			validarCampo(expresiones.calle, e.target, 'calle');
		break;
        case "portal":
			validarCampo(expresiones.portal, e.target, 'portal');
		break;
        case "CP":
			validarCampo(expresiones.CP, e.target, 'CP');
		break;
        case "ciudad":
			validarCampo(expresiones.ciudad, e.target, 'ciudad');
		break;
	}
}

const validarCampo = (expresion, input, campo) => {
	if(expresion.test(input.value)){
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos[campo] = true;
	} else {
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos[campo] = false;
	}
}

inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});

