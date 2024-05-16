var noticias = [
  {
    fecha: "10 de mayo de 2024",
    area: "Agraria",
    titulo: "🍎🍊🍋Capacitación en poda de frutales teórica y práctica con los frutales del vivero municipal🍋🍊🍎",
    descripcion: "👩🏻‍🌾👨🏻‍🌾Participaron productores que recibieron material frutícola por medio del programa FOMENTO A LA FRUTICULTURA BONAERENSE del MDA. Como así también alumnos de la Escuela Agraria y técnicos del vivero municipal.",
    imagen: "images/noticias/agraria/agraria10-05-2024.jpg",
    link:"https://www.instagram.com/p/C6y01PBLhqn/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
  },
  {
    fecha: "8 de mayo de 2024",
    area: "Empleo",
    titulo: "Incorporación de egresados de Operador de Fibra Óptica a CLARO",
    descripcion: "👉🏼La Secretaria de Producción, junto al Coordinador de Empleo y el Director del @cfl404berisso recibieron a representantes de la empresa CLARO, quienes se mostraron interesados en incorporar a la mencionada Empresa a egresados y egresadas del curso de Fibra Óptica.",
    imagen: "images/noticias/empleo/empleo08-05-2024.jpg",
    link:"https://www.instagram.com/p/C6ugjGIt_Fr/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
  },
  {
    fecha: "25 de abril de 2024",
    area: "Empleo",
    titulo: "Volver al Trabajo",
    descripcion: "👉🏼Si sos beneficiario/a del Programa Potenciar Trabajo, acércate a la Oficina de Empleo para asesorarte y registrarte en el nuevo Portal Empleo.",
    imagen: "images/noticias/empleo/empleo25-04-2024.jpg",
    link:"https://www.instagram.com/p/C6M9ic5r02s/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
  },
  {
    fecha: "25 de abril de 2024",
    area: "U.Productivas",
    titulo: "✅¡Mercados Bonaerenses todas las semanas!",
    descripcion: "👉🏻A partir del lunes 29 de abril, vas a poder encontrar en diferentes puntos de la ciudad los “Mercados Bonaerenses”.🥬Podrán acceder a diferentes productos a precios populares y con el beneficio de Cuenta DNI.🌧️Se suspende por lluvia.",
    imagen: "images/noticias/Unid.Productivas/UProd25-04-2024.jpg",
    link:"https://www.instagram.com/p/C6MDwo5r8Z9/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
  }
];

// Función para generar dinámicamente el HTML de una noticia
function crearNoticiaHTML(noticia) {
  return `
    <div class="noticia ${noticia.area.toLowerCase()}">
      <div class="imagen-not">
        <img src="${noticia.imagen}" alt="Imagen de la noticia">
      </div>
      <div class="contenido-not">
        <span class="fecha-not">${noticia.fecha}</span>
        <span class="area">${noticia.area}</span>
        <h2 class="titulo-not">${noticia.titulo}</h2>
        <p class="descripcion-not">${noticia.descripcion}</p><br>
        <a href="${noticia.link}" target=_blank>Leer más...<a>
      </div>
    </div>
  `;
}

// Función para agregar las noticias al contenedor
function agregarNoticias() {
  var noticiasContainer = document.getElementById("noticias-container");
  noticiasContainer.innerHTML = ""; // Limpiar contenedor antes de agregar las noticias
  noticias.forEach(function(noticia) {
    noticiasContainer.innerHTML += crearNoticiaHTML(noticia);
  });
}

// Función para filtrar las noticias por área
function filtrarPorArea(area) {
  var noticiasContainer = document.getElementById("noticias-container");
  var noticias = noticiasContainer.getElementsByClassName("noticia");
  for (var i = 0; i < noticias.length; i++) {
    if (area === '' || noticias[i].classList.contains(area.toLowerCase())) {
      noticias[i].style.display = "flex"; // Mostrar noticias si no se selecciona un área o si el área coincide
    } else {
      noticias[i].style.display = "none"; // Ocultar noticias que no coinciden con el área seleccionada
    }
  }

  // Agregar clase activa al botón seleccionado y quitarla de los demás
  var buttons = document.querySelectorAll('.filter-buttons button');
  buttons.forEach(function(button) {
    button.classList.remove('active');
  });
  var activeButton = document.querySelector(`.filter-buttons button[data-area="${area}"]`);
  if (activeButton) {
    activeButton.classList.add('active');
  }
}

// Llamar a la función para agregar las noticias
agregarNoticias();





function filtrarPorPalabra() {
  var keyword = document.getElementById("keyword-input").value.toLowerCase();
  var noticias = document.querySelectorAll(".noticia");
  var resultadosEncontrados = false;

  noticias.forEach(function(noticia) {
    var titulo = noticia.querySelector(".titulo-not").textContent.toLowerCase();
    var descripcion = noticia.querySelector(".descripcion-not").textContent.toLowerCase();

    if (titulo.includes(keyword) || descripcion.includes(keyword)) {
      noticia.style.display = "flex"; // Mostrar noticias que contienen la palabra clave
      resultadosEncontrados = true;
    } else {
      noticia.style.display = "none"; // Ocultar noticias que no contienen la palabra clave
    }
  });

  // Mostrar un mensaje si no se encuentran resultados
  if (!resultadosEncontrados) {
    alert("No se encontraron noticias que coincidan con la palabra clave ingresada.");
  }
}