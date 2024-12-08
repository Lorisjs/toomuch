// ----------- MÓDULO DEL CARRITO ------------------------

/**
 * Renderiza los productos en el carrito.
 */
function renderizarCarrito() {
    const carritoContainer = document.querySelector("#carrito-container");
    if (!carritoContainer) return;

    carritoContainer.innerHTML = "";

    if (carrito.length === 0) {
        carritoContainer.innerHTML = "<p>El carrito está vacío.</p>";
        return;
    }

    const tabla = document.createElement("table");
    tabla.classList.add("carrito-tabla");
    tabla.innerHTML = `
        <thead>
            <tr>
                <th>Cantidad</th>
                <th>Producto</th>
                <th>Precio Unitario</th>
                <th>Precio Total</th>
                <th>Acciones</th>
            </tr>
        </thead>
        <tbody>
            ${carrito.map(item => `
                <tr>
                    <td>${item.cantidad}</td>
                    <td>${item.name}</td>
                    <td>$${item.price}</td>
                    <td>$${item.precioTotal}</td>
                    <td>
                        <button onclick="modificarCantidad(${item.id}, 1)">+</button>
                        <button onclick="modificarCantidad(${item.id}, -1)">-</button>
                    </td>
                </tr>
            `).join("")}
        </tbody>
    `;
    carritoContainer.appendChild(tabla);

    // Totales
    const subtotal = calcularSubtotal();
    const iva = calcularIVA();
    const total = calcularTotal();

    const resumen = document.createElement("div");
    resumen.classList.add("resumen-totales");
    resumen.innerHTML = `
        <p>Subtotal: $${subtotal.toFixed(2)}</p>
        <p>IVA (21%): $${iva.toFixed(2)}</p>
        <p class="total-final">Total a Pagar: $${total.toFixed(2)}</p>
    `;
    carritoContainer.appendChild(resumen);

    // Botón Pagar
    const botonPagar = document.createElement("button");
    botonPagar.textContent = "Pagar";
    botonPagar.classList.add("boton-pago");
    botonPagar.addEventListener("click", () => {
        window.location.href = "./pedidos.html";
    });
    carritoContainer.appendChild(botonPagar);

    // Botón Limpiar Carrito
    const botonLimpiar = document.createElement("button");
    botonLimpiar.textContent = "Limpiar Carrito";
    botonLimpiar.classList.add("boton-borrar-carrito");
    botonLimpiar.addEventListener("click", limpiarCarrito);
    carritoContainer.appendChild(botonLimpiar);
}

/**
 * Gestiona el flujo de agregar un producto al carrito desde la tienda.
 * @param {number} id - ID del producto que se desea agregar.
 */
window.gestionarAgregarAlCarrito = function (id) {
    const producto = productos.find(p => p.id === id);

    if (!producto || producto.amount <= 0) {
        alert(`Sin stock. El producto "${producto.name}" no fue agregado al carrito.`);
        return;
    }

    const itemEnCarrito = carrito.find(p => p.id === id);

    if (itemEnCarrito) {
        itemEnCarrito.cantidad++;
        itemEnCarrito.precioTotal = itemEnCarrito.cantidad * itemEnCarrito.price;
    } else {
        carrito.push({
            id: producto.id,
            name: producto.name,
            cantidad: 1,
            price: producto.price,
            precioTotal: producto.price,
        });
    }

    producto.amount--; // Reducir stock
    guardarEnLocalStorage("carrito", carrito);

    const seguirComprando = confirm(`El producto "${producto.name}" fue agregado al carrito. ¿Seguir comprando?`);
    if (!seguirComprando) {
        window.location.href = "./carrito.html";
    }
};

/**
 * Modifica la cantidad de un producto en el carrito.
 */
function modificarCantidad(id, cantidad) {
    const item = carrito.find(p => p.id === id);
    const producto = productos.find(p => p.id === id);

    if (!item || !producto) return;

    if (cantidad > 0 && item.cantidad >= producto.amount) {
        alert(`No hay más stock disponible para ${producto.name}.`);
        return;
    }

    item.cantidad += cantidad;

    if (item.cantidad <= 0) {
        carrito = carrito.filter(p => p.id !== id);
    } else {
        item.precioTotal = item.cantidad * item.price;
    }

    if (cantidad > 0) producto.amount--;
    if (cantidad < 0) producto.amount++;

    guardarEnLocalStorage("carrito", carrito);
    renderizarCarrito();
}

/**
 * Limpia el carrito.
 */
function limpiarCarrito() {
    carrito = [];
    productos = generarProductos();
    guardarEnLocalStorage("carrito", carrito);
    renderizarCarrito();
}

// ----------- CALCULADORES ------------------------

/**
 * Calcula el subtotal de los productos en el carrito.
 * @returns {number} Subtotal.
 */
function calcularSubtotal() {
    return carrito.reduce((acc, item) => acc + item.precioTotal, 0);
}

/**
 * Calcula el IVA del subtotal.
 * @returns {number} IVA.
 */
function calcularIVA() {
    return calcularSubtotal() * 0.21;
}

/**
 * Calcula el total a pagar.
 * @returns {number} Total.
 */
function calcularTotal() {
    return calcularSubtotal() + calcularIVA();
}

// ----------- INICIALIZACIÓN ------------------------

document.addEventListener("DOMContentLoaded", () => {
    if (window.location.pathname.includes("carrito.html")) {
        renderizarCarrito();
    }
});
