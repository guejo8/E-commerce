let listUsers=[
    {
        idUser: 0,
        name: "Administrador",
        email: "admin@papelycosas.com",
        phone: "600600600",
        password: "1234",
        street: "Paseo Bolueta",
        portal: "12",
        CP: "48002",
        city: "Bilbao",
        defaultLang: "es",
        rol:"admin",
    },

    {
        idUser: 1,
        name: "Usuario1",
        email: "usuario@gmail.com",
        phone: "600600600",
        password: "1234",
        street: "Paseo Bolueta",
        portal: "10",
        CP: "48002",
        city: "Bilbao",
        defaultLang: "es",
        rol:"user",
    },
    {
        idUser: 2,
        name: "Usuario2",
        email: "usuario@yahoo.com",
        phone: "600600600",
        password: "1234",
        street: "Paseo Bolueta",
        portal: "10",
        CP: "48002",
        city: "Bilbao",
        defaultLang: "es",
        rol:"user",
    }
]

let listProducts=[
    {
        idProd: 0,
        name: "Bolígrafos",
        nameeu:"Boligrafoak",
        nameen:"Pens",
        idCategoria: 0,
        description: "Bolígrafos de tinta de gel, punta redonda de 0,7 mm, retráctil, sujeción de caucho. Tres colores: azul, negro y rojo.",
        descriptioneu:"Geleko tintazko boligrafoak, 0,7 mm-ko rollerball punta, erretiragarriak, gomazko heldulekua. Hiru kolore: urdina, beltza eta gorria.",
        descriptionen:"Gel ink pens, 0.7mm roller tip, retractable, rubber grip. Three colors: blue, black and red.",
        foto: "../imagenes/producto/boligrafo.jpg",
        precio: 3.59

    },{
        idProd: 1,
        name: "Lapices grafito",
        nameeu:"Grafitozko arkatza",
        nameen:"Pencil",
        idCategoria: 0,
        description: " Lápices de madera con grafito en diferentes colores, nº 2 HB. Su forma hexagonal facilita el agarre. Incluye goma de borra.",
        descriptioneu:"Kolore ezberdinetako grafitodun egurrezko arkatzak, HB 2. zenbakia. Bere forma hexagonalak erraz hartzen du. borragoma barne.",
        foto: "../imagenes/producto/lapices.jpg",
        precio: 5.29

    },{
        idProd: 2,
        name: "Set 10 rotuladores",
        nameeu:"10 errotulagailu multzoa",
        nameen:"Set of 10 brushpen",
        idCategoria: 0,
        description: "Talens Ecoline Estuche de Brush Pen 10 - Brillante está hecho en base de colorantes y goma arábiga. Los colores de Talens Ecoline son de una transparencia y lucidez impredecible. ",
        descriptioneu:"Ekoline pintzel-errotulagailuen multzoa tonu distiratsuetan.",
        descriptionen:"Set of 10 ecoline brushpen markers in bright tones.",
        foto: "../imagenes/producto/rotuladores.jpg",
        precio: 22.99
    },{
        idProd: 3,
        name: "Lápices 12 colores",
        nameeu:"12 Koloretako arkatzak",
        nameen:"12 Colored pencils",
        idCategoria: 0,
        description: "Caja de 12 lápices Alpino Festival. Formato ideal para escuelas. Mina resistente de 3 mm.",
        descriptioneu:"Alpino Festibaleko 12 arkatz kaxa. Ikastetxeetarako formatu aproposa. 3 mm-ko beruna.",
        descriptionen:"Box of 12 Alpino Festival pencils. Ideal format for schools. 3mm heavy-duty lead.",
        foto: "../imagenes/producto/colores.png",
        precio: 13.99

    },{
        idProd: 4,
        name: "Papel 90 gr",
        nameeu:"Papera 90 gr.",
        nameen:"Paper 90 gr.",
        idCategoria: 1,
        description: "Papel estándar, funcionalidad de 90gr, excelente calidad de impresión. No traspasa el papel. Din-A4, Paquete x500 Hojas",
        descriptioneu:"Paper estandarra, 90 gr-ko funtzionaltasuna, inprimatzeko kalitate bikaina. Ez da paperetik pasatzen. Din-A4, paketea x500 orri.",
        descriptionen:"Standard paper, 90gr functionality, excellent print quality. It does not go through the paper. Din-A4, Package x500 Sheets.",
        foto: "../imagenes/producto/folios.jpg",
        precio: 32.55

    },{
        idProd: 5,
        name: "Carpeta plástico A4",
        nameeu:"Plastikozko karpeta A4.",
        nameen:"Folder plastic A4.",
        idCategoria: 1,
        description: "Carpeta con cierre de gomas elásticas a juego. 3 solapas. Fabricada de plástico polipropileno de 400 micras opaco y flexible.",
        descriptioneu:"Karpeta bat datorren itxiera elastikoarekin. 3 aleta. 400 mikrako polipropilenozko plastiko opako eta malguz egina.",
        descriptionen:"Folder with matching elastic band closure. 3 flaps. Made of opaque and flexible 400 micron polypropylene plastic.",
        foto: "../imagenes/producto/carpetas.jpg",
        precio: 14.69

    },{
        idProd: 6,
        name: "Oxford cuaderno",
        nameeu:"Oxford koadernoa.",
        nameen:"Oxford notebook.",
        idCategoria: 1,
        description: "Bloc espiral, tamaño A4, tapa dura, 80 hojas de 90 gr, cuadrícula de 5 mm, sin margen, microperforado.",
        descriptioneu:"Espiral koadernoa, A4 tamaina, azal gogorra, 90 g/m-ko 80 orri, 5 mm-ko sareta, ertz gabekoa, mikrozulatua.",
        descriptionen:"Spiral notepad, A4 size, hardcover, 80 sheets of 90 gsm, 5 mm grid, borderless, microperforated.",
        foto: "../imagenes/producto/cuaderno.jpg",
        precio: 5.29

    },{
        idProd: 7,
        name: "Libreta Liderpapel",
        nameeu:"Liderpapel koadernoa",
        nameen:"Liderpapel notebook",
        idCategoria: 1,
        description: "Tapa de plastico A5 48hojas 90g/M2. Cuadro 4mm con margen. Colores surtidos",
        descriptioneu:"Plastikozko estalkia A5 48 orri 90g/M2. Marjina duen 4 mm-ko markoa. askotariko koloreak.",
        descriptionen:"Plastic cover A5 48 sheets 90g/M2. 4mm frame with margin. Assorted colors.",
        foto: "../imagenes/producto/libreta.jpg",
        precio: 6.39

    },{
        idProd: 8,
        name: "Mochila Escolar Ready To Play.",
        nameeu:"Eskolako motxila jolasteko prest.",
        nameen:"Ready To Play School Backpack",
        idCategoria: 2,
        description: "Mochila Oxford B-READY con 12 compartimentos. Medidas: 42x30x15 cm.(28 ltr.)",
        descriptioneu:"Oxford B-READY 12 konpartimentudun motxila. Neurriak: 42x30x15 cm.(28 litro).",
        descriptionen:"Oxford B-READY backpack with 12 compartments. Measurements: 42x30x15 cm.(28 liters).",
        foto: "../imagenes/producto/mochila.jpg",
        precio: 22.19

    },{
        idProd: 9,
        name: "Estuche Escolar Anchor Club",
        nameeu:"Anchor Club arkatz-zorroa",
        nameen:"Anchor Club Pencil Case",
        idCategoria: 2,
        description: "Contenido del estuche: triple compartimento, 1 bolígrafo azul, 1 bolígrafo rojo, 2 lápices, 1 goma, 1 sacapuntas, 1 regla, 1 tijeras, 18 lápices Julian Ross de color 3,00 mm, 18 rotuladores Giotto.",
        descriptioneu: "Kaxaren edukia: konpartimentu hirukoitza, boligrafo urdin 1, boligrafo gorri 1, 2 arkatz, borragoma 1, zorrozgailu 1, erregela 1, guraize 1, 18 Julian Ross koloretako arkatz 3,00 mm, 18 errotuladore Giotto .",
        descriptionen:"Contents of the case: triple compartment, 1 blue ballpoint pen, 1 red ballpoint pen, 2 pencils, 1 eraser, 1 sharpener, 1 ruler, 1 scissors, 18 Julian Ross colored pencils 3.00 mm, 18 Giotto markers.",
        foto: "../imagenes/producto/estuche.jpg",
        precio: 13.99

    },{
        idProd: 10,
        name: "Liderpapel Plastilina en 150gr.",
        nameeu:"Liderpapel Plastilina 150gr",
        nameen:"Liderpapel Clay Bar 150gr.",
        idCategoria: 2,
        description: "La caja de 15 unidades en 15 colores surtidos. La plastilina está hecha de pasta vegetal coloreada muy moldeable, adecuada a partir de los 3 años. Colores que se pueden mezclar entre sí. No mancha ni ensucia y se desmolda con gran facilidad.",
        descriptioneu:"Askotariko 15 koloretako 15 unitateko kutxa. Plastilina oso moldagarria den koloretako landare-pastaz egina dago, 3 urtetik gorakoentzat egokia. Elkarren artean nahas daitezkeen koloreak. Ez du zikintzen edo zikintzen eta oso erraz desmoldeatzen da.",
        descriptionen:"The box of 15 units in 15 assorted colors. The plasticine is made of highly moldable colored vegetable paste, suitable for ages 3 and up. Colors that can be mixed with each other. It does not stain or dirty and it demoulds very easily.",
        foto: "../imagenes/producto/plastilina.jpg",
        precio: 13.99

    },{
        idProd: 11,
        name: "Agenda Escolar 2022-23",
        nameeu:"Eskola Agenda 2022-23",
        nameen:"School Agenda 2022-23",
        idCategoria: 2,
        description: "Agenda Escolar (2022-23) dohe sigma espiral extradura A5",
        descriptioneu:"Eskola Agenda (2022-23) dohe sigma spiral extra hard A5.",
        descriptionen:"School Agenda (2022-23) dohe sigma spiral extra hard A5.",
        foto: "../imagenes/producto/agendas.jpg",
        precio: 16.79

    }
]

