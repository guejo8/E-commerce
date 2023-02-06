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
        name: "Bolígrafos",
        idCategoria: 0,
        description: "Bolígrafos de tinta de gel, punta redonda de 0,7 mm, retráctil, sujeción de caucho. Tres colores: azul, negro y rojo.",
        foto: "../imagenes/producto/boligrafo.jpg",
        precio: 3.59

    },{
        idProd: 1,
        name: "Lapices grafito",
        idCategoria: 0,
        description: " Lápices de madera con grafito en diferentes colores, nº 2 HB. Su forma hexagonal facilita el agarre. Incluye goma de borra.",
        foto: "../imagenes/producto/lapices.jpg",
        precio: 5.29

    },{
        idProd: 2,
        name: "Set de 10 rotuladores ecoline brushpen tonos brillantes.",
        idCategoria: 0,
        description: "Talens Ecoline Estuche de Brush Pen 10 - Brillante está hecho en base de colorantes y goma arábiga. Los colores de Talens Ecoline son de una transparencia y lucidez impredecible. ",
        foto: "../imagenes/producto/rotuladores.jpg",
        precio: 22.99
    },{
        idProd: 3,
        name: "Lápices de colores, caja de 12 colores",
        idCategoria: 0,
        description: "Caja de 12 lápices Alpino Festival. Formato ideal para escuelas. Mina resistente de 3 mm.",
        foto: "../imagenes/producto/colores.png",
        precio: 13.99

    },{
        idProd: 4,
        name: "Papel expression 90 gr",
        idCategoria: 1,
        description: "Papel estándar, funcionalidad de 90gr, excelente calidad de impresión. No traspasa el papel. Din-A4, Paquete x500 Hojas",
        foto: "../imagenes/producto/folios.jpg",
        precio: 32.55

    },{
        idProd: 5,
        name: "Carpeta de gomas plástico solapas A4 opaco negro",
        idCategoria: 1,
        description: "Carpeta con cierre de gomas elásticas a juego. 3 solapas. Fabricada de plástico polipropileno de 400 micras opaco y flexible.",
        foto: "../imagenes/producto/carpetas.jpg",
        precio: 14.69

    },{
        idProd: 6,
        name: "Oxford cuaderno",
        idCategoria: 1,
        description: "Bloc espiral, tamaño A4, tapa dura, 80 hojas de 90 gr, cuadrícula de 5 mm, sin margen, microperforado.",
        foto: "../imagenes/producto/cuaderno.jpg",
        precio: 5.29

    },{
        idProd: 7,
        name: "Libreta Liderpapel 360 A5",
        idCategoria: 1,
        description: "Tapa de plastico A5 48hojas 90g/M2. Cuadro 4mm con margen. Colores surtidos",
        foto: "../imagenes/producto/libreta.jpg",
        precio: 6.39

    },{
        idProd: 8,
        name: "Mochila Escolar Ready To Play.",
        idCategoria: 2,
        description: "Mochila Oxford B-READY con 12 compartimentos. Medidas: 42x30x15 cm.(28 ltr.)",
        foto: "../imagenes/producto/mochila.jpg",
        precio: 22.19

    },{
        idProd: 9,
        name: "Estuche Escolar Anchor Club",
        idCategoria: 2,
        description: "Contenido del estuche: triple compartimento, 1 bolígrafo azul, 1 bolígrafo rojo, 2 lápices, 1 goma, 1 sacapuntas, 1 regla, 1 tijeras, 18 lápices Julian Ross de color 3,00 mm, 18 rotuladores Giotto.",
        foto: "../imagenes/producto/estuche.jpg",
        precio: 13.99

    },{
        idProd: 10,
        name: "Liderpapel Plastilina en Barra 150gr.",
        idCategoria: 2,
        description: "La caja de 15 unidades en 15 colores surtidos. La plastilina está hecha de pasta vegetal coloreada muy moldeable, adecuada a partir de los 3 años. Colores que se pueden mezclar entre sí. No mancha ni ensucia y se desmolda con gran facilidad.",
        foto: "../imagenes/producto/plastilina.jpg",
        precio: 13.99

    },{
        idProd: 11,
        name: "Agenda Escolar (2022-23) DOHE SIGMA",
        idCategoria: 2,
        description: "Agenda Escolar (2022-23) dohe sigma espiral extradura A5",
        foto: "../imagenes/producto/agendas.jpg",
        precio: 16.79

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
console.log(listUsersStringfied);
let listProductsStringfied = JSON.stringify(listProducts);
console.log(listProductsStringfied);
let listCategoriesStringfied = JSON.stringify(listCategories);
console.log(listCategoriesStringfied);

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

