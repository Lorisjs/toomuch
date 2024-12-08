document.addEventListener('DOMContentLoaded', () => {
    // --- Hamburguesa ---
    /**
     * Alterna el menú hamburguesa.
     */
    function toggleMenu() {
        const menu = document.querySelector('.button-container');
        const hamburger = document.querySelector('.hamburger-menu');
        menu.classList.toggle('show');
        hamburger.classList.toggle('open');
    }

    // Asociar la función al botón hamburguesa
    const hamburgerButton = document.querySelector('.hamburger-menu');
    if (hamburgerButton) {
        hamburgerButton.addEventListener('click', toggleMenu);
    }

    // --- Carrusel ---
    const images = document.querySelectorAll('.carousel-image');
    const totalImages = images.length;

    if (totalImages > 0) { // Validar si el carrusel existe
        let currentIndex = 0;

        /**
         * Cambia la imagen visible en el carrusel.
         * @param {number} index - Índice de la imagen a mostrar.
         */
        function showImage(index) {
            const offset = -index * 100;
            const carousel = document.querySelector('.carousel');
            if (carousel) {
                carousel.style.transform = `translateX(${offset}%)`;
            } else {
                console.error('Elemento .carousel no encontrado.');
            }
        }

        /**
         * Cambia a la siguiente imagen en el carrusel.
         */
        function nextImage() {
            currentIndex = (currentIndex + 1) % totalImages;
            showImage(currentIndex);
        }

        /**
         * Cambia a la imagen anterior en el carrusel.
         */
        function prevImage() {
            currentIndex = (currentIndex - 1 + totalImages) % totalImages;
            showImage(currentIndex);
        }

        // Asociar las funciones a los botones del carrusel
        const nextButton = document.querySelector('.carousel-button.next');
        const prevButton = document.querySelector('.carousel-button.prev');

        if (nextButton && prevButton) {
            nextButton.addEventListener('click', nextImage);
            prevButton.addEventListener('click', prevImage);
        }

        // Autoplay del carrusel
        setInterval(nextImage, 3000); // Cambia de imagen cada 3 segundos
    } else {
        console.info('No se encontraron imágenes en el carrusel.');
    }
});









/*document.addEventListener('DOMContentLoaded', () => {
    // --- Hamburguesa ---
    function toggleMenu() {
        const menu = document.querySelector('.button-container');
        const hamburger = document.querySelector('.hamburger-menu');
        menu.classList.toggle('show');
        hamburger.classList.toggle('open');
    }
    // Asociar la función al botón hamburguesa
    const hamburgerButton = document.querySelector('.hamburger-menu');
    if (hamburgerButton) {
        hamburgerButton.addEventListener('click', toggleMenu);
    }

    // --- Carrusel ---
    let currentIndex = 0;
    const images = document.querySelectorAll('.carousel-image');
    const totalImages = images.length;

    // Cambiar la imagen visible en el carrusel
    function showImage(index) {
        const offset = -index * 100;
        const carousel = document.querySelector('.carousel');
        if (carousel) {
            carousel.style.transform = `translateX(${offset}%)`;
        } else {
            console.error('Elemento .carousel no encontrado.');
        }
    }

    // Ir a la siguiente imagen
    function nextImage() {
        currentIndex = (currentIndex + 1) % totalImages;
        showImage(currentIndex);
    }

    // Ir a la imagen anterior
    function prevImage() {
        currentIndex = (currentIndex - 1 + totalImages) % totalImages;
        showImage(currentIndex);
    }

    // Asociar las funciones a los botones del carrusel
    const nextButton = document.querySelector('.carousel-button.next');
    const prevButton = document.querySelector('.carousel-button.prev');

    if (nextButton && prevButton) {
        nextButton.addEventListener('click', nextImage);
        prevButton.addEventListener('click', prevImage);
    }

    // Autoplay del carrusel
    if (totalImages > 0) {
        setInterval(nextImage, 3000); // Cambia de imagen cada 3 segundos
    } else {
        console.error('No se encontraron imágenes en el carrusel.');
    }
});


/*
//Hamburguesa
function toggleMenu() {
    const menu = document.querySelector('.button-container');
    const hamburger = document.querySelector('.hamburger-menu');
    menu.classList.toggle('show');
    hamburger.classList.toggle('open');
}


//Carrousel
let currentIndex = 0;
const images = document.querySelectorAll('.carousel-image');
const totalImages = images.length;

function showImage(index) {
    const offset = -index * 100;
    document.querySelector('.carousel').style.transform = `translateX(${offset}%)`;
}

function nextImage() {
    currentIndex = (currentIndex + 1) % totalImages;
    showImage(currentIndex);
}

function prevImage() {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    showImage(currentIndex);
}

// Autoplay
setInterval(nextImage, 3000); // Cambia de imagen cada 3 segundos*/