let listCategories= [
    {
        idCateg: 0,
        name: "Escritura",
        nameeu:"Idaztea",
        nameen:"writing",
    },
    {
        idCateg: 1,
        name: "Cuadernos",
        nameeu: "Kuadernoak",
        nameen: "Notebook",
    },
    {
        idCateg: 2,
        name: "Escolar",
        nameeu:"Eskola",
        nameen: "School",
    }
]

let listUsersStringfied = JSON.stringify(listUsers);
// console.log(listUsersStringfied);
let listProductsStringfied = JSON.stringify(listProducts);
// console.log(listProductsStringfied);
let listCategoriesStringfied = JSON.stringify(listCategories);
// console.log(listCategoriesStringfied);

// si no tiene datos los carga
let lsUsers = localStorage.getItem("UsersLS")
        // console.log(lsUsers);
         if (lsUsers==null){
            localStorage.setItem("UsersLS", listUsersStringfied);
        }
let lsProducts = localStorage.getItem("ProductsLS")
    // console.log(lsProducts);
    if (lsProducts==null){
        localStorage.setItem("ProductsLS", listProductsStringfied);
    }            
let lsCategories = localStorage.getItem("CategoriesLS")
    // console.log(lsCategories);
    if (lsCategories==null){
        localStorage.setItem("CategoriesLS", listCategoriesStringfied);
    }     

//si tiene datos, los respeta

