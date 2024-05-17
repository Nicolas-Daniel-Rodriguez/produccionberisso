
//Actividades

const actividades = [
    {
        imagen: "./assets/actividades/general.jpg",
        nombre: "Pesca Embarcada",
        descripcion: "Salidas diarias de pesca 🎣 Embarcada a todas las especies. Desde Club Náutico de Berisso ",
        fecha: "26/04/2024",
        hora: "08:00",
        precio: "35.000",
        categoria: "pesca"
    },
    {
        imagen: "./assets/actividades/general.jpg",
        nombre: "Pesca Embarcada",
        descripcion: "Salidas diarias de pesca 🎣 Embarcada a todas las especies. Desde Club Náutico de Berisso ",
        fecha: "28/04/2024",
        hora: "08:00",
        precio: "35.000",
        categoria: "pesca"
    },
    {
        imagen: "./assets/actividades/general.jpg",
        nombre: "Museo 1871 Abre sus puertas",
        descripcion: "Acércate a Av. Montevideo y esquina 32 y conoce la historia de la ciudad en un solo lugar.",
        fecha: "26/04/2024",
        hora: "15:00",
        precio: "$XX.XX",
        categoria: "paseos"
    },
    {
        imagen: "./assets/actividades/general.jpg",
        nombre: "Museo 1871 Abre sus puertas",
        descripcion: "Acércate a Av. Montevideo y esquina 32 y conoce la historia de la ciudad en un solo lugar.",
        fecha: "27/04/2024",
        hora: "15:00",
        precio: "$XX.XX",
        categoria: "paseos"
    },
    {
        imagen: "./assets/actividades/abril/ceramica26-04.jpg",
        nombre: "Cerámica y merienda",
        descripcion: "La propuesta ofrece una clase en la que aprenderás a pintar un conjunto de piezas que podrás llevarte una vez horneadas, te esperamos en 165 n° 388, Berisso. 𝐑𝐞𝐬𝐞𝐫𝐯𝐚́ 𝐭𝐮 𝐥𝐮𝐠𝐚𝐫 𝐩𝐨𝐫 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 al 2215918610 ",
        fecha: "26/04/2024",
        hora: "17:30",
        precio: "$XX.XX",
        categoria: "paseos"
    },
    {
        imagen: "./assets/actividades/general.jpg",
        nombre: "Pesca Embarcada",
        descripcion: "Salidas diarias de pesca 🎣 Embarcada a todas las especies. Desde Club Náutico de Berisso ",
        fecha: "27/04/2024",
        hora: "08:00",
        precio: "35.000",
        categoria: "pesca"
    },
    {
        imagen: "./assets/actividades/abril/caminata27-04.jpg",
        nombre: "Caminata a Isla Paulino por playa",
        descripcion: "Nos encontramos 9.30 hs. en el Playón Municipal de Montevideo y 11 en Berisso, desde allí comenzaremos la caminata por Terraplén Costero y luego tomar el camino a Palo Blanco que nos llevará hasta el Gran Río.",
        fecha: "27/04/2024",
        hora: "09:30",
        precio: "$XX.XX",
        categoria: "paseos"
    },
    {
        imagen: "./assets/actividades/general.jpg",
        nombre: "Visita a viñedo + visita a Cooperativa de la Costa c/ degustación de vinos",
        descripcion: "Visitamos un viñedo y luego la Cooperativa de la Costa en Av. Montevideo y calle 81, Los Talas. Incluye degustación de vinos. Requisito: Contar con movilidad propia. Inscripción previa por WhatsApp al 221-5249934",
        fecha: "27/04/2024",
        hora: "11:00",
        precio: "5.000",
        categoria: "paseos"
    },
    {
        imagen: "./assets/actividades/general.jpg",
        nombre: "NAVEGACIÓN A VELA ⛵✨",
        descripcion: "Salimos del Club Nautico de Berisso (Genova, 5003). Recomendamos estar 15 min antes. La salida dura 2 horas y media y se recorren los puntos mas emblematicos del delta del Rio Santiago🤩 Podrás vivir la experiencia de aprender a navegar en velero. Incluye consumición🧃",
        fecha: "27/04/2024",
        hora: "14:00",
        precio: "$12.000",
        categoria: "paseos"
    },
    {
        imagen: "./assets/actividades/general.jpg",
        nombre: "NAVEGACIÓN A VELA ⛵✨",
        descripcion: "Salimos del Club Nautico de Berisso (Genova, 5003). Recomendamos estar 15 min antes. La salida dura 2 horas y media y se recorren los puntos mas emblematicos del delta del Rio Santiago🤩 Podrás vivir la experiencia de aprender a navegar en velero. Incluye consumición🧃",
        fecha: "28/04/2024",
        hora: "14:00",
        precio: "$12.000",
        categoria: "paseos"
    },
    {
        imagen: "./assets/actividades/general.jpg",
        nombre: "TRAVESÍA EN CATAMARAN 🛳️",
        descripcion: "Salimos desde el club Marina del Sur (Carlos Gardel 5000). Incluye 2 hs y media aproximadamente de navegación con coordinación, degustacion de vino de la costa 🍷, bebida (gaseosas, agua, té y café) y cosas dulces 🍰. Podes traer equipo de mate🧉",
        fecha: "28/04/2024",
        hora: "11:00",
        precio: "$10.000",
        categoria: "paseos"
    },
    {
        imagen: "./assets/actividades/general.jpg",
        nombre: "Pesca Embarcada",
        descripcion: "Salidas diarias de pesca 🎣 Embarcada a todas las especies. Desde Club Náutico de Berisso ",
        fecha: "17/05/2024",
        hora: "08:00",
        precio: "35.000",
        categoria: "pesca"
    },
    {
        imagen: "./assets/actividades/general.jpg",
        nombre: "Pesca Embarcada",
        descripcion: "Salidas diarias de pesca 🎣 Embarcada a todas las especies. Desde Club Náutico de Berisso ",
        fecha: "18/05/2024",
        hora: "08:00",
        precio: "35.000",
        categoria: "pesca"
    },
    {
        imagen: "./assets/actividades/general.jpg",
        nombre: "Pesca Embarcada",
        descripcion: "Salidas diarias de pesca 🎣 Embarcada a todas las especies. Desde Club Náutico de Berisso ",
        fecha: "19/05/2024",
        hora: "08:00",
        precio: "35.000",
        categoria: "pesca"
    },
    {
        imagen: "./assets/actividades/general.jpg",
        nombre: "MONOBLOCK",
        descripcion: "Experiencia gastronómica en 10 y 161 restaurante Monoblock.",
        fecha: "17/05/2024",
        hora: "20:00",
        precio: "xx.xx",
        categoria: "shows"
    },
    {
        imagen: "./assets/actividades/general.jpg",
        nombre: "Si lo sabe cante",
        descripcion: "show en la Casa de Cultura Av. Montevideo entre 10 y 11.",
        fecha: "17/05/2024",
        hora: "20:00",
        precio: "xx.xx",
        categoria: "shows"
    },
    {
        imagen: "./assets/actividades/mayo2024/UNTRIO.jpeg",
        nombre: "UNTRIO Clásico del Rock Nacional",
        descripcion: "Show en Bar Raices Calle 2 y 169",
        fecha: "17/05/2024",
        hora: "21:00",
        precio: "xx.xx",
        categoria: "shows"
    },
    {
        imagen: "./assets/actividades/mayo2024/MACANY.jpeg",
        nombre: "Noche de los Museos MACANY",
        descripcion: "Disfruta del Museo a cielo abierto en la Calle Nueva York.",
        fecha: "18/05/2024",
        hora: "18:00",
        precio: "xx.xx",
        categoria: "paseos"
    },
    {
        imagen: "./assets/actividades/mayo2024/Museo1871.png",
        nombre: "Noche de los Museos - Museo 1871",
        descripcion: "Disfruta del Museo 1871 en Av. Montevideo y calle 32.",
        fecha: "18/05/2024",
        hora: "19:00",
        precio: "xx.xx",
        categoria: "paseos"
    },
    {
        imagen: "./assets/actividades/general.jpg",
        nombre: "MONOBLOCK",
        descripcion: "Experiencia gastronómica en 10 y 161 restaurante Monoblock.",
        fecha: "18/05/2024",
        hora: "20:00",
        precio: "xx.xx",
        categoria: "shows"
    },
    {
        imagen: "./assets/actividades/mayo2024/Abril-Oxalde.jpeg",
        nombre: "Abril Oxalde",
        descripcion: "Show en Bar Raices Calle 2 y 169",
        fecha: "18/05/2024",
        hora: "21:00",
        precio: "xx.xx",
        categoria: "shows"
    },
    {
        imagen: "./assets/actividades/general.jpg",
        nombre: "Un viaje hacia dentro",
        descripcion: "Disfruta de esta experiencia desde el Embarcadero de Berisso (calle Génova 5003) organizado por Berisso Viajes y Pame Yoga.",
        fecha: "19/05/2024",
        hora: "10:00",
        precio: "xx.xx",
        categoria: "paseos"
    },
    {
        imagen: "./assets/actividades/general.jpg",
        nombre: "EXPERIENCIA ISLA PAULINO",
        descripcion: "Disfruta de esta experiencia desde el Embarcadero de Berisso (calle Génova 5003) organizado por la Cámara de Turismo de Berisso.",
        fecha: "19/05/2024",
        hora: "10:00",
        precio: "xx.xx",
        categoria: "paseos"
    },
    {
        imagen: "./assets/actividades/general.jpg",
        nombre: "Juan Sola El Alemán",
        descripcion: "Show en Bar Raices Calle 2 y 169",
        fecha: "19/05/2024",
        hora: "13:00",
        precio: "xx.xx",
        categoria: "shows"
    },
    {
        imagen: "./assets/actividades/mayo2024/Microfono-abierto.jpeg",
        nombre: "Micrófono abierto",
        descripcion: "Show en Bar Raices Calle 2 y 169",
        fecha: "19/05/2024",
        hora: "20:00",
        precio: "xx.xx",
        categoria: "shows"
    },
    // Agrega más objetos para más actividades si es necesario
];

