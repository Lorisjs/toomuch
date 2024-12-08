// ----------- MÓDULO DE DATOS ------------------------

/**
 * Genera un array de productos con sus propiedades.
 * @returns {Array} Array de productos.
 */
function generarProductos() {
    return [
        { id: 1, name: "Caja Porta Sahumerios", description: "Caja de Fibrofácil, pintada con pintura acrílica con detalles en estaño repujado y Strass. Medidas: 25cm x 10cm x 5cm.", amount: 10, price: 1200, img: "./img/portasahumerios.jpg" },
        { id: 2, name: "Caja de Té Mediana Violeta", description: "Caja de Fibrofácil con 4 divisiones, pintada con pintura acrílica con apliques de decoupage sobre estaño. Medidas:20cm x 20cm x 14cm..", amount: 8, price: 1500, img: "./img/cajadetemed.jpg" },
        { id: 3, name: "Cajonera Mediana Rosa Viejo", description: "Cajonera de Fibrofácil con 4 cajones, pintada con pintura acrílica con detalles en estaño repujado y Strass. Medidas: 20cm x 10cm x 20cm.", amount: 5, price: 1800, img: "./img/cajoneramedrosvie.jpg" },
        { id: 4, name: "Alhajero Chico", description: "Alhajero de bizcocho cerámico, pintado con pinturas acrílicas con aplicques de estaño repujado y pintado con laca vitral. Medidas: 11cm x 6cm.", amount: 10, price: 500, img: "./img/alhajeroch.jpg" },
        { id: 5, name: "Alhajero Grande", description: "Alhajero de bizcocho cerámico, pintado con pinturas acrílicas con aplicques de estaño repujado y pintado con laca vitral. Medidas: 8cm x 3cm.", amount: 3, price: 800, img: "./img/alhajerogde.jpg" },
        { id: 6, name: "Cuadro Elefante 1", description: "Marco y base de Fibrofácil, pintado con pintura acrílica y aplique de estaño repujado pintado con laca vitral y detalles de strass.", amount: 4, price: 1200, img: "./img/cuadelef1.jpg" },
        { id: 7, name: "Cuadro Elefante 2", description: "Marco y base de Fibrofácil, pintado con pintura acrílica y aplique de estaño repujado pintado con laca vitral y detalles de strass.", amount: 5, price: 1300, img: "./img/cuadelef2.jpg" },
        { id: 8, name: "Florero Negro", description: "Florero de Bizcocho cerámico, pintado con pintura acrílica y apliques de estaño repujado pintado con detalles de laca vitral. Medidas: 21cm x 7cm x 24cm.", amount: 7, price: 900, img: "./img/floreronegro.jpg" },
        { id: 9, name: "Florero Rosa", description: "Florero de Bizcocho cerámico, pintado con pintura acrílica y apliques de estaño repujado pintado con detalles de laca vitral y strass. Medidas: 33cm x 7cm x 28cm.", amount: 4, price: 980, img: "./img/florerorosa.jpg" },
        { id: 10, name: "Florero Rojo", description: "Florero de Bizcocho cerámico, pintado con pintura acrílica y apliques de estaño repujado pintado con detalles de laca vitral y strass. Medidas: 33cm x 7cm x 28cm.", amount: 6, price: 950, img: "./img/florerorojo.jpg" },
        { id: 11, name: "Cuadro Mano de Fátima Verde y Naranja", description: "Marco y base de Fibrofácil, pintado con pintura acrílica y aplique de estaño repujado pintado con laca vitral y gema. Medidas: 16cmx 23 cm x 1cm.", amount: 6, price: 1400, img: "./img/manofatvn.jpg" },
        { id: 12, name: "Cuadro Mano de Fátima Celeste y Rosa", description: "Marco y base de Fibrofácil, pintado con pintura acrílica y aplique de estaño repujado pintado con laca vitral y gema. Medidas: 16cmx 23 cm x 1cm.", amount: 7, price: 1450, img: "./img/manofatcr.jpg" }
    ];
}

/**
 * Guarda datos en el localStorage.
 * @param {string} key - Clave del localStorage.
 * @param {any} data - Datos a guardar.
 */
function guardarEnLocalStorage(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}

/**
 * Carga datos desde el localStorage.
 * @param {string} key - Clave del localStorage.
 * @returns {any} Datos cargados o un array vacío.
 */
function cargarDeLocalStorage(key) {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : [];
}

// ----------- VARIABLES GLOBALES ------------------------

let productos = generarProductos(); // Array de productos
let carrito = cargarDeLocalStorage("carrito"); // Cargar carrito desde localStorage

// ----------- INICIALIZACIÓN ------------------------

document.addEventListener("DOMContentLoaded", () => {
    console.log("Datos y variables globales cargados correctamente.");
});
