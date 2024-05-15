function toggleMenu() {
        var menu = document.getElementById('menu-items');
        if (menu) {
            menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
        }
    }

    // Función para cerrar el menú cuando se hace clic fuera de él
    document.addEventListener('click', function(event) {
        var menu = document.querySelector('.mobile-menu');
        var menuToggle = document.querySelector('.menu-toggle');

        // Verifica si se hizo clic fuera del menú y no en el icono de hamburguesa
        if (!menu.contains(event.target) && event.target !== menuToggle) {
            var menuItems = document.getElementById('menu-items');
            if (menuItems) {
                menuItems.style.display = 'none';
            }
        }
    });