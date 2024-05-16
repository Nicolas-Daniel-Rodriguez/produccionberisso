// Script para video popup razones para visitarla
document.getElementById('open-popup').addEventListener('click', function() {
    document.getElementById('video-popup').style.display = 'block';
  });
  
  document.getElementById('close-popup').addEventListener('click', function() {
    document.getElementById('video-popup').style.display = 'none';
  });

  // Cerrar el popup al hacer clic fuera del video
document.getElementById('video-popup').addEventListener('click', function(event) {
    if (event.target === this) {
      document.getElementById('video-popup').style.display = 'none';
    }
  });

// Script para mostrar/ocultar los submenús desplegables
document.querySelectorAll('.relative').forEach(item => {
    item.addEventListener('mouseenter', () => {
        const submenu = item.querySelector('.dropdown-menu');
        submenu.classList.remove('hidden');
    });

    item.addEventListener('mouseleave', () => {
        const submenu = item.querySelector('.dropdown-menu');
        submenu.classList.add('hidden');
    });
});


// JavaScript para mostrar y ocultar el menú desplegable al hacer clic en el botón de hamburguesa
document.getElementById('menu-toggle').addEventListener('click', function () {
    var navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('active');
});

// JavaScript para cerrar el menú desplegable cuando se hace clic fuera de él
document.addEventListener('click', function(event) {
    var navLinks = document.getElementById('nav-links');
    var menuToggle = document.getElementById('menu-toggle');
    // Verificar si el clic ocurrió fuera del menú desplegable y del botón de hamburguesa
    if (!navLinks.contains(event.target) && !menuToggle.contains(event.target)) {
        navLinks.classList.remove('active');
    }
});

