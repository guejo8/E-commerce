
//Recoger el idioma del usuario

let idioma = document.querySelector("html")
console.log(idioma)
console.log(idioma.attributes.lang.value)

let guardarIdioma = idioma.attributes.lang.value
localStorage.setItem("idioma", JSON.stringify(guardarIdioma))
