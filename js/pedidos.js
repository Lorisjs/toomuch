// ----------- MÓDULO DE PEDIDOS ------------------------

/**
 * Renderiza el resumen del carrito en el formulario de pedidos.
 */
function renderizarResumenCarrito() {
    const resumenContainer = document.querySelector("#resumen-carrito");
    if (!resumenContainer) return;

    if (carrito.length === 0) {
        resumenContainer.innerHTML = "<p>El carrito está vacío. Vuelva a la tienda para agregar productos.</p>";
        return;
    }

    const resumenHtml = carrito.map(item => `
        <p>${item.cantidad}x ${item.name}</p>
    `).join("");

    const total = calcularTotal();

    resumenContainer.innerHTML = `
        <h3>Resumen del Pedido</h3>
        ${resumenHtml}
        <p><strong>Total a Pagar:</strong> $${total.toFixed(2)}</p>
        <input type="hidden" name="productos" value="${carrito.map(item => `${item.cantidad}x ${item.name}`).join(", ")}">
        <input type="hidden" name="total" value="${total.toFixed(2)}">
    `;
}

/**
 * Maneja el envío del formulario de pedidos.
 */
function manejarEnvioFormulario() {
    const formulario = document.querySelector("#form-pedidos");
    if (!formulario) return;

    formulario.addEventListener("submit", (e) => {
        e.preventDefault();

        // Validar campos obligatorios
        const camposCompletos = [...formulario.elements].every(input => {
            if (input.type === "submit" || input.type === "reset" || input.type === "hidden") {
                return true;
            }
            return input.value.trim() !== "";
        });

        if (!camposCompletos) {
            alert("Por favor, complete todos los campos obligatorios antes de enviar.");
            return;
        }

        // Mostrar mensaje de éxito y limpiar el carrito
        alert("¡Gracias por tu compra! Nos contactaremos para coordinar el pago y envío.");
        limpiarCarrito(); // Limpia el carrito
        formulario.submit(); // Envía el formulario
    });
}

// ----------- INICIALIZACIÓN ------------------------

document.addEventListener("DOMContentLoaded", () => {
    if (window.location.pathname.includes("pedidos.html")) {
        renderizarResumenCarrito();
        manejarEnvioFormulario();
    }
});
