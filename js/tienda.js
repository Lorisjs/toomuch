// ----------- MÓDULO DE PRODUCTOS (TIENDA) ------------------------

/**
 * Renderiza las tarjetas de productos en la página de la tienda.
 */
function renderizarProductos() {
    const productContainer = document.querySelector("#product-container");
    if (!productContainer) return; // Si no hay contenedor, salir.

    productContainer.innerHTML = productos.map(producto => `
        <div class="product-item">
            <img src="${producto.img}" alt="${producto.name}">
            <!-- Título y botón en la misma línea -->
            <div class="title-button-container">
                <strong>${producto.name}</strong>
                <button class="btn-toggle-descripcion" data-id="${producto.id}">+</button>
            </div>
            <!-- Contenedor dinámico de descripción -->
            <div class="descripcion-container hidden" id="descripcion-${producto.id}"></div>
            <!-- Precio -->
            <p><strong>Precio:</strong> <strong>$${producto.price}</strong></p>
            <!-- Botón para comprar -->
            <button class="btn-comprar" data-id="${producto.id}">Comprar</button>
        </div>
    `).join("");

    // Asociar eventos
    agregarEventosDescripcion();
    agregarEventosCompra();
}

/**
 * Agrega eventos a los botones de descripción (+/-).
 */
function agregarEventosDescripcion() {
    document.querySelectorAll(".btn-toggle-descripcion").forEach(boton => {
        boton.addEventListener("click", (e) => {
            const id = parseInt(e.target.dataset.id);
            toggleDescripcion(id, e.target);
        });
    });
}

/**
 * Agrega eventos a los botones de compra.
 */
function agregarEventosCompra() {
    document.querySelectorAll(".btn-comprar").forEach(boton => {
        boton.addEventListener("click", (e) => {
            const id = parseInt(e.target.dataset.id);
            gestionarAgregarAlCarrito(id); // Llama a la función del carrito en carrito.js
        });
    });
}

// ----------- MÓDULO DE INTERACTIVIDAD (TIENDA) ------------------------

/**
 * Alterna la visibilidad de la descripción de un producto.
 * @param {number} id - ID del producto.
 * @param {HTMLElement} boton - Botón que activa/desactiva la descripción.
 */
function toggleDescripcion(id, boton) {
    const descripcionContainer = document.getElementById(`descripcion-${id}`);

    if (descripcionContainer.classList.contains("hidden")) {
        const producto = productos.find(p => p.id === id); // Buscar el producto en el array.
        if (producto) {
            descripcionContainer.innerHTML = `<p>${producto.description}</p>`; // Insertar la descripción.
        }
        descripcionContainer.classList.remove("hidden"); // Mostrar la descripción.
        boton.textContent = "-"; // Cambiar el texto del botón.
    } else {
        descripcionContainer.innerHTML = ""; // Limpiar la descripción.
        descripcionContainer.classList.add("hidden"); // Ocultar la descripción.
        boton.textContent = "+"; // Cambiar el texto del botón.
    }
}

// ----------- INICIALIZACIÓN DE LA TIENDA ------------------------

/**
 * Inicializa la tienda al cargar la página.
 */
document.addEventListener("DOMContentLoaded", () => {
    if (window.location.pathname.includes("tienda.html")) {
        renderizarProductos();
    }
});

