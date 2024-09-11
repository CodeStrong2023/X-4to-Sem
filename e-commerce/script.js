// Datos de ejemplo de productos
const products = [
    { id: 1, name: 'Producto 1', price: 10 },
    { id: 2, name: 'Producto 2', price: 20 },
    { id: 3, name: 'Producto 3', price: 30 },
    { id: 4, name: 'Producto 3', price: 30 },
    { id: 5, name: 'Producto 3', price: 30 },
    { id: 6, name: 'Producto 3', price: 30 }
];

const cart = [];

// Función para mostrar productos
function displayProducts() {
    const productContainer = document.getElementById('products');
    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.className = 'product';
        productElement.innerHTML = `
            <h3>${product.name}</h3>
            <p>Precio: $${product.price}</p>
            <button onclick="addToCart(${product.id})">Comprar</button>
        `;
        productContainer.appendChild(productElement);
    });
}

// Función para agregar productos al carrito
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    alert(`${product.name} ha sido añadido al carrito.`);
    updateCart();
}

// Función para mostrar los productos del carrito
function displayCart() {
    const cartContainer = document.getElementById('cart-items');
    cartContainer.innerHTML = '';
    cart.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.className = 'cart-item';
        itemElement.innerHTML = `
            <h3>${item.name}</h3>
            <p>Precio: $${item.price}</p>
        `;
        cartContainer.appendChild(itemElement);
    });
}

// Actualizar el carrito en almacenamiento local
function updateCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Cargar carrito desde almacenamiento local
function loadCart() {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
        cart.push(...JSON.parse(storedCart));
        displayCart();
    }
}

// Inicialización de la página
if (document.getElementById('products')) {
    displayProducts();
}

if (document.getElementById('cart-items')) {
    loadCart();
}
