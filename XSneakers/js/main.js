//Productos
const productos = [
    //Urbanas
    {
        id: 'urb-01',
        titulo: 'Jordan 1 Low Travis Scott "Olive"',
        img: './img/urbanas/travis0.jpeg',
        categoria: {
            nombre: 'Urbanas',
            id: 'urb'
        },
        precio: 330
    },
    {
        id: 'urb-02',
        titulo: 'Air Jordan 1 Low Travis Scott "Black Phantom"',
        img: './img/urbanas/travisb.jpeg',
        categoria: {
            nombre: 'Urbanas',
            id: 'urb'
        },
        precio: 330000
    },
    {
        id: 'urb-03',
        titulo: 'Air Jordan 1 Low Travis Scott "Reverse Mocha"',
        img: './img/urbanas/travism.jpg',
        categoria: {
            nombre: 'Urbanas',
            id: 'urb'
        },
        precio: 330000
    },
    {
        id: 'urb-04',
        titulo: 'Air Jordan 1 Low x Fragment x Travis Scott',
        img: './img/urbanas/travisc.jpg',
        categoria: {
            nombre: 'Urbanas',
            id: 'urb'
        },
        precio: 330000
    },
    {
        id: 'urb-05',
        titulo: 'Air Jordan 1 HIGH Travis Scott',
        img: './img/urbanas/travisa.jpg',
        categoria: {
            nombre: 'Urbanas',
            id: 'urb'
        },
        precio: 330000
    },
    {
        id: 'urb-06',
        titulo: 'Jordan 1 Low Travis Scott Golf "Neutral Olive"',
        img: './img/urbanas/jno.jpeg',
        categoria: {
            nombre: 'Urbanas',
            id: 'urb'
        },
        precio: 330000
    },
    {
        id: 'urb-07',
        titulo: 'Air Jordan 1 Low Travis Scott',
        img: './img/urbanas/j1l.jpg',
        categoria: {
            nombre: 'Urbanas',
            id: 'urb'
        },
        precio: 330000
    },
    {
        id: 'urb-08',
        titulo: 'Air Jordan 1 Low Travis Scott "Canary"',
        img: './img/urbanas/jc.jpg',
        categoria: {
            nombre: 'Urbanas',
            id: 'urb'
        },
        precio: 330000
    },
    {
        id: 'urb-09',
        titulo: 'Jordan 6 Retro x Travis Scott "Olive"',
        img: './img/urbanas/jo.jpeg',
        categoria: {
            nombre: 'Urbanas',
            id: 'urb'
        },
        precio: 330000
    },
    {
        id: 'urb-10',
        titulo: 'Jordan 6 Retro Travis Scott "British Khaki"',
        img: './img/urbanas/jbk.jpeg',
        categoria: {
            nombre: 'Urbanas',
            id: 'urb'
        },
        precio: 330000
    },
    {
        id: 'urb-11',
        titulo: 'Jordan 4 Retro Travis Scott "Purple"',
        img: './img/urbanas/jp.jpeg',
        categoria: {
            nombre: 'Urbanas',
            id: 'urb'
        },
        precio: 330000
    },
    {
        id: 'urb-12',
        titulo: 'Nike SB Dunk Low Travis Scott',
        img: './img/urbanas/nsb.jpeg',
        categoria: {
            nombre: 'Urbanas',
            id: 'urb'
        },
        precio: 330000
    },
    {
        id: 'dep-01',
        titulo:  'Nike InfinityRN 4"',
        img: './img/deportivas/n1.jpg',
        categoria: {
            nombre:  'Deportivas',
            id: 'dep'
        },
        precio:  150000
    },
    {
        id: 'dep-02',
        titulo:  'Nike Legend Essential 3',
        img: './img/deportivas/n2.jpg',
        categoria: {
            nombre:  'Deportivas',
            id: 'dep'
        },
        precio:  150000
    },
    {
        id: 'dep-03',
        titulo:  'Nike Air Zoom Pegasus',
        img: './img/deportivas/n3.jpg',
        categoria: {
            nombre:  'Deportivas',
            id: 'dep'
        },
        precio:  150000
    },
    {
        id: 'dep-04',
        titulo:  'Nike InfinityRN4',
        img: './img/deportivas/n4.jpg',
        categoria: {
            nombre:  'Deportivas',
            id: 'dep'
        },
        precio:  150000
    },
    {
        id: 'dep-05',
        titulo:  'Nike Pegasus 40',
        img: './img/deportivas/n5.jpg',
        categoria: {
            nombre:  'Deportivas',
            id: 'dep'
        },
        precio:  150000
    },
    {
        id: 'dep-06',
        titulo:  'Nike Pegasus 41',
        img: './img/deportivas/n6.jpg',
        categoria: {
            nombre:  'Deportivas',
            id: 'dep'
        },
        precio:  150000
    },
    {
        id: 'dep-07',
        titulo:  'Nike Vomero 16',
        img: './img/deportivas/n7.jpg',
        categoria: {
            nombre:  'Deportivas',
            id: 'dep'
        },
        precio:  150000
    },
    {
        id: 'dep-08',
        titulo:  'Nike InfinityRN 4',
        img: './img/deportivas/n8.jpg',
        categoria: {
            nombre:  'Deportivas',
            id: 'dep'
        },
        precio:  150000
    },
    {
        id: 'dep-09',
        titulo:  'Nike Alpha Trainer 5',
        img: './img/deportivas/n9.jpg',
        categoria: {
            nombre:  'Deportivas',
            id: 'dep'
        },
        precio:  150000
    },
    {
        id: 'dep-10',
        titulo:  'Nike Metcon 9',
        img: './img/deportivas/n10.jpg',
        categoria: {
            nombre:  'Deportivas',
            id: 'dep'
        },
        precio:  150000
    },
    {
        id: 'dep-11',
        titulo:  'Nike Quest 5',
        img: './img/deportivas/n11.jpg',
        categoria: {
            nombre:  'Deportivas',
            id: 'dep'
        },
        precio:  150000
    },
    {
        id: 'dep-12',
        titulo:  'Nike Structure 25',
        img: './img/deportivas/n12.jpg',
        categoria: {
            nombre:  'Deportivas',
            id: 'dep'
        },
        precio:  150000
    },
    {
        id: 'skt-01',
        titulo:  'Nike SB Dunk Low Pro',
        img: './img/skate/n1.jpeg',
        categoria: {
            nombre:  'Skate',
            id: 'skt'
        },
        precio:  150000
    },
    {
        id: 'skt-02',
        titulo:  'Nike SB Zoom Janoski OG+',
        img: './img/skate/n2.jpeg',
        categoria: {
            nombre:  'Skate',
            id: 'skt'
        },
        precio:  150000
    },
    {
        id: 'skt-03',
        titulo:  'Nike SB Zoom Blazer Mid',
        img: './img/skate/n3.jpeg',
        categoria: {
            nombre:  'Skate',
            id: 'skt'
        },
        precio:  150000
    },
    {
        id: 'skt-04',
        titulo:  'Nike SB Force 58 Premium',
        img: './img/skate/n4.jpeg',
        categoria: {
            nombre:  'Skate',
            id: 'skt'
        },
        precio:  150000
    },
    {
        id: 'skt-05',
        titulo:  'Nike SB FC Classic',
        img: './img/skate/n5.jpeg',
        categoria: {
            nombre:  'Skate',
            id: 'skt'
        },
        precio:  150000
    },
    {
        id: 'skt-06',
        titulo:  'Nike SB Zoom Janoski OG+ SE',
        img: './img/skate/n6.jpeg',
        categoria: {
            nombre:  'Skate',
            id: 'skt'
        },
        precio:  150000
    },
    {
        id: 'skt-07',
        titulo:  'Nike SB Dunk Low Pro',
        img: './img/skate/n7.jpeg',
        categoria: {
            nombre:  'Skate',
            id: 'skt'
        },
        precio:  150000
    },
    {
        id: 'skt-08',
        titulo:  'Nike SB Malor',
        img: './img/skate/n8.jpeg',
        categoria: {
            nombre:  'Skate',
            id: 'skt'
        },
        precio:  150000
    },
    {
        id: 'skt-09',
        titulo:  'Nike SB Dunk Low Pro Electric',
        img: './img/skate/n9.jpeg',
        categoria: {
            nombre:  'Skate',
            id: 'skt'
        },
        precio:  150000
    },
    {
        id: 'skt-10',
        titulo:  'Nike SB Dunk Low Pro',
        img: './img/skate/n10.jpeg',
        categoria: {
            nombre:  'Skate',
            id: 'skt'
        },
        precio:  150000
    },
    {
        id: 'skt-11',
        titulo:  'Nike SB Zoom Blazer Low x Dancer Skateboards',
        img: './img/skate/n11.jpeg',
        categoria: {
            nombre:  'Skate',
            id: 'skt'
        },
        precio:  150000
    },
    {
        id: 'skt-12',
        titulo:  'Nike SB Force 58',
        img: './img/skate/n12.jpeg',
        categoria: {
            nombre:  'Skate',
            id: 'skt'
        },
        precio:  150000
    },
    

];

