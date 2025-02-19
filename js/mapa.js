var map = L.map('map').setView([-34.8741, -57.8835], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
}).addTo(map);

// Marcadores con información
var markers = [
    {
        id: 'local1',
        nombre: 'Parque Cívico',
        direccion: 'Av. Montevideo e/ 8 y 11, Berisso',
        latitud: -34.86801,
        longitud: -57.88309,
        imagen: '../images/mapa/local1.png'
    },
    {
        id: 'local2',
        nombre: 'Embarcadero',
        descripcion: 'Excursiones por el delta de Berisso / Salidas.',
        direccion: 'Genova 4551, Berisso',
        latitud: -34.862817,
        longitud: -57.883288,
        imagen: '../images/mapa/local2.png'
    },
    {
        id: 'local3',
        nombre: 'Gimnasio Municipal “Mariano Freire”',
        direccion: '9 y 169, Berisso',
        dias: 'Lunes a viernes',
        horarios: ' 8:00 a 20:00 hs',
        latitud: -34.865972,
        longitud: -57.883015,
        imagen: '../images/mapa/local3.png'
    },
    {
        id: 'local4',
        nombre: 'Casa de Cultura',
        direccion: 'Av. Montevideo 821, Berisso',
        dias: 'Lunes a Viernes',
        horarios: '08:00 a 18:00hs',
        latitud: -34.868659,
        longitud: -57.883612,
        imagen: '../images/mapa/local4.png'
    },
    {
        id: 'local5',
        nombre: 'Club Náutico de Berisso',
        direccion: 'Calle Genova 5003, Berisso',
        dias: 'Todos los días',
        horarios: '08:00 a 20:00hs',
        latitud: -34.862528,
        longitud: -57.882745,
        imagen: '../images/mapa/local5.png'
    },
    {
        id: 'local6',
        nombre: 'Marina del Sur',
        direccion: 'Carlos Gardel n° 5000, Berisso',
        dias: 'Todos los días',
        horarios: '07:00 a 20:00hs',
        latitud: -34.862370,
        longitud: -57.883916,
        imagen: '../images/mapa/local6.png'
    },
    {
        id: 'local7',
        nombre: 'Astillero Martinoli',
        direccion: 'Calle 12 y Arroyo del Saladero, Berisso',
        latitud: -34.865229529019956, 
        longitud: -57.880419877699296,
    },
    {
        id: 'local8',
        nombre: 'Humedal Urbano Génova',
        direccion: 'Avenida Montevideo y Genova, Berisso',
        latitud: -34.86695049832063, 
        longitud: -57.886566620287525,
    },
    {
        id: 'local9',
        nombre: 'Cámara de Turismo',
         // Faltan datos...
        direccion: 'Falta',
        dias: 'Todos los días',
        horarios: '07:00 a 20:00hs',
        latitud: -34.862370,
        longitud: -57.883916,
        imagen: '../images/mapa/local9.png'
    },
    {
        id: 'local10',
        nombre: 'Cooperativa de la Costa (Vino)',
        direccion: 'Av. Montevideo 6420, Berisso',
        dias: 'Martes, jueves y Sábados',
        horarios: '10:00 a 17:00hs',
        latitud: -34.890847, 
        longitud: -57.823018,
        imagen: '../images/mapa/local10.png'
    },
    // Agrega más marcadores según sea necesario
    /*{
        id: 'local4',
        nombre: 'Avenida Montevideo y 16',
        descripcion: 'Descripción de Avenida Montevideo y 16',
        direccion: 'Dirección de Avenida Montevideo y 16',
        dias: 'Todos los días',
        horarios: 'Horarios variables',
        latitud: -34.874945,
        longitud: -57.865035,
        imagen: '../WebTurismo/assets/actividades/monoblock.jpg'
    },*/
];

// Añadir marcadores al mapa
markers.forEach(function(markerData) {
    var marker = L.marker([markerData.latitud, markerData.longitud]).addTo(map);
    marker.bindPopup(generarContenidoInfo(markerData));

    // Evento al pasar el cursor por encima (hover) del marcador
    marker.on('mouseover', function (e) {
        this.bindTooltip(markerData.nombre, { permanent: true, className: "hover-class" }).openTooltip();
    });

    // Evento al salir del cursor del marcador
    marker.on('mouseout', function (e) {
        this.closeTooltip();
    });

    // Asociar el clic en el marcador con la lista lateral
    marker.on('click', function(e) {
        highlightMarker(markerData.id);
    });

});

// Función para resaltar el marcador en el mapa al hacer clic en un lugar
function highlightMarker(placeId) {
    var selectedMarker = markers.find(function(marker) {
        return marker.id === placeId;
    });

    if (selectedMarker) {
        var latlng = L.latLng(selectedMarker.latitud, selectedMarker.longitud);
        map.setView(latlng, 15); // Centrar el mapa en las coordenadas del marcador

        // Mostrar la información del marcador en una ventana emergente al hacer clic en la lista
        var marker = L.marker(latlng).addTo(map);
        marker.bindPopup(generarContenidoInfo(selectedMarker)).openPopup();
    }
}

// Función para generar el contenido de la ventana emergente del marcador
function generarContenidoInfo(localInfo) {
    // Función auxiliar para verificar y generar contenido solo si el valor no es undefined o null
    function crearLinea(etiqueta, valor) {
        return valor ? `<p style="line-height: 0; font-size:10px; margin-bottom: 10px; margin-top: 0 !important;"><strong>${etiqueta}:</strong> ${valor}</p>` : '';
    }

    return `
    <div style="padding: 2px;">
      <h3 style="line-height: 0; font-size:11px; margin-bottom: 10px; margin-top: 0 !important;"><strong>${localInfo.nombre || 'Sin nombre'}</strong></h3>
      ${localInfo.imagen ? `<img src="${localInfo.imagen}" alt="${localInfo.nombre}" style="width: 100px; height: auto; margin-bottom: 10px;">` : ''}
      ${crearLinea('Descripción', localInfo.descripcion)}
      ${crearLinea('Dirección', localInfo.direccion)}
      ${crearLinea('Días de Atención', localInfo.dias)}
      ${crearLinea('Horarios', localInfo.horarios)}
    </div>
    `;
}

// Función para desplegar o contraer una categoría
function toggleCategory(categoryId) {
    var category = document.getElementById(categoryId);
    if (category.style.display === "none") {
        category.style.display = "block";
        restoreTooltips(); // Restablecer los tooltips al abrir el menú
    } else {
        category.style.display = "none";
    }
}

function restoreTooltips() {
    markers.forEach(function(markerData) {
        var marker = L.marker([markerData.latitud, markerData.longitud]);
        marker.bindTooltip(markerData.nombre, { permanent: true, className: "hover-class" }).openTooltip();
    });
}
