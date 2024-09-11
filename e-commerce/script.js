// Productos de ejemplo
const products = [
    { id: 1, name: 'Producto 1', price: 10 },
    { id: 2, name: 'Producto 2', price: 20 },
    { id: 3, name: 'Producto 3', price: 30 }
];

const cart = [];

// Mostrar productos en la página
function displayProducts() {
    const productContainer = document.querySelector('.product-list');
    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.className = 'product';
        productElement.innerHTML = `
            <h3>${product.name}</h3>
            <p>Precio: $${product.price}</p>
            <button onclick="addToCart(${product.id})">Agregar al Carrito</button>
        `;
        productContainer.appendChild(productElement);
    });
}

// Agregar productos al carrito
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    alert(`${product.name} ha sido añadido al carrito.`);
    displayCart();
}

// Mostrar productos en el carrito
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

// Inicializar la página y cargar productos
displayProducts();

document.getElementById('checkout').addEventListener('click', async () => {
    try {
        const response = await fetch('http://localhost:3000/create_preference', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: 'Compra en Mi Tienda',
                quantity: cart.length,
                price: cart.reduce((total, item) => total + item.price, 0)
            })
        });
        
        const data = await response.json();
        window.location.href = `https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=${data.id}`;
    } catch (error) {
        console.error('Error al crear preferencia de pago:', error);
    }
});
