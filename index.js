//Escribir la fecha en #date
let cajaFecha=document.getElementById("date");
let fechaHoy= new Date();
console.log(fechaHoy);
cajaFecha.innerText=`Hoy es: ${fechaHoy.toLocaleDateString('es-ES')}`;