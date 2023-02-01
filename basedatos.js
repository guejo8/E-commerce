let listUsers=[
    {
        idUser: 0,
        name: "Administrador",
        email: "admin@papelycosas.com",
        phone: "+34600600600",
        password: "1234",
        street: "Paseo Bolueta",
        portal: "12",
        CP: "48002",
        city: "Bilbao",
        defaultLang: "es",
    },

    {
        idUser: 1,
        name: "Usuario1",
        email: "usuario@gmail.com",
        phone: "+34600600600",
        password: "1234",
        street: "Paseo Bolueta",
        portal: "10",
        CP: "48002",
        city: "Bilbao",
        defaultLang: "es",
    },
    {
        idUser: 2,
        name: "Usuario2",
        email: "usuario@yahoo.com",
        phone: "+34600600600",
        password: "1234",
        street: "Paseo Bolueta",
        portal: "10",
        CP: "48002",
        city: "Bilbao",
        defaultLang: "es",
    }
]

let listProducts=[
    {
        idProd: 0,
        name: "Bolígrafo",
        idCategoria: 0,
        description: "Caja de bolígrafos con varios colores",
        foto: "imagenes/producto/boligrafos2.jpg",
        precio: 13.99

    },{
        idProd: 1,
        name: "Rotuladores",
        idCategoria: 0,
        description: "Caja de rotuladores con varios colores",
        foto: "imagenes/producto/rotuladores.jpg",
        precio: 13.99
    },{
        idProd: 2,
        name: "Pinturas",
        idCategoria: 0,
        description: "",
        foto: "img/foto0",
        precio: 13.99

    },{
        idProd: 3,
        name: "Borradores",
        idCategoria: 0,
        description: "",
        foto: "img/foto0",
        precio: 13.99

    },{
        idProd: 4,
        name: "Folios",
        idCategoria: 1,
        description: "",
        foto: "img/foto0",
        precio: 13.99

    },{
        idProd: 5,
        name: "Carpeta",
        idCategoria: 1,
        description: "",
        foto: "img/foto0",
        precio: 13.99

    },{
        idProd: 6,
        name: "Cuaderno 1",
        idCategoria: 1,
        description: "",
        foto: "img/foto0",
        precio: 13.99

    },{
        idProd: 7,
        name: "Cuaderno 2",
        idCategoria: 1,
        description: "",
        foto: "img/foto0",
        precio: 13.99

    },{
        idProd: 8,
        name: "Mochila",
        idCategoria: 2,
        description: "",
        foto: "img/foto0",
        precio: 13.99

    },{
        idProd: 9,
        name: "estuches",
        idCategoria: 2,
        description: "",
        foto: "img/foto0",
        precio: 13.99

    },{
        idProd: 10,
        name: "plastilina",
        idCategoria: 2,
        description: "",
        foto: "img/foto0",
        precio: 13.99

    },{
        idProd: 11,
        name: "agenda",
        idCategoria: 2,
        description: "",
        foto: "img/foto0",
        precio: 13.99

    }
]

let listCategories= [
    {
        idCateg: 0,
        name: "Escritura"
    },
    {
        idCateg: 1,
        name: "Cuadernos"
    },
    {
        idCateg: 2,
        name: "Escolar"
    }
]


let listUsersStringfied = JSON.stringify(listUsers);
let listProductsStringfied = JSON.stringify(listProducts);
let listCategoriesStringfied = JSON.stringify(listCategories);

// si no tiene datos los carga
let lsUsers = localStorage.getItem("UsersLS")
        console.log(lsUsers);
         if (lsUsers==null){
            localStorage.setItem("UsersLS", listUsersStringfied);
        }
let lsProducts = localStorage.getItem("ProductsLS")
    console.log(lsProducts);
    if (lsProducts==null){
        localStorage.setItem("ProductsLS", listProductsStringfied);
    }            
let lsCategories = localStorage.getItem("CategoriesLS")
    console.log(lsCategories);
    if (lsCategories==null){
        localStorage.setItem("CategoriesLS", listCategoriesStringfied);
    }     

//si tiene datos, los respeta