// Obtener el filtro y el contenedor de actividades
const filtroCategoria = document.getElementById("filtroCategoria");
const container = document.getElementById("actividadesContainer");

 // Función para convertir el formato de fecha DD/MM/AAAA al formato MM/DD/AAAA
 function convertirFormatoFecha(fecha) {
    const [dia, mes, año] = fecha.split('/');
    return `${mes}/${dia}/${año}`;
}

// Función para renderizar las tarjetas de actividades
function renderizarActividades(actividades) {
    // Limpiar el contenedor antes de renderizar las nuevas tarjetas
    container.innerHTML = '';

    actividades.forEach(actividad => {
        const tarjeta = document.createElement("div");
        tarjeta.className = "tarjeta-actividad bg-white rounded-lg shadow-md overflow-hidden";
        tarjeta.innerHTML = `
            <img src="${actividad.imagen}" alt="${actividad.nombre}" class="w-full h-48 object-cover m-auto">
            <div class="info p-4">
                <h3 class="text-lg font-semibold mb-2">${actividad.nombre}</h3>
                <p class="text-sm mb-2">${actividad.descripcion}</p>
                <p class="text-sm mb-2">Fecha: ${actividad.fecha}</p>
                <p class="text-sm mb-2">Hora: ${actividad.hora}</p>
                <p class="text-sm mb-2">Precio: ${actividad.precio}</p>
            </div>
        `;

        //<button class="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded">Detalles</button>
        
        //tarjeta.querySelector('button').classList.add('btn-pasado');


        // Agregar clase "pasada" a las actividades con fechas pasadas
        const fechaActual = new Date();
        const fechaActividad = new Date(convertirFormatoFecha(actividad.fecha));

        fechaActual.setHours(0, 0, 0, 0);
        if (fechaActividad < fechaActual) {
            tarjeta.classList.add('pasada');
            tarjeta.querySelector('img').classList.add('img-pasado');
        }

        container.appendChild(tarjeta);
    });
}

