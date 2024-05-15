var map = L.map('map').setView([-34.8741, -57.8835], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
}).addTo(map);

// Marcadores con información
var markers = [
    {
        id: 'local1',
        nombre: 'Museo Almafuerte',
        descripcion: 'Descripción del Museo Almafuerte',
        direccion: 'Dirección del Museo Almafuerte',
        dias: 'Lunes a viernes',
        horarios: '9:00 AM - 5:00 PM',
        registros: 'Registros del Museo Almafuerte',
        publico: 'Si o No',
        habilitacion: 'Municipal y RENAF',
        latitud: -34.8731,
        longitud: -57.8835
    },
    {
        id: 'local2',
        nombre: 'Plaza 17 de Octubre',
        descripcion: 'Descripción de la Plaza 17 de Octubre',
        direccion: 'Dirección de la Plaza 17 de Octubre',
        dias: 'Todos los días',
        horarios: 'Horarios variables',
        registros: 'Registros',
        publico: 'Si o No',
        habilitacion: 'Municipal y RENAF',
        latitud: -34.8711,
        longitud: -57.8815
    },
    {
        id: 'local3',
        nombre: 'Calle 12 entre 151 y 152',
        descripcion: 'Descripción de Calle 12 entre 151 y 152',
        direccion: 'Dirección de Calle 12 entre 151 y 152',
        dias: 'Todos los días',
        horarios: 'Horarios variables',
        registros: 'Registros del',
        publico: 'Si o No',
        habilitacion: 'Municipal y RENAF',
        latitud: -34.885352,
        longitud: -57.894673
    },
    {
        id: 'local4',
        nombre: 'Avenida Montevideo y 16',
        descripcion: 'Descripción de Avenida Montevideo y 16',
        direccion: 'Dirección de Avenida Montevideo y 16',
        dias: 'Todos los días',
        horarios: 'Horarios variables',
        registros: 'Registros del',
        publico: 'Si o No',
        habilitacion: 'Municipal y RENAF',
        latitud: -34.874945,
        longitud: -57.865035
    },
    // Agrega más marcadores según sea necesario
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
  return `
    <div style="padding: 2px;">
      <h3 style="line-height: 0; font-size:11px; margin-bottom: 10px; margin-top: 0 !important;"><strong>${localInfo.nombre}</strong></h3>
      <p style="line-height: 0; font-size:10px; margin-bottom: 10px;margin-top: 0 !important;"><strong>Descripción:</strong> ${localInfo.descripcion}</p>
      <p style="line-height: 0; font-size:10px; margin-bottom: 10px;margin-top: 0 !important;"><strong>Dirección:</strong> ${localInfo.direccion}</p>
      <p style="line-height: 0; font-size:10px; margin-bottom: 10px;margin-top: 0 !important;"><strong>Días de Atención:</strong> ${localInfo.dias}</p>
      <p style="line-height: 0; font-size:10px; margin-bottom: 10px;margin-top: 0 !important;"><strong>Horarios:</strong> ${localInfo.horarios}</p>
      <p style="line-height: 0; font-size:10px; margin-bottom: 10px;margin-top: 0 !important;"><strong>Registros:</strong> ${localInfo.registros}</p>
      <p style="line-height: 0; font-size:10px; margin-bottom: 10px;margin-top: 0 !important;"><strong>Recibe al público:</strong> ${localInfo.publico}</p>
      <p style="line-height: 0; font-size:10px; margin-bottom: 10px;margin-top: 0 !important;"><strong>Habilitación:</strong> ${localInfo.habilitacion}</p>
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