const contenedorProductos = document.querySelector('#contenedor-productos');
const botonesCategorias = document.querySelectorAll('.boton-categoria');
const tituloPrincipal = document.querySelector('#titulo-principal');
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numerito = document.querySelector('#numerito');

function cargarProductos(productosElegidos) {

    contenedorProductos.innerHTML = "";

    productosElegidos.forEach(producto => {
        const div = document.createElement('div');
        div.classList.add("producto");
        div.innerHTML = `
            <img class="producto-imagen" src="${producto.img}" alt="${producto.titulo}">
        <div class="producto-detalles">
            <h3 class="producto-titulo">${producto.titulo}</h3>
            <p class="producto-precio">${producto.precio}</p>
            <button class="producto-agregar" id="${producto.id}">Agregar</button>
        </div>
        `;

        contenedorProductos.append(div);
    })

    actualizarBotonesAgregar();

}

cargarProductos(productos);

botonesCategorias.forEach(boton => {
    boton.addEventListener("click",  (e) => {
        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");

        if(e.currentTarget.id != "todos"){
            const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);
            tituloPrincipal.innerText = productoCategoria.categoria.nombre;
            
            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
            cargarProductos(productosBoton);
        } else {
            tituloPrincipal.innerText = "Todos los productos";
            cargarProductos(productos);
        }
    })
});

function actualizarBotonesAgregar (){
    botonesAgregar = document.querySelectorAll(".producto-agregar");

    botonesAgregar.forEach(boton => {
        boton.addEventListener('click', agregarAlCarrito);
    });
}

let productosEnCarrito;

let productosEnCarritoLS = localStorage.getItem('productos-en-carrito');

if(productosEnCarritoLS){
    productosEnCarrito = JSON.parse(productosEnCarritoLS);
    actualizarNumerito();
} else {
    productosEnCarrito = [];
}

function agregarAlCarrito(e){
    const idBoton = e.currentTarget.id;
    const productoAgregado =  productos.find(producto => producto.id === idBoton);

    if(productosEnCarrito.some(producto => producto.id === idBoton)){
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad++;
    } else {
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    }

    actualizarNumerito();

    localStorage.setItem('productos-en-carrito', JSON.stringify(productosEnCarrito));
}

function actualizarNumerito(){
    let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    numerito.innerText = nuevoNumerito;
}