// Función para filtrar y ordenar las actividades
function filtrarYOrdenarActividades() {
    const categoriaSeleccionada = filtroCategoria.value;
    let actividadesFiltradas = actividades;

    // Filtrar por categoría si no se selecciona "todos" o "pasadas"
    if (categoriaSeleccionada !== 'todos' && categoriaSeleccionada !== 'pasadas') {
        const fechaActual = new Date();
        fechaActual.setHours(0, 0, 0, 0);
        actividadesFiltradas = actividadesFiltradas.filter(actividad => actividad.categoria === categoriaSeleccionada && 
            new Date(convertirFormatoFecha(actividad.fecha)) >= fechaActual);
    }

    // Filtrar las actividades según la categoría seleccionada
    if (categoriaSeleccionada === 'pasadas') {
        // Mostrar solo actividades cuya fecha ya ha pasado
        actividadesFiltradas = actividadesFiltradas.filter(actividad => {
            // Convertir la fecha al formato adecuado
            const fechaActual = new Date();
            fechaActual.setHours(0, 0, 0, 0);
            const fechaActividad = new Date(convertirFormatoFecha(actividad.fecha));
            return fechaActividad < fechaActual // Actividades con fechas pasadas
        });
    } else if (categoriaSeleccionada === 'todos') {
        // Mostrar solo actividades futuras
        actividadesFiltradas = actividadesFiltradas.filter(actividad => {
            // Convertir la fecha al formato adecuado
            const fechaActual = new Date();
            fechaActual.setHours(0, 0, 0, 0);
            const fechaActividad = new Date(convertirFormatoFecha(actividad.fecha));
            return fechaActividad >= fechaActual; // Actividades con fechas futuras o presentes
        });
    }


    // Ordenar las actividades por fecha (más próxima primero)
    actividadesFiltradas.sort((a, b) => {
        const fechaA = new Date(convertirFormatoFecha(a.fecha));
        const fechaB = new Date(convertirFormatoFecha(b.fecha));
        return fechaA - fechaB;
    });


    // Renderizar las actividades filtradas y ordenadas
    renderizarActividades(actividadesFiltradas);
}

// Escuchar el evento change del filtro
filtroCategoria.addEventListener('change', filtrarYOrdenarActividades);

// Llamar a la función inicialmente para mostrar todas las actividades
filtrarYOrdenarActividades();


