
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
    {
        imagen: "./assets/actividades/general.jpg",
        nombre: "Pesca Embarcada",
        descripcion: "Salidas diarias de pesca 🎣 Embarcada a todas las especies. Desde Club Náutico de Berisso ",
        fecha: "24/05/2024",
        hora: "08:00",
        precio: "XX.XX",
        categoria: "pesca"
    },
    {
        imagen: "./assets/actividades/general.jpg",
        nombre: "Pesca Embarcada",
        descripcion: "Salidas diarias de pesca 🎣 Embarcada a todas las especies. Desde Club Náutico de Berisso ",
        fecha: "25/05/2024",
        hora: "08:00",
        precio: "XX.XX",
        categoria: "pesca"
    },
    {
        imagen: "./assets/actividades/general.jpg",
        nombre: "Pesca Embarcada",
        descripcion: "Salidas diarias de pesca 🎣 Embarcada a todas las especies. Desde Club Náutico de Berisso ",
        fecha: "26/05/2024",
        hora: "08:00",
        precio: "XX.XX",
        categoria: "pesca"
    },
    {
        imagen: "./assets/actividades/general.jpg",
        nombre: "MONOBLOCK",
        descripcion: "Experiencia gastronómica en 10 y 161 restaurante Monoblock.",
        fecha: "24/05/2024",
        hora: "20:00",
        precio: "xx.xx",
        categoria: "shows"
    },
    {
        imagen: "./assets/actividades/general.jpg",
        nombre: "Mocchi Vuelve a Berisso",
        descripcion: "Show en Bar Raices Calle 2 y 169",
        fecha: "24/05/2024",
        hora: "20:30",
        precio: "xx.xx",
        categoria: "shows"
    },
    {
        imagen: "./assets/actividades/general.jpg",
        nombre: "TRAVESÍA EN YATE 🛳️",
        descripcion: "Salimos desde el club Marina del Sur (Carlos Gardel 5000).",
        fecha: "25/04/2024",
        hora: "17:00",
        precio: "$10.000",
        categoria: "paseos"
    },
    {
        imagen: "./assets/actividades/general.jpg",
        nombre: "DELTA NOCTURNO 🛳️",
        descripcion: "Salimos desde el embarcadero de Berisso (calle Génova 5003).",
        fecha: "25/04/2024",
        hora: "18:30",
        precio: "$7.000",
        categoria: "paseos"
    },
    {
        imagen: "./assets/actividades/general.jpg",
        nombre: "MONOBLOCK",
        descripcion: "Experiencia gastronómica en 10 y 161 restaurante Monoblock.",
        fecha: "25/05/2024",
        hora: "20:00",
        precio: "xx.xx",
        categoria: "shows"
    },
    {
        imagen: "./assets/actividades/general.jpg",
        nombre: "Peña de la Patria",
        descripcion: "Show en Bar Raices Calle 2 y 169",
        fecha: "25/05/2024",
        hora: "21:00",
        precio: "xx.xx",
        categoria: "shows"
    },
    {
        imagen: "./assets/actividades/general.jpg",
        nombre: "Roberta Castro",
        descripcion: "Show en Bar Raices Calle 2 y 169",
        fecha: "26/05/2024",
        hora: "20:00",
        precio: "xx.xx",
        categoria: "shows"
    },
    {
        imagen: "./assets/actividades/general.jpg",
        nombre: "Pesca Embarcada",
        descripcion: "Salidas diarias de pesca 🎣 Embarcada a todas las especies. Desde Club Náutico de Berisso ",
        fecha: "31/05/2024",
        hora: "08:00",
        precio: "XX.XX",
        categoria: "pesca"
    },
    {
        imagen: "./assets/actividades/general.jpg",
        nombre: "Pesca Embarcada",
        descripcion: "Salidas diarias de pesca 🎣 Embarcada a todas las especies. Desde Club Náutico de Berisso ",
        fecha: "01/06/2024",
        hora: "08:00",
        precio: "XX.XX",
        categoria: "pesca"
    },
    {
        imagen: "./assets/actividades/general.jpg",
        nombre: "MONOBLOCK",
        descripcion: "Experiencia gastronómica en 10 y 161 restaurante Monoblock.",
        fecha: "31/05/2024",
        hora: "20:00",
        precio: "xx.xx",
        categoria: "shows"
    },
    {
        imagen: "./assets/actividades/general.jpg",
        nombre: "Pesca Embarcada",
        descripcion: "Salidas diarias de pesca 🎣 Embarcada a todas las especies. Desde Club Náutico de Berisso ",
        fecha: "02/06/2024",
        hora: "08:00",
        precio: "XX.XX",
        categoria: "pesca"
    },
    {
        imagen: "./assets/actividades/general.jpg",
        nombre: "Visita a viñedo + visita a Cooperativa de la Costa c/ degustación de vinos",
        descripcion: "Visitamos un viñedo y luego la Cooperativa de la Costa en Av. Montevideo y calle 81, Los Talas. Incluye degustación de vinos. Requisito: Contar con movilidad propia. Inscripción previa por WhatsApp al 221-5249934",
        fecha: "01/06/2024",
        hora: "11:00",
        precio: "xx.xx",
        categoria: "paseos"
    },
    {
        imagen: "./assets/actividades/general.jpg",
        nombre: "MONOBLOCK",
        descripcion: "Experiencia gastronómica en 10 y 161 restaurante Monoblock.",
        fecha: "01/06/2024",
        hora: "20:00",
        precio: "xx.xx",
        categoria: "shows"
    },
    {
        imagen: "./assets/actividades/junio2024/peatNY2.jpg",
        nombre: "Calle Nueva York Peatonal, Segunda Edición",
        descripcion: "Los invitamos el próximo Domingo 2 de Junio a partir de las 11hs, al segundo encuentro de Calle Nueva York Peatonal, donde reunimos distintas propuestas como visitas guiadas🏛️, música en vivo🎤, gastronomía🍟, y mucho más! No te lo pierdas🥳<br>🙌🏻¡Entrada libre y gratuita!",
        fecha: "02/06/2024",
        hora: "11:00",
        precio: "xx.xx",
        categoria: "paseos"
    },
    {
        imagen: "./assets/actividades/general.jpg",
        nombre: "Pesca Embarcada",
        descripcion: "Salidas diarias de pesca 🎣 Embarcada a todas las especies. Desde Club Náutico de Berisso ",
        fecha: "14/06/2024",
        hora: "08:00",
        precio: "XX.XX",
        categoria: "pesca"
    },
    {
        imagen: "./assets/actividades/junio2024/museo.jpeg",
        nombre: "Museo 1871 Abre sus puertas",
        descripcion: "Acércate a Av. Montevideo y esquina 32 y conoce la historia de la ciudad en un solo lugar. Visita Guiada destinada a la comunidad sorda e hipoacúsica.",
        fecha: "14/06/2024",
        hora: "15:00",
        precio: "$XX.XX",
        categoria: "paseos"
    },
    {
        imagen: "./assets/actividades/general.jpg",
        nombre: "Feria de emprendedoras “Mujeres al Río”",
        descripcion: "Te esperamos desde las 16:30hs en Casa de Culturas Av. Montevideo 821. Organiza Asociación Cultural de la Ribera Berissense.",
        fecha: "14/06/2024",
        hora: "16:30",
        precio: "$XX.XX",
        categoria: "paseos"
    },
    {
        imagen: "./assets/actividades/general.jpg",
        nombre: "Pesca Embarcada",
        descripcion: "Salidas diarias de pesca 🎣 Embarcada a todas las especies. Desde Club Náutico de Berisso ",
        fecha: "15/06/2024",
        hora: "08:00",
        precio: "XX.XX",
        categoria: "pesca"
    },
    {
        imagen: "./assets/actividades/general.jpg",
        nombre: "MONOBLOCK",
        descripcion: "Experiencia gastronómica en 10 y 161 restaurante Monoblock.",
        fecha: "14/06/2024",
        hora: "20:00",
        precio: "xx.xx",
        categoria: "shows"
    },
    {
        imagen: "./assets/actividades/junio2024/fajre.jpeg",
        nombre: "Cena por pasos en Fajre",
        descripcion: "Te esperamos desde las 21:00hs en Calle 11 N°4077 con reserva previa. Organiza Restaurante Fajre y Hogar Árabe Argentino de Berisso.",
        fecha: "14/06/2024",
        hora: "21:00",
        precio: "xx.xx",
        categoria: "shows"
    },
    {
        imagen: "./assets/actividades/general.jpg",
        nombre: "Pesca Embarcada",
        descripcion: "Salidas diarias de pesca 🎣 Embarcada a todas las especies. Desde Club Náutico de Berisso ",
        fecha: "16/06/2024",
        hora: "08:00",
        precio: "XX.XX",
        categoria: "pesca"
    },
    {
        imagen: "./assets/actividades/general.jpg",
        nombre: "Visita a viñedo + visita a Cooperativa de la Costa c/ degustación de vinos",
        descripcion: "Visitamos un viñedo y luego la Cooperativa de la Costa en Av. Montevideo y calle 81, Los Talas. Incluye degustación de vinos. Requisito: Contar con movilidad propia. Inscripción previa por WhatsApp al 221-5249934",
        fecha: "15/06/2024",
        hora: "11:00",
        precio: "xx.xx",
        categoria: "paseos"
    },
    {
        imagen: "./assets/actividades/junio2024/nav.jpeg",
        nombre: "NAVEGACIÓN A VELA ⛵✨",
        descripcion: "Salimos del Club Nautico de Berisso (Genova, 5003). Recomendamos estar 15 min antes. La salida dura 2 horas y media y se recorren los puntos mas emblematicos del delta del Rio Santiago🤩 Podrás vivir la experiencia de aprender a navegar en velero. Incluye consumición🧃",
        fecha: "15/06/2024",
        hora: "14:00",
        precio: "$xx.xx",
        categoria: "paseos"
    },
    {
        imagen: "./assets/actividades/general.jpg",
        nombre: "Feria de emprendedoras “Mujeres al Río”",
        descripcion: "Te esperamos desde las 16:30hs en Casa de Culturas Av. Montevideo 821. Organiza Asociación Cultural de la Ribera Berissense.",
        fecha: "15/06/2024",
        hora: "16:30",
        precio: "$XX.XX",
        categoria: "paseos"
    },
    {
        imagen: "./assets/actividades/general.jpg",
        nombre: "MONOBLOCK",
        descripcion: "Experiencia gastronómica en 10 y 161 restaurante Monoblock.",
        fecha: "15/06/2024",
        hora: "20:00",
        precio: "xx.xx",
        categoria: "shows"
    },
    {
        imagen: "./assets/actividades/general.jpg",
        nombre: "Proyecto R",
        descripcion: "Poética de una emancipación, a las 21hs en Sala TCB Nueva York y Marsella (2 y 169). Organiza Teatro Comunitario y Compañía Teatral Pulsión.",
        fecha: "15/06/2024",
        hora: "21:00",
        precio: "xx.xx",
        categoria: "shows"
    },
    {
        imagen: "./assets/actividades/junio2024/trio.jpeg",
        nombre: "Trio Cohiba",
        descripcion: "Te esperamos a las 21:00hs en Bar Raíces Calle 2 y 169 para disfrutar juntos. Organiza Bar Raíces.",
        fecha: "15/06/2024",
        hora: "21:00",
        precio: "xx.xx",
        categoria: "shows"
    },
    {
        imagen: "./assets/actividades/junio2024/roberta.jpeg",
        nombre: "Roberta Castro",
        descripcion: "Show Unipersonal “La Vecina de Roma a Berisso” en Bar Raices Calle 2 y 169",
        fecha: "16/06/2024",
        hora: "20:00",
        precio: "xx.xx",
        categoria: "shows"
    },
    {
        imagen: "./assets/actividades/junio2024/20-06-23-06/bandera.jpeg",
        nombre: "Encuentro del Litoral “Festejo día de la Bandera”",
        descripcion: "Te esperamos este jueves 20 de Junio en el Centro Hogar Amor para disfutar juntos este Día de la Bandera.",
        fecha: "20/06/2024",
        hora: "12:00",
        precio: "1000.00",
        categoria: "shows"
    },
    {
        imagen: "./assets/actividades/junio2024/20-06-23-06/delta.jpeg",
        nombre: "TRAVESÍA EN YATE 🛳️",
        descripcion: "Salimos desde el club Marina del Sur (Carlos Gardel 5000). Incluye 2 hs y media aproximadamente de navegación con coordinación, degustacion de vino de la costa 🍷, bebida (gaseosas, agua, té y café) y cosas dulces 🍰. Podes traer equipo de mate🧉",
        fecha: "20/06/2024",
        hora: "16:00",
        precio: "$12.000",
        categoria: "paseos"
    },
    {
        imagen: "./assets/actividades/junio2024/20-06-23-06/delta.jpeg",
        nombre: "DELTA NOCTURNO 🛳️",
        descripcion: "El recorrido por el Rio Santiago durará 1 hora y 30 minutos aprox. Incluye guiada y degustación de vino de la costa, tipico de Berisso🍷",
        fecha: "20/06/2024",
        hora: "18:00",
        precio: "$7.000",
        categoria: "paseos"
    },
    {
        imagen: "./assets/actividades/junio2024/20-06-23-06/noHayUnoSinDos.jpeg",
        nombre: "NO HAY UNO SIN DOS",
        descripcion: "Te esperamos en el Bar Raices, Calle 2 y 169 para disfrutar de este Shows.",
        fecha: "20/06/2024",
        hora: "21:00",
        precio: "$XX.XX",
        categoria: "shows"
    },
    {
        imagen: "./assets/actividades/general.jpg",
        nombre: "Pesca Embarcada",
        descripcion: "Salidas diarias de pesca 🎣 Embarcada a todas las especies. Desde Club Náutico de Berisso ",
        fecha: "21/06/2024",
        hora: "08:00",
        precio: "XX.XX",
        categoria: "pesca"
    },
    {
        imagen: "./assets/actividades/junio2024/20-06-23-06/delta.jpeg",
        nombre: "TRAVESÍA EN YATE 🛳️",
        descripcion: "Salimos desde el club Marina del Sur (Carlos Gardel 5000). Incluye 2 hs y media aproximadamente de navegación con coordinación, degustacion de vino de la costa 🍷, bebida (gaseosas, agua, té y café) y cosas dulces 🍰. Podes traer equipo de mate🧉",
        fecha: "21/06/2024",
        hora: "16:00",
        precio: "$12.000",
        categoria: "paseos"
    },
    {
        imagen: "./assets/actividades/junio2024/20-06-23-06/delta.jpeg",
        nombre: "DELTA NOCTURNO 🛳️",
        descripcion: "El recorrido por el Rio Santiago durará 1 hora y 30 minutos aprox. Incluye guiada y degustación de vino de la costa, tipico de Berisso🍷",
        fecha: "21/06/2024",
        hora: "18:00",
        precio: "$7.000",
        categoria: "paseos"
    },
    {
        imagen: "./assets/actividades/general.jpg",
        nombre: "MONOBLOCK",
        descripcion: "Experiencia gastronómica en 10 y 161 restaurante Monoblock.",
        fecha: "21/06/2024",
        hora: "20:00",
        precio: "xx.xx",
        categoria: "shows"
    },
    {
        imagen: "./assets/actividades/junio2024/20-06-23-06/orquestaFlotante.jpeg",
        nombre: "Orquesta Flotante",
        descripcion: "Te esperamos en el Bar Raices, Calle 2 y 169 para disfrutar de este Shows.",
        fecha: "21/06/2024",
        hora: "21:00",
        precio: "$XX.XX",
        categoria: "shows"
    },
    {
        imagen: "./assets/actividades/general.jpg",
        nombre: "Pesca Embarcada",
        descripcion: "Salidas diarias de pesca 🎣 Embarcada a todas las especies. Desde Club Náutico de Berisso ",
        fecha: "22/06/2024",
        hora: "08:00",
        precio: "XX.XX",
        categoria: "pesca"
    },
    {
        imagen: "./assets/actividades/general.jpg",
        nombre: "MONOBLOCK",
        descripcion: "Experiencia gastronómica en 10 y 161 restaurante Monoblock.",
        fecha: "22/06/2024",
        hora: "20:00",
        precio: "xx.xx",
        categoria: "shows"
    },
    {
        imagen: "./assets/actividades/junio2024/20-06-23-06/concierto.jpeg",
        nombre: "Concierto Duo Mancuso Loudet de Villoldo A Falla",
        descripcion: "Te esperamos en el Bar Raices, Calle 2 y 169 para disfrutar de este Shows.",
        fecha: "22/06/2024",
        hora: "21:00",
        precio: "$XX.XX",
        categoria: "shows"
    },
    {
        imagen: "./assets/actividades/general.jpg",
        nombre: "Proyecto R: Poética de una emancipación",
        descripcion: "Te esperamos en la SALA TCB (Nueva York y Marsella). Organiza Compañía Teatral Pulsión y Sala TCB.",
        fecha: "22/06/2024",
        hora: "21:00",
        precio: "$XX.XX",
        categoria: "shows"
    },
    {
        imagen: "./assets/actividades/junio2024/20-06-23-06/losLimones.jpeg",
        nombre: "Los Limones jaidefiniyon",
        descripcion: "Te esperamos en el Bar Raices, Calle 2 y 169 para disfrutar de este Shows.",
        fecha: "22/06/2024",
        hora: "23:45",
        precio: "$XX.XX",
        categoria: "shows"
    },
    {
        imagen: "./assets/actividades/general.jpg",
        nombre: "Pesca Embarcada",
        descripcion: "Salidas diarias de pesca 🎣 Embarcada a todas las especies. Desde Club Náutico de Berisso ",
        fecha: "23/06/2024",
        hora: "08:00",
        precio: "XX.XX",
        categoria: "pesca"
    },
    {
        imagen: "./assets/actividades/junio2024/20-06-23-06/balbis.jpeg",
        nombre: "Balbis",
        descripcion: "Te esperamos en el Bar Raices, Calle 2 y 169 para disfrutar de este Shows.",
        fecha: "23/06/2024",
        hora: "20:00",
        precio: "$XX.XX",
        categoria: "shows"
    },
    {
        imagen: "./assets/actividades/general.jpg",
        nombre: "Pesca Embarcada",
        descripcion: "Salidas diarias de pesca 🎣 Embarcada a todas las especies. Desde Club Náutico de Berisso ",
        fecha: "28/06/2024",
        hora: "08:00",
        precio: "XX.XX",
        categoria: "pesca"
    },
    {
        imagen: "./assets/actividades/general.jpg",
        nombre: "Proyección Pelicula BEPO",
        descripcion: "Este finde veni a disfrutar de la Pelicula BEPO. Te esperamos en Bar Raices Calle 2 y 169.",
        fecha: "28/06/2024",
        hora: "19:00",
        precio: "XX.XX",
        categoria: "shows"
    },
    {
        imagen: "./assets/actividades/general.jpg",
        nombre: "MONOBLOCK",
        descripcion: "Experiencia gastronómica en 10 y 161 restaurante Monoblock.",
        fecha: "28/06/2024",
        hora: "20:00",
        precio: "xx.xx",
        categoria: "shows"
    },
    {
        imagen: "./assets/actividades/general.jpg",
        nombre: "La Río Grande Ensamble Latino",
        descripcion: "Este finde veni a disfrutar de este show. Te esperamos en Bar Raices Calle 2 y 169.",
        fecha: "28/06/2024",
        hora: "21:00",
        precio: "XX.XX",
        categoria: "shows"
    },
    {
        imagen: "./assets/actividades/general.jpg",
        nombre: "Pesca Embarcada",
        descripcion: "Salidas diarias de pesca 🎣 Embarcada a todas las especies. Desde Club Náutico de Berisso ",
        fecha: "29/06/2024",
        hora: "08:00",
        precio: "XX.XX",
        categoria: "pesca"
    },
    {
        imagen: "./assets/actividades/general.jpg",
        nombre: "MONOBLOCK",
        descripcion: "Experiencia gastronómica en 10 y 161 restaurante Monoblock.",
        fecha: "29/06/2024",
        hora: "20:00",
        precio: "xx.xx",
        categoria: "shows"
    },
    {
        imagen: "./assets/actividades/general.jpg",
        nombre: "Milonga Búlgara",
        descripcion: "Veni a disfrutar este sabado de esta Milonga en la Colectividad Búlgara, Av. Montevideo e/ 19 y 20.",
        fecha: "29/06/2024",
        hora: "21:00",
        precio: "$XX.XX",
        categoria: "shows"
    },
    {
        imagen: "./assets/actividades/general.jpg",
        nombre: "Pesca Embarcada",
        descripcion: "Salidas diarias de pesca 🎣 Embarcada a todas las especies. Desde Club Náutico de Berisso ",
        fecha: "30/06/2024",
        hora: "08:00",
        precio: "XX.XX",
        categoria: "pesca"
    },
    {
        imagen: "./assets/actividades/general.jpg",
        nombre: "Cross de Aventura - Fiesta del Vino de la Costa",
        descripcion: "Este domingo veni a disfrutar de esta carrera en Av. Montevideo y calle 81, Los Talas. Organiza Circulo De Atletas Veteranos Platenses – Municipalidad De Berisso - Coop Del Vino De La Costa – Facultad De Cs. Agrarias.",
        fecha: "30/06/2024",
        hora: "09:00",
        precio: "XX.XX",
        categoria: "paseos"
    },
    {
        imagen: "./assets/actividades/pesca.png",
        nombre: "Pesca Embarcada",
        descripcion: "Salidas diarias de pesca 🎣 Embarcada a todas las especies. Desde Club Náutico de Berisso ",
        fecha: "05/07/2024",
        hora: "08:00",
        precio: "XX.XX",
        categoria: "pesca"
    },
    {
        imagen: "./assets/actividades/museo1871.png",
        nombre: "Museo 1871 Abre sus puertas",
        descripcion: "Acércate a Av. Montevideo y esquina 32 y conoce la historia de la ciudad en un solo lugar. Visita Guiada destinada a la comunidad sorda e hipoacúsica.",
        fecha: "05/07/2024",
        hora: "15:00",
        precio: "$XX.XX",
        categoria: "paseos"
    },
    {
        imagen: "./assets/actividades/monoblock.jpg",
        nombre: "MONOBLOCK",
        descripcion: "Experiencia gastronómica en 10 y 161 restaurante Monoblock.",
        fecha: "05/07/2024",
        hora: "20:00",
        precio: "xx.xx",
        categoria: "shows"
    },
    {
        imagen: "./assets/actividades/pesca.png",
        nombre: "Pesca Embarcada",
        descripcion: "Salidas diarias de pesca 🎣 Embarcada a todas las especies. Desde Club Náutico de Berisso ",
        fecha: "06/07/2024",
        hora: "08:00",
        precio: "XX.XX",
        categoria: "pesca"
    },
    {
        imagen: "../images/noticias/turismo/ruta06-07-2024.jpg",
        nombre: "Tours Gratuitos a Pie – Ruta de la Diversidad Cultural ",
        descripcion: "¡Vení a conocer la cultura de los inmigrantes de la ciudad de Berisso! Este recorrido tendrá comienzo en el Monumento de los Inmigrantes, siguiendo por la Asociación Ucrania de Cultura Prosvita, la Sociedad Italiana, la Sociedad Lituana Mindaugas, y finalizará en el Gimnasio Municipal donde se estará realizando la 21º Fiesta Provincial del Vino de la Costa🍇🍷 <br> ☎️Inscripciones al 221-571-6163",
        fecha: "06/07/2024",
        hora: "10:00",
        precio: "XX.XX",
        categoria: "paseos"
    },
    {
        imagen: "./assets/actividades/general.jpg",
        nombre: "Delta del Río Santiago",
        descripcion: "Salida desde el Embarcadero de Berisso (calle Génova 5003) <br> El recorrido por el Rio Santiago durará 1 hora y 30 minutos aprox. Incluye guiada y degustación de vino de la costa, tipico de Berisso🍷",
        fecha: "06/07/2024",
        hora: "12:00",
        precio: "XX.XX",
        categoria: "paseos"
    },
    {
        imagen: "./assets/actividades/general.jpg",
        nombre: "Visita a viñedo isleño",
        descripcion: "Salida desde el Embarcadero de Berisso (calle Génova 5003) a las 14hs.<br> Vamos a conocer el viñedo de la Quinta “La Isabella”. La visita incluye coordinación turística y degustación🍷✨🍃 <br> Volveremos a las 16 hs. ",
        fecha: "06/07/2024",
        hora: "14:00",
        precio: "XX.XX",
        categoria: "paseos"
    },
    {
        imagen: "./assets/actividades/museo1871.png",
        nombre: "Museo 1871 Abre sus puertas",
        descripcion: "Acércate a Av. Montevideo y esquina 32 y conoce la historia de la ciudad en un solo lugar. Visita Guiada destinada a la comunidad sorda e hipoacúsica.",
        fecha: "06/07/2024",
        hora: "15:00",
        precio: "$XX.XX",
        categoria: "paseos"
    },
    {
        imagen: "./assets/actividades/macany.png",
        nombre: "Museo a cielo abierto",
        descripcion: "Acércate a la calle Nueva York y conoce la historia de esta emblematica calle en un solo lugar. Organiza MACANY.",
        fecha: "06/07/2024",
        hora: "15:00",
        precio: "$XX.XX",
        categoria: "paseos"
    },
    {
        imagen: "./assets/actividades/monoblock.jpg",
        nombre: "MONOBLOCK",
        descripcion: "Experiencia gastronómica en 10 y 161 restaurante Monoblock.",
        fecha: "06/07/2024",
        hora: "20:00",
        precio: "xx.xx",
        categoria: "shows"
    },
    {
        imagen: "./assets/actividades/julio2024/copani.jpeg",
        nombre: "Ignacio Copani “Juglarse la Vida”",
        descripcion: "Este finde veni a disfrutar de este show. Te esperamos en Bar Raices Calle 2 y 169.",
        fecha: "06/07/2024",
        hora: "21:00",
        precio: "XX.XX",
        categoria: "shows"
    },
    {
        imagen: "./assets/actividades/pesca.png",
        nombre: "Pesca Embarcada",
        descripcion: "Salidas diarias de pesca 🎣 Embarcada a todas las especies. Desde Club Náutico de Berisso ",
        fecha: "07/07/2024",
        hora: "08:00",
        precio: "XX.XX",
        categoria: "pesca"
    },
    {
        imagen: "./assets/actividades/general.jpg",
        nombre: "Delta del Río Santiago",
        descripcion: "Salida desde el Embarcadero de Berisso (calle Génova 5003) <br> El recorrido por el Rio Santiago durará 1 hora y 30 minutos aprox. Incluye guiada y degustación de vino de la costa, tipico de Berisso🍷",
        fecha: "07/07/2024",
        hora: "12:00",
        precio: "XX.XX",
        categoria: "paseos"
    },
    {
        imagen: "./assets/actividades/general.jpg",
        nombre: "Visita a viñedo isleño",
        descripcion: "Salida desde el Embarcadero de Berisso (calle Génova 5003) a las 14hs.<br> Vamos a conocer el viñedo de la Quinta “La Isabella”. La visita incluye coordinación turística y degustación🍷✨🍃 <br> Volveremos a las 16 hs. ",
        fecha: "07/07/2024",
        hora: "14:00",
        precio: "XX.XX",
        categoria: "paseos"
    },
    {
        imagen: "./assets/actividades/macany.png",
        nombre: "Museo a cielo abierto",
        descripcion: "Acércate a la calle Nueva York y conoce la historia de esta emblematica calle en un solo lugar. Organiza MACANY.",
        fecha: "07/07/2024",
        hora: "15:00",
        precio: "$XX.XX",
        categoria: "paseos"
    },
    {
        imagen: "./assets/actividades/general.jpg",
        nombre: "Obra de Teatro 'Atmósfera Carnelli'",
        descripcion: "Acércate este domingo a la SALA TCB (Nueva York y Marsella) y disfruta de esta obra de teatro del Director Nelson Mallach. Organiza SALA TCB.",
        fecha: "07/07/2024",
        hora: "19:00",
        precio: "$5000.00",
        categoria: "shows"
    },
    {
        imagen: "./assets/actividades/pesca.png",
        nombre: "Pesca Embarcada",
        descripcion: "Salidas diarias de pesca 🎣 Embarcada a todas las especies. Desde Club Náutico de Berisso.",
        fecha: "12/07/2024",
        hora: "08:00",
        precio: "$XX.XX",
        categoria: "pesca"
    },
    {
        imagen: "./assets/actividades/monoblock.jpg",
        nombre: "MONOBLOCK",
        descripcion: "Experiencia gastronómica en 10 y 161 restaurante Monoblock.",
        fecha: "12/07/2024",
        hora: "20:00",
        precio: "xx.xx",
        categoria: "shows"
    },
    {
        imagen: "./assets/actividades/general.jpg",
        nombre: "Lidia Borda y Daniel Godfrid",
        descripcion: "Este finde veni a disfrutar de este show. Te esperamos en Bar Raices Calle 2 y 169.",
        fecha: "12/07/2024",
        hora: "21:00",
        precio: "XX.XX",
        categoria: "shows"
    },
    {
        imagen: "./assets/actividades/pesca.png",
        nombre: "Pesca Embarcada",
        descripcion: "Salidas diarias de pesca 🎣 Embarcada a todas las especies. Desde Club Náutico de Berisso.",
        fecha: "13/07/2024",
        hora: "08:00",
        precio: "$XX.XX",
        categoria: "pesca"
    },
    {
        imagen: "./assets/actividades/general.jpg",
        nombre: "Visita a viñedo + visita a Cooperativa de la Costa c/ degustación de vinos",
        descripcion: "Visitamos un viñedo y luego la Cooperativa de la Costa en Av. Montevideo y calle 81, Los Talas. Incluye degustación de vinos. Requisito: Contar con movilidad propia. Inscripción previa por WhatsApp al 221-5249934",
        fecha: "13/07/2024",
        hora: "11:00",
        precio: "xx.xx",
        categoria: "paseos"
    },
    {
        imagen: "./assets/actividades/monoblock.jpg",
        nombre: "MONOBLOCK",
        descripcion: "Experiencia gastronómica en 10 y 161 restaurante Monoblock.",
        fecha: "13/07/2024",
        hora: "20:00",
        precio: "xx.xx",
        categoria: "shows"
    },
    {
        imagen: "./assets/actividades/general.jpg",
        nombre: "Creer o reventar",
        descripcion: "Veni a disfrutar de esta Obra de Teatro en Sala TCB - Nueva York Y Marsella. Organiza Teatro Comunitario de Berisso.",
        fecha: "13/07/2024",
        hora: "20:00",
        precio: "xx.xx",
        categoria: "shows"
    },
    {
        imagen: "./assets/actividades/general.jpg",
        nombre: "Monte Adentro",
        descripcion: "Este finde veni a disfrutar de este show. Te esperamos en Bar Raices Calle 2 y 169.",
        fecha: "13/07/2024",
        hora: "21:00",
        precio: "XX.XX",
        categoria: "shows"
    },
    {
        imagen: "./assets/actividades/general.jpg",
        nombre: "Los Limones Jay Definiyon",
        descripcion: "Este finde veni a disfrutar de este show. Te esperamos en Bar Raices Calle 2 y 169.",
        fecha: "13/07/2024",
        hora: "23:59",
        precio: "XX.XX",
        categoria: "shows"
    },
    {
        imagen: "./assets/actividades/pesca.png",
        nombre: "Pesca Embarcada",
        descripcion: "Salidas diarias de pesca 🎣 Embarcada a todas las especies. Desde Club Náutico de Berisso.",
        fecha: "14/07/2024",
        hora: "08:00",
        precio: "$XX.XX",
        categoria: "pesca"
    },
    {
        imagen: "./assets/actividades/general.jpg",
        nombre: "Experiencia Isla Paulino",
        descripcion: "Salida desde el Embarcadero de Berisso (calle Génova 5003). Organiza Cámara de Turismo Berisso. ",
        fecha: "14/07/2024",
        hora: "10:00",
        precio: "XX.XX",
        categoria: "paseos"
    },
    {
        imagen: "./assets/actividades/general.jpg",
        nombre: "Apertura del Mercado de la Ribera",
        descripcion: "A partir de las 10hs podes pasar por el Mercado, te esperamos. Calle 170 entre 8 y 9. Organiza Mercado de la Ribera.",
        fecha: "14/07/2024",
        hora: "10:00",
        precio: "XX.XX",
        categoria: "paseos"
    },
    {
        imagen: "./assets/actividades/general.jpg",
        nombre: "Delta del Río Santiago",
        descripcion: "Salida desde el Embarcadero de Berisso (calle Génova 5003) <br> El recorrido por el Rio Santiago durará 1 hora y 30 minutos aprox. Incluye guiada y degustación de vino de la costa, tipico de Berisso🍷. Organiza Daniela Mondelo.",
        fecha: "14/07/2024",
        hora: "13:30",
        precio: "XX.XX",
        categoria: "paseos"
    },
    {
        imagen: "./assets/actividades/junio2024/nav.jpeg",
        nombre: "NAVEGACIÓN A VELA ⛵✨",
        descripcion: "Salimos del Club Nautico de Berisso (Genova, 5003). Recomendamos estar 15 min antes. La salida dura 2 horas y media y se recorren los puntos mas emblematicos del delta del Rio Santiago🤩 Podrás vivir la experiencia de aprender a navegar en velero. Incluye consumición🧃",
        fecha: "14/07/2024",
        hora: "14:00",
        precio: "$xx.xx",
        categoria: "paseos"
    },
    {
        imagen: "./assets/actividades/julio2024/yate25al28-07.png",
        nombre: "Puesta de sol en yate privado 🛳️",
        descripcion: "Salimos desde el club Marina del Sur (Carlos Gardel 5000). Incluye 2 hs y media aproximadamente de navegación con coordinación, degustacion de vino de la costa 🍷, bebida (gaseosas, agua, té y café) y cosas dulces 🍰. Podes traer equipo de mate🧉",
        fecha: "25/07/2024",
        hora: "15:00",
        precio: "$13.000",
        categoria: "paseos"
    },
    {
        imagen: "./assets/actividades/pesca.png",
        nombre: "Pesca Embarcada",
        descripcion: "Salidas diarias de pesca 🎣 Embarcada a todas las especies. Desde Club Náutico de Berisso.",
        fecha: "26/07/2024",
        hora: "08:00",
        precio: "$XX.XX",
        categoria: "pesca"
    },
    {
        imagen: "./assets/actividades/julio2024/navAVela26al28-07.png",
        nombre: "NAVEGACIÓN A VELA ⛵✨",
        descripcion: "Salimos del Club Nautico de Berisso (Genova, 5003). Recomendamos estar 15 min antes. La salida dura 2 horas y media y se recorren los puntos mas emblematicos del delta del Rio Santiago🤩 Podrás vivir la experiencia de aprender a navegar en velero. Incluye consumición🧃",
        fecha: "26/07/2024",
        hora: "14:00",
        precio: "$16.000",
        categoria: "paseos"
    },
    {
        imagen: "./assets/actividades/julio2024/islaPaulino26al28-07.png",
        nombre: "Experiencia Isla Paulino",
        descripcion: "Salida desde el Embarcadero de Berisso (calle Génova 5003). Organiza Cámara de Turismo Berisso. ",
        fecha: "26/07/2024",
        hora: "15:00",
        precio: "8.500",
        categoria: "paseos"
    },
    {
        imagen: "./assets/actividades/julio2024/yate25al28-07.png",
        nombre: "Puesta de sol en yate privado 🛳️",
        descripcion: "Salimos desde el club Marina del Sur (Carlos Gardel 5000). Incluye 2 hs y media aproximadamente de navegación con coordinación, degustacion de vino de la costa 🍷, bebida (gaseosas, agua, té y café) y cosas dulces 🍰. Podes traer equipo de mate🧉",
        fecha: "26/07/2024",
        hora: "15:00",
        precio: "$13.000",
        categoria: "paseos"
    },
    {
        imagen: "./assets/actividades/museo1871.png",
        nombre: "Museo 1871 Abre sus puertas",
        descripcion: "Acércate a Av. Montevideo y esquina 32 y conoce la historia de la ciudad en un solo lugar. Visita Guiada destinada a la comunidad sorda e hipoacúsica.",
        fecha: "26/07/2024",
        hora: "15:00",
        precio: "$XX.XX",
        categoria: "paseos"
    },
    {
        imagen: "./assets/actividades/monoblock.jpg",
        nombre: "MONOBLOCK",
        descripcion: "Experiencia gastronómica en 10 y 161 restaurante Monoblock.",
        fecha: "26/07/2024",
        hora: "20:00",
        precio: "xx.xx",
        categoria: "shows"
    },
    {
        imagen: "./assets/actividades/julio2024/showDeTango26-07.png",
        nombre: "Show de tango",
        descripcion: "Este finde veni a disfrutar de este show. Te esperamos en Bar Raices Calle 2 y 169.",
        fecha: "26/07/2024",
        hora: "21:00",
        precio: "XX.XX",
        categoria: "shows"
    },
    {
        imagen: "./assets/actividades/julio2024/fajre.png",
        nombre: "Cena por pasos en Fajre",
        descripcion: "Te esperamos desde las 21:00hs en Calle 11 N°4077 e/ 162n y 163 con reserva previa. Organiza Restaurante Fajre y Hogar Árabe Argentino de Berisso.",
        fecha: "26/07/2024",
        hora: "21:00",
        precio: "xx.xx",
        categoria: "shows"
    },
    {
        imagen: "./assets/actividades/pesca.png",
        nombre: "Pesca Embarcada",
        descripcion: "Salidas diarias de pesca 🎣 Embarcada a todas las especies. Desde Club Náutico de Berisso.",
        fecha: "27/07/2024",
        hora: "08:00",
        precio: "$XX.XX",
        categoria: "pesca"
    },
    {
        imagen: "./assets/actividades/julio2024/visita27-07.png",
        nombre: "Visita a viñedo + visita a Cooperativa de la Costa c/ degustación de vinos",
        descripcion: "Visitamos un viñedo y luego la Cooperativa de la Costa en Av. Montevideo y calle 81, Los Talas. Incluye degustación de vinos. Requisito: Contar con movilidad propia. Inscripción previa por WhatsApp al 221-5249934",
        fecha: "27/07/2024",
        hora: "11:00",
        precio: "xx.xx",
        categoria: "paseos"
    },
    {
        imagen: "./assets/actividades/julio2024/navAVela26al28-07.png",
        nombre: "NAVEGACIÓN A VELA ⛵✨",
        descripcion: "Salimos del Club Nautico de Berisso (Genova, 5003). Recomendamos estar 15 min antes. La salida dura 2 horas y media y se recorren los puntos mas emblematicos del delta del Rio Santiago🤩 Podrás vivir la experiencia de aprender a navegar en velero. Incluye consumición🧃",
        fecha: "27/07/2024",
        hora: "14:00",
        precio: "$16.000",
        categoria: "paseos"
    },
    {
        imagen: "./assets/actividades/julio2024/islaPaulino26al28-07.png",
        nombre: "Experiencia Isla Paulino",
        descripcion: "Salida desde el Embarcadero de Berisso (calle Génova 5003). Organiza Cámara de Turismo Berisso. ",
        fecha: "27/07/2024",
        hora: "15:00",
        precio: "8.500",
        categoria: "paseos"
    },
    {
        imagen: "./assets/actividades/julio2024/yate25al28-07.png",
        nombre: "Puesta de sol en yate privado 🛳️",
        descripcion: "Salimos desde el club Marina del Sur (Carlos Gardel 5000). Incluye 2 hs y media aproximadamente de navegación con coordinación, degustacion de vino de la costa 🍷, bebida (gaseosas, agua, té y café) y cosas dulces 🍰. Podes traer equipo de mate🧉",
        fecha: "27/07/2024",
        hora: "15:00",
        precio: "$13.000",
        categoria: "paseos"
    },
    {
        imagen: "./assets/actividades/museo1871.png",
        nombre: "Museo 1871 Abre sus puertas",
        descripcion: "Acércate a Av. Montevideo y esquina 32 y conoce la historia de la ciudad en un solo lugar. Visita Guiada destinada a la comunidad sorda e hipoacúsica.",
        fecha: "27/07/2024",
        hora: "15:00",
        precio: "$XX.XX",
        categoria: "paseos"
    },
    {
        imagen: "./assets/actividades/general.jpg",
        nombre: "Cuentos para desempacar",
        descripcion: "Veni a disfrutar de este show en Sala TCB - Nueva York Y Marsella. Organiza Teatro Comunitario de Berisso.",
        fecha: "27/07/2024",
        hora: "15:30",
        precio: "xx.xx",
        categoria: "shows"
    },
    {
        imagen: "./assets/actividades/julio2024/deltaNocturno27-07.png",
        nombre: "DELTA NOCTURNO 🛳️",
        descripcion: "El recorrido por el Rio Santiago durará 1 hora y 30 minutos aprox. Incluye guiada y degustación de vino de la costa, tipico de Berisso🍷",
        fecha: "27/07/2024",
        hora: "19:30",
        precio: "$8.000",
        categoria: "paseos"
    },
    {
        imagen: "./assets/actividades/monoblock.jpg",
        nombre: "MONOBLOCK",
        descripcion: "Experiencia gastronómica en 10 y 161 restaurante Monoblock.",
        fecha: "27/07/2024",
        hora: "20:00",
        precio: "xx.xx",
        categoria: "shows"
    },
    {
        imagen: "./assets/actividades/julio2024/diegoDana27-07.png",
        nombre: "Diego Dana",
        descripcion: "Este finde veni a disfrutar de este show. Te esperamos en Bar Raices Calle 2 y 169.",
        fecha: "27/07/2024",
        hora: "21:00",
        precio: "XX.XX",
        categoria: "shows"
    },
    {
        imagen: "./assets/actividades/pesca.png",
        nombre: "Pesca Embarcada",
        descripcion: "Salidas diarias de pesca 🎣 Embarcada a todas las especies. Desde Club Náutico de Berisso.",
        fecha: "28/07/2024",
        hora: "08:00",
        precio: "$XX.XX",
        categoria: "pesca"
    },
    {
        imagen: "./assets/actividades/julio2024/navAVela26al28-07.png",
        nombre: "NAVEGACIÓN A VELA ⛵✨",
        descripcion: "Salimos del Club Nautico de Berisso (Genova, 5003). Recomendamos estar 15 min antes. La salida dura 2 horas y media y se recorren los puntos mas emblematicos del delta del Rio Santiago🤩 Podrás vivir la experiencia de aprender a navegar en velero. Incluye consumición🧃",
        fecha: "28/07/2024",
        hora: "14:00",
        precio: "$16.000",
        categoria: "paseos"
    },
    {
        imagen: "./assets/actividades/julio2024/islaPaulino26al28-07.png",
        nombre: "Experiencia Isla Paulino",
        descripcion: "Salida desde el Embarcadero de Berisso (calle Génova 5003). Organiza Cámara de Turismo Berisso. ",
        fecha: "28/07/2024",
        hora: "15:00",
        precio: "8.500",
        categoria: "paseos"
    },
    {
        imagen: "./assets/actividades/julio2024/yate25al28-07.png",
        nombre: "Puesta de sol en yate privado 🛳️",
        descripcion: "Salimos desde el club Marina del Sur (Carlos Gardel 5000). Incluye 2 hs y media aproximadamente de navegación con coordinación, degustacion de vino de la costa 🍷, bebida (gaseosas, agua, té y café) y cosas dulces 🍰. Podes traer equipo de mate🧉",
        fecha: "28/07/2024",
        hora: "15:00",
        precio: "$13.000",
        categoria: "paseos"
    },
    {
        imagen: "./assets/actividades/julio2024/fascinating25-07.png",
        nombre: "Fascinating jazz quartet",
        descripcion: "Este finde veni a disfrutar de este show. Te esperamos en Bar Raices Calle 2 y 169.",
        fecha: "25/07/2024",
        hora: "21:00",
        precio: "XX.XX",
        categoria: "shows"
    },
    {
        imagen: "./assets/actividades/julio2024/andre28-07.png",
        nombre: "Andre Stolowicky",
        descripcion: "Este finde veni a disfrutar de este show. Te esperamos en Bar Raices Calle 2 y 169.",
        fecha: "28/07/2024",
        hora: "17:00",
        precio: "XX.XX",
        categoria: "shows"
    },
    {
        imagen: "./assets/actividades/julio2024/roberta28-07.png",
        nombre: "Roberta Castro ",
        descripcion: "Este finde veni a disfrutar de este show. Te esperamos en Bar Raices Calle 2 y 169.",
        fecha: "28/07/2024",
        hora: "20:00",
        precio: "XX.XX",
        categoria: "shows"
    },
    {
        imagen: "./assets/actividades/pesca.png",
        nombre: "Pesca Embarcada",
        descripcion: "Salidas diarias de pesca 🎣 Embarcada a todas las especies. Desde Club Náutico de Berisso.",
        fecha: "02/08/2024",
        hora: "08:00",
        precio: "$XX.XX",
        categoria: "pesca"
    },
    {
        imagen: "./assets/actividades/museo1871.png",
        nombre: "Museo 1871 Abre sus puertas",
        descripcion: "Acércate a Av. Montevideo y esquina 32 y conoce la historia de la ciudad en un solo lugar. Visita Guiada destinada a la comunidad sorda e hipoacúsica.",
        fecha: "02/08/2024",
        hora: "15:00",
        precio: "$XX.XX",
        categoria: "paseos"
    },
    {
        imagen: "./assets/actividades/agosto2024/navVela.png",
        nombre: "NAVEGACIÓN A VELA ⛵✨",
        descripcion: "Salimos del Club Nautico de Berisso (Genova, 5003). Recomendamos estar 15 min antes. La salida dura 2 horas y media y se recorren los puntos mas emblematicos del delta del Rio Santiago🤩 Podrás vivir la experiencia de aprender a navegar en velero. Incluye consumición🧃",
        fecha: "02/08/2024",
        hora: "15:30",
        precio: "$16.000",
        categoria: "paseos"
    },
    {
        imagen: "./assets/actividades/monoblock.jpg",
        nombre: "MONOBLOCK",
        descripcion: "Experiencia gastronómica en 10 y 161 restaurante Monoblock.",
        fecha: "02/08/2024",
        hora: "20:00",
        precio: "xx.xx",
        categoria: "shows"
    },
    {
        imagen: "./assets/actividades/agosto2024/raices2-08.png",
        nombre: "Paradigma",
        descripcion: "Este finde veni a disfrutar de este show. Te esperamos en Bar Raices Calle 2 y 169.",
        fecha: "02/08/2024",
        hora: "21:00",
        precio: "XX.XX",
        categoria: "shows"
    },
    {
        imagen: "./assets/actividades/julio2024/fajre.png",
        nombre: "Cena por pasos en Fajre",
        descripcion: "Te esperamos desde las 21:00hs en Calle 11 N°4077 e/ 162n y 163 con reserva previa. Organiza Restaurante Fajre y Hogar Árabe Argentino de Berisso.",
        fecha: "02/08/2024",
        hora: "21:00",
        precio: "xx.xx",
        categoria: "shows"
    },
    {
        imagen: "./assets/actividades/pesca.png",
        nombre: "Pesca Embarcada",
        descripcion: "Salidas diarias de pesca 🎣 Embarcada a todas las especies. Desde Club Náutico de Berisso.",
        fecha: "03/08/2024",
        hora: "08:00",
        precio: "$XX.XX",
        categoria: "pesca"
    },
    {
        imagen: "./assets/actividades/agosto2024/tours.png",
        nombre: "Tours Gratuitos a Pie – Ruta de la Diversidad Cultural ",
        descripcion: "¡Vení a conocer la cultura de los inmigrantes de la ciudad de Berisso! Este recorrido tendrá comienzo en el Monumento de los Inmigrantes, siguiendo por la Colectividad Belarusa (Club Vostok de Berisso), el Club Eslovaco Argentino de Berisso, y finalizará en la Sociedad Cultural Búlgara Iván Vazov✨<br>☎️Inscripciones al 221-571-6163<br>Se suspende por lluvias 🌧️",
        fecha: "03/08/2024",
        hora: "10:00",
        precio: "XX.XX",
        categoria: "paseos"
    },
    {
        imagen: "./assets/actividades/museo1871.png",
        nombre: "Museo 1871 Abre sus puertas",
        descripcion: "Acércate a Av. Montevideo y esquina 32 y conoce la historia de la ciudad en un solo lugar. Visita Guiada destinada a la comunidad sorda e hipoacúsica.",
        fecha: "03/08/2024",
        hora: "15:00",
        precio: "$XX.XX",
        categoria: "paseos"
    },
    {
        imagen: "./assets/actividades/agosto2024/navVela.png",
        nombre: "NAVEGACIÓN A VELA ⛵✨",
        descripcion: "Salimos del Club Nautico de Berisso (Genova, 5003). Recomendamos estar 15 min antes. La salida dura 2 horas y media y se recorren los puntos mas emblematicos del delta del Rio Santiago🤩 Podrás vivir la experiencia de aprender a navegar en velero. Incluye consumición🧃",
        fecha: "03/08/2024",
        hora: "15:30",
        precio: "$16.000",
        categoria: "paseos"
    },
    {
        imagen: "./assets/actividades/agosto2024/yate.png",
        nombre: "Puesta de sol en yate privado 🛳️",
        descripcion: "Salimos desde el club Marina del Sur (Carlos Gardel 5000). Incluye 2 hs y media aproximadamente de navegación con coordinación, degustacion de vino de la costa 🍷, bebida (gaseosas, agua, té y café) y cosas dulces 🍰. Podes traer equipo de mate🧉 con reserva previa.",
        fecha: "03/08/2024",
        hora: "16:00",
        precio: "$14.000",
        categoria: "paseos"
    },
    {
        imagen: "./assets/actividades/monoblock.jpg",
        nombre: "MONOBLOCK",
        descripcion: "Experiencia gastronómica en 10 y 161 restaurante Monoblock.",
        fecha: "03/08/2024",
        hora: "20:00",
        precio: "xx.xx",
        categoria: "shows"
    },
    {
        imagen: "./assets/actividades/agosto2024/raices3-08.png",
        nombre: "“El asunto” con Agustín López Núñez y Patricia Malanca",
        descripcion: "Este finde veni a disfrutar de este show. Te esperamos en Bar Raices Calle 2 y 169.",
        fecha: "03/08/2024",
        hora: "21:00",
        precio: "XX.XX",
        categoria: "shows"
    },
    {
        imagen: "./assets/actividades/pesca.png",
        nombre: "Pesca Embarcada",
        descripcion: "Salidas diarias de pesca 🎣 Embarcada a todas las especies. Desde Club Náutico de Berisso.",
        fecha: "04/08/2024",
        hora: "08:00",
        precio: "$XX.XX",
        categoria: "pesca"
    },
    {
        imagen: "./assets/actividades/junio2024/peatNY2.jpg",
        nombre: "Calle Nueva York Peatonal",
        descripcion: "Los invitamos el próximo Domingo 4 de agosto a partir de las 11hs, a la Calle Nueva York Peatonal, donde reunimos distintas propuestas como visitas guiadas🏛️, música en vivo🎤, gastronomía🍟, y mucho más! No te lo pierdas🥳<br>🙌🏻¡Entrada libre y gratuita!",
        fecha: "04/08/2024",
        hora: "11:00",
        precio: "xx.xx",
        categoria: "paseos"
    },
    {
        imagen: "./assets/actividades/agosto2024/isla.png",
        nombre: "Tarde Isleña",
        descripcion: "Salida desde el Embarcadero de Berisso (calle Génova 5003) Se realizará un recorrido por el Rio Santiago🗺️ Bajaremos en la isla Paulino e iremos a la Quinta “Isabella”. Incluye una infusión☕️ Volveremos a las 17.30 hs. Es con reserva.",
        fecha: "04/08/2024",
        hora: "15:00",
        precio: "$8.500",
        categoria: "paseos"
    },
    {
        imagen: "./assets/actividades/agosto2024/navVela.png",
        nombre: "NAVEGACIÓN A VELA ⛵✨",
        descripcion: "Salimos del Club Nautico de Berisso (Genova, 5003). Recomendamos estar 15 min antes. La salida dura 2 horas y media y se recorren los puntos mas emblematicos del delta del Rio Santiago🤩 Podrás vivir la experiencia de aprender a navegar en velero. Incluye consumición🧃",
        fecha: "04/08/2024",
        hora: "15:30",
        precio: "$16.000",
        categoria: "paseos"
    },
    {
        imagen: "./assets/actividades/agosto2024/yate.png",
        nombre: "Puesta de sol en yate privado 🛳️",
        descripcion: "Salimos desde el club Marina del Sur (Carlos Gardel 5000). Incluye 2 hs y media aproximadamente de navegación con coordinación, degustacion de vino de la costa 🍷, bebida (gaseosas, agua, té y café) y cosas dulces 🍰. Podes traer equipo de mate🧉 con reserva previa.",
        fecha: "04/08/2024",
        hora: "16:00",
        precio: "$14.000",
        categoria: "paseos"
    },
    {
        imagen: "./assets/actividades/agosto2024/raices4-08.png",
        nombre: "Roberta Castro ",
        descripcion: "Este finde veni a disfrutar de este show. Te esperamos en Bar Raices Calle 2 y 169.",
        fecha: "04/08/2024",
        hora: "20:00",
        precio: "XX.XX",
        categoria: "shows"
    },
    {
        imagen: "./assets/actividades/pesca.png",
        nombre: "Pesca Embarcada",
        descripcion: "Salidas diarias de pesca 🎣 Embarcada a todas las especies. Desde Club Náutico de Berisso.",
        fecha: "09/08/2024",
        hora: "08:00",
        precio: "$XX.XX",
        categoria: "pesca"
    },
    {
        imagen: "./assets/actividades/museo1871.png",
        nombre: "Museo 1871 Abre sus puertas",
        descripcion: "Acércate a Av. Montevideo y esquina 32 y conoce la historia de la ciudad en un solo lugar. Visita Guiada destinada a la comunidad sorda e hipoacúsica.",
        fecha: "09/08/2024",
        hora: "15:00",
        precio: "$XX.XX",
        categoria: "paseos"
    },
    {
        imagen: "./assets/actividades/monoblock.jpg",
        nombre: "MONOBLOCK",
        descripcion: "Experiencia gastronómica en 10 y 161 restaurante Monoblock.",
        fecha: "09/08/2024",
        hora: "20:00",
        precio: "xx.xx",
        categoria: "shows"
    },
    {
        imagen: "./assets/actividades/agosto2024/desgustacion.png",
        nombre: "Degustación de cervezas artesanales de invierno",
        descripcion: "💪 Te presentamos al EQUIPO CDB que te va a estar acompañando con litros de la mejor cerveza artesanal de la región! Te esperamos en el Club Almafuerte (calle 8 esquina 156 norte - Berisso)",
        fecha: "09/08/2024",
        hora: "20:00",
        precio: "xx.xx",
        categoria: "shows"
    },
    {
        imagen: "./assets/actividades/agosto2024/peña.jpeg",
        nombre: "Peña Juncal junto a Benja Molina Chazarreta",
        descripcion: "Este finde veni a disfrutar de este show. Te esperamos en Bar Raices Calle 2 y 169.",
        fecha: "09/08/2024",
        hora: "21:00",
        precio: "XX.XX",
        categoria: "shows"
    },
    {
        imagen: "./assets/actividades/julio2024/fajre.png",
        nombre: "Cena por pasos en Fajre",
        descripcion: "Te esperamos desde las 21:00hs en Calle 11 N°4077 e/ 162n y 163 con reserva previa. Organiza Restaurante Fajre y Hogar Árabe Argentino de Berisso.",
        fecha: "09/08/2024",
        hora: "21:00",
        precio: "xx.xx",
        categoria: "shows"
    },
    {
        imagen: "./assets/actividades/pesca.png",
        nombre: "Pesca Embarcada",
        descripcion: "Salidas diarias de pesca 🎣 Embarcada a todas las especies. Desde Club Náutico de Berisso.",
        fecha: "10/08/2024",
        hora: "08:00",
        precio: "$XX.XX",
        categoria: "pesca"
    },
    {
        imagen: "./assets/actividades/agosto2024/viña.png",
        nombre: "Viña, poda y agroecología",
        descripcion: "Te esperamos en la quinta de Pancho Av. Montevideo entre 725 y 726, Los Talas. Organiza la Cooperativa de la Costa de Berisso.",
        fecha: "10/08/2024",
        hora: "09:30",
        precio: "$XX.XX",
        categoria: "paseos"
    },
    {
        imagen: "./assets/actividades/agosto2024/bolleria.png",
        nombre: "Pop Up junto a Osvaldo Gross",
        descripcion: "Te esperamos en La Bolleria, Av Montevideo esquina 9, Berisso. Organiza La Bolleria de Juan M. Herrera.",
        fecha: "10/08/2024",
        hora: "11:00",
        precio: "$XX.XX",
        categoria: "shows"
    },
    {
        imagen: "./assets/actividades/museo1871.png",
        nombre: "Museo 1871 Abre sus puertas",
        descripcion: "Acércate a Av. Montevideo y esquina 32 y conoce la historia de la ciudad en un solo lugar. Visita Guiada destinada a la comunidad sorda e hipoacúsica.",
        fecha: "10/08/2024",
        hora: "15:00",
        precio: "$XX.XX",
        categoria: "paseos"
    },
    {
        imagen: "./assets/actividades/agosto2024/isla.png",
        nombre: "Tarde Isleña",
        descripcion: "Salida desde el Embarcadero de Berisso (calle Génova 5003) Se realizará un recorrido por el Rio Santiago🗺️ Bajaremos en la isla Paulino e iremos a la Quinta “Isabella”. Incluye una infusión☕️ Volveremos a las 17.30 hs. Es con reserva.",
        fecha: "10/08/2024",
        hora: "15:00",
        precio: "$8.500",
        categoria: "paseos"
    },
    {
        imagen: "./assets/actividades/agosto2024/navVela.png",
        nombre: "NAVEGACIÓN A VELA ⛵✨",
        descripcion: "Salimos del Club Nautico de Berisso (Genova, 5003). Recomendamos estar 15 min antes. La salida dura 2 horas y media y se recorren los puntos mas emblematicos del delta del Rio Santiago🤩 Podrás vivir la experiencia de aprender a navegar en velero. Incluye consumición🧃",
        fecha: "10/08/2024",
        hora: "15:30",
        precio: "$16.000",
        categoria: "paseos"
    },
    {
        imagen: "./assets/actividades/agosto2024/yate.png",
        nombre: "Puesta de sol en yate privado 🛳️",
        descripcion: "Salimos desde el club Marina del Sur (Carlos Gardel 5000). Incluye 2 hs y media aproximadamente de navegación con coordinación, degustacion de vino de la costa 🍷, bebida (gaseosas, agua, té y café) y cosas dulces 🍰. Podes traer equipo de mate🧉 con reserva previa.",
        fecha: "10/08/2024",
        hora: "16:00",
        precio: "$14.000",
        categoria: "paseos"
    },
    {
        imagen: "./assets/actividades/agosto2024/creer.png",
        nombre: "Creer o reventar",
        descripcion: "Veni a disfrutar de este show en Sala TCB - Nueva York Y Marsella. Organiza Teatro Comunitario de Berisso.",
        fecha: "10/08/2024",
        hora: "20:00",
        precio: "xx.xx",
        categoria: "shows"
    },
    {
        imagen: "./assets/actividades/monoblock.jpg",
        nombre: "MONOBLOCK",
        descripcion: "Experiencia gastronómica en 10 y 161 restaurante Monoblock.",
        fecha: "10/08/2024",
        hora: "20:00",
        precio: "xx.xx",
        categoria: "shows"
    },
    {
        imagen: "./assets/actividades/agosto2024/cena.png",
        nombre: "Cena show con “Doble o nada” en Fajre ",
        descripcion: "Te esperamos desde las 22:00hs en Calle 11 N°4077 e/ 162n y 163 con reserva previa. Organiza Restaurante Fajre y Hogar Árabe Argentino de Berisso.",
        fecha: "10/08/2024",
        hora: "22:00",
        precio: "xx.xx",
        categoria: "shows"
    },
    {
        imagen: "./assets/actividades/pesca.png",
        nombre: "Pesca Embarcada",
        descripcion: "Salidas diarias de pesca 🎣 Embarcada a todas las especies. Desde Club Náutico de Berisso.",
        fecha: "11/08/2024",
        hora: "08:00",
        precio: "$XX.XX",
        categoria: "pesca"
    },
    {
        imagen: "./assets/actividades/julio2024/islaPaulino26al28-07.png",
        nombre: "Experiencia Isla Paulino",
        descripcion: "Salida desde el Embarcadero de Berisso (calle Génova 5003). Organiza Cámara de Turismo Berisso. ",
        fecha: "11/08/2024",
        hora: "10:00",
        precio: "17.500",
        categoria: "paseos"
    },
    {
        imagen: "./assets/actividades/agosto2024/mercado.png",
        nombre: "Mercado de la Ribera",
        descripcion: "El Mercado de la Ribera abre sus puertas para celebrar a la Pachamama a partir de las 10:00hs detrás de la pista de atletismo (170 e/ 8 y 9). Organiza Mercado la Ribera y el Municipio de Berisso.",
        fecha: "11/08/2024",
        hora: "10:00",
        precio: "8.500",
        categoria: "paseos"
    },
    {
        imagen: "./assets/actividades/agosto2024/venezolano.jpeg",
        nombre: "Compartir Venezolano",
        descripcion: "Este finde veni a disfrutar de este show. Te esperamos en Bar Raices Calle 2 y 169.",
        fecha: "11/08/2024",
        hora: "12:30",
        precio: "XX.XX",
        categoria: "shows"
    },
    {
        imagen: "./assets/actividades/agosto2024/navVela.png",
        nombre: "NAVEGACIÓN A VELA ⛵✨",
        descripcion: "Salimos del Club Nautico de Berisso (Genova, 5003). Recomendamos estar 15 min antes. La salida dura 2 horas y media y se recorren los puntos mas emblematicos del delta del Rio Santiago🤩 Podrás vivir la experiencia de aprender a navegar en velero. Incluye consumición🧃",
        fecha: "11/08/2024",
        hora: "15:30",
        precio: "$16.000",
        categoria: "paseos"
    },
    {
        imagen: "./assets/actividades/agosto2024/roberta.jpeg",
        nombre: "Roberta Castro ",
        descripcion: "Este finde veni a disfrutar de este show. Te esperamos en Bar Raices Calle 2 y 169.",
        fecha: "11/08/2024",
        hora: "20:00",
        precio: "XX.XX",
        categoria: "shows"
    },
    {
        imagen: "./assets/actividades/pesca.png",
        nombre: "Pesca Embarcada",
        descripcion: "Salidas diarias de pesca 🎣 Embarcada a todas las especies. Desde Club Náutico de Berisso.",
        fecha: "16/08/2024",
        hora: "07:00",
        precio: "$XX.XX",
        categoria: "pesca"
    },
    {
        imagen: "./assets/actividades/museo1871.png",
        nombre: "Museo 1871 Abre sus puertas",
        descripcion: "Acércate a Av. Montevideo y esquina 32 y conoce la historia de la ciudad en un solo lugar. Visita Guiada destinada a la comunidad sorda e hipoacúsica.",
        fecha: "16/08/2024",
        hora: "15:00",
        precio: "$XX.XX",
        categoria: "paseos"
    },
    {
        imagen: "./assets/actividades/monoblock.jpg",
        nombre: "MONOBLOCK",
        descripcion: "Experiencia gastronómica en 10 y 161 restaurante Monoblock.",
        fecha: "16/08/2024",
        hora: "20:00",
        precio: "xx.xx",
        categoria: "shows"
    },
    {
        imagen: "./assets/actividades/agosto2024/16-8.png",
        nombre: "Noche de tango",
        descripcion: "Este finde veni a disfrutar de este show. Te esperamos en Bar Raices Calle 2 y 169.",
        fecha: "16/08/2024",
        hora: "21:00",
        precio: "XX.XX",
        categoria: "shows"
    },
    {
        imagen: "./assets/actividades/julio2024/fajre.png",
        nombre: "Cena por pasos en Fajre",
        descripcion: "Te esperamos desde las 21:00hs en Calle 11 N°4077 e/ 162n y 163 con reserva previa. Organiza Restaurante Fajre y Hogar Árabe Argentino de Berisso.",
        fecha: "16/08/2024",
        hora: "21:00",
        precio: "xx.xx",
        categoria: "shows"
    },
    {
        imagen: "./assets/actividades/pesca.png",
        nombre: "Pesca Embarcada",
        descripcion: "Salidas diarias de pesca 🎣 Embarcada a todas las especies. Desde Club Náutico de Berisso.",
        fecha: "17/08/2024",
        hora: "07:00",
        precio: "$XX.XX",
        categoria: "pesca"
    },
    {
        imagen: "./assets/actividades/visita.png",
        nombre: "Visita a viñedo + visita a Cooperativa de la Costa c/ degustación de vinos",
        descripcion: "Visitamos un viñedo y luego la Cooperativa de la Costa en Av. Montevideo y calle 81, Los Talas. Incluye degustación de vinos. Requisito: Contar con movilidad propia. Inscripción previa por WhatsApp al 221-5249934",
        fecha: "17/08/2024",
        hora: "11:00",
        precio: "xx.xx",
        categoria: "paseos"
    },
    {
        imagen: "./assets/actividades/agosto2024/dianino.png",
        nombre: "¡Dia de las niñeces! ",
        descripcion: "Este sábado 18 te esperamos desde las 14:00 hs en Plaza 17 de octubre (26 y 164) Berisso, para celebrar el Día de las Niñeces. Organiza Municipalidad de Berisso.",
        fecha: "17/08/2024",
        hora: "14:00",
        precio: "xx.xx",
        categoria: "shows"
    },
    {
        imagen: "./assets/actividades/museo1871.png",
        nombre: "Museo 1871 Abre sus puertas",
        descripcion: "Acércate a Av. Montevideo y esquina 32 y conoce la historia de la ciudad en un solo lugar. Visita Guiada destinada a la comunidad sorda e hipoacúsica.",
        fecha: "17/08/2024",
        hora: "15:00",
        precio: "$XX.XX",
        categoria: "paseos"
    },
    {
        imagen: "./assets/actividades/agosto2024/yate.png",
        nombre: "Travesía en yate privado de luna llena 🛳️",
        descripcion: "Salimos desde el club Marina del Sur (Carlos Gardel 5000). Incluye 2 hs y media aproximadamente de navegación con coordinación, degustacion de vino de la costa 🍷, bebida (gaseosas, agua, té y café) y cosas dulces 🍰. Podes traer equipo de mate🧉 con reserva previa.",
        fecha: "17/08/2024",
        hora: "17:30",
        precio: "$XX.XXX",
        categoria: "paseos"
    },
    {
        imagen: "./assets/actividades/agosto2024/navVela.png",
        nombre: "NAVEGACIÓN A VELA ⛵✨",
        descripcion: "Salimos del Club Nautico de Berisso (Genova, 5003). Recomendamos estar 15 min antes. La salida dura 2 horas y media y se recorren los puntos mas emblematicos del delta del Rio Santiago🤩 Podrás vivir la experiencia de aprender a navegar en velero. Incluye consumición🧃",
        fecha: "17/08/2024",
        hora: "17:30",
        precio: "$XX.XXX",
        categoria: "paseos"
    },
    {
        imagen: "./assets/actividades/delta.png",
        nombre: "DELTA NOCTURNO 🛳️",
        descripcion: "El recorrido por el Rio Santiago durará 1 hora y 30 minutos aprox. Incluye guiada y degustación de vino de la costa, tipico de Berisso🍷",
        fecha: "17/08/2024",
        hora: "19:30",
        precio: "$X.XXX",
        categoria: "paseos"
    },
    {
        imagen: "./assets/actividades/monoblock.jpg",
        nombre: "MONOBLOCK",
        descripcion: "Experiencia gastronómica en 10 y 161 restaurante Monoblock.",
        fecha: "17/08/2024",
        hora: "20:00",
        precio: "xx.xx",
        categoria: "shows"
    },
    {
        imagen: "./assets/actividades/agosto2024/17-8.png",
        nombre: "Vivi Pozzebon con Lautaro Matute",
        descripcion: "Este finde veni a disfrutar de este show. Te esperamos en Bar Raices Calle 2 y 169.",
        fecha: "17/08/2024",
        hora: "21:00",
        precio: "XX.XX",
        categoria: "shows"
    },
    {
        imagen: "./assets/actividades/pesca.png",
        nombre: "Pesca Embarcada",
        descripcion: "Salidas diarias de pesca 🎣 Embarcada a todas las especies. Desde Club Náutico de Berisso.",
        fecha: "18/08/2024",
        hora: "07:00",
        precio: "$XX.XX",
        categoria: "pesca"
    },
    {
        imagen: "./assets/actividades/agosto2024/yate.png",
        nombre: "Travesía en yate privado de luna llena 🛳️",
        descripcion: "Salimos desde el club Marina del Sur (Carlos Gardel 5000). Incluye 2 hs y media aproximadamente de navegación con coordinación, degustacion de vino de la costa 🍷, bebida (gaseosas, agua, té y café) y cosas dulces 🍰. Podes traer equipo de mate🧉 con reserva previa.",
        fecha: "18/08/2024",
        hora: "17:30",
        precio: "$XX.XXX",
        categoria: "paseos"
    },
    {
        imagen: "./assets/actividades/agosto2024/navVela.png",
        nombre: "NAVEGACIÓN A VELA ⛵✨",
        descripcion: "Salimos del Club Nautico de Berisso (Genova, 5003). Recomendamos estar 15 min antes. La salida dura 2 horas y media y se recorren los puntos mas emblematicos del delta del Rio Santiago🤩 Podrás vivir la experiencia de aprender a navegar en velero. Incluye consumición🧃",
        fecha: "18/08/2024",
        hora: "17:30",
        precio: "$XX.XXX",
        categoria: "paseos"
    },
    {
        imagen: "./assets/actividades/atmosfera.png",
        nombre: "Átmosfera Carnelli",
        descripcion: "Veni a disfrutar de este show en Sala TCB - Nueva York Y Marsella. Organiza Teatro Comunitario de Berisso.",
        fecha: "18/08/2024",
        hora: "19:00",
        precio: "xx.xx",
        categoria: "shows"
    },
    {
        imagen: "./assets/actividades/delta.png",
        nombre: "DELTA NOCTURNO 🛳️",
        descripcion: "El recorrido por el Rio Santiago durará 1 hora y 30 minutos aprox. Incluye guiada y degustación de vino de la costa, tipico de Berisso🍷",
        fecha: "18/08/2024",
        hora: "19:30",
        precio: "$X.XXX",
        categoria: "paseos"
    },
    {
        imagen: "./assets/actividades/pesca.png",
        nombre: "Pesca Embarcada",
        descripcion: "Salidas diarias de pesca 🎣 Embarcada a todas las especies. Desde Club Náutico de Berisso.",
        fecha: "23/08/2024",
        hora: "07:00",
        precio: "$XX.XX",
        categoria: "pesca"
    },
    {
        imagen: "./assets/actividades/monoblock.jpg",
        nombre: "MONOBLOCK",
        descripcion: "Experiencia gastronómica en 10 y 161 restaurante Monoblock.",
        fecha: "23/08/2024",
        hora: "20:00",
        precio: "X.XXX",
        categoria: "shows"
    },
    {
        imagen: "./assets/actividades/agosto2024/23-8.png",
        nombre: "Versión Animal - Homenaje a Soda Stereo",
        descripcion: "Este finde veni a disfrutar de este show. Te esperamos en Bar Raices Calle 2 y 169.",
        fecha: "23/08/2024",
        hora: "21:00",
        precio: "XX.XX",
        categoria: "shows"
    },
    {
        imagen: "./assets/actividades/pesca.png",
        nombre: "Pesca Embarcada",
        descripcion: "Salidas diarias de pesca 🎣 Embarcada a todas las especies. Desde Club Náutico de Berisso.",
        fecha: "24/08/2024",
        hora: "07:00",
        precio: "$XX.XX",
        categoria: "pesca"
    },
    {
        imagen: "./assets/actividades/agosto2024/navVela.png",
        nombre: "NAVEGACIÓN A VELA ⛵✨",
        descripcion: "Salimos del Club Nautico de Berisso (Genova, 5003). Recomendamos estar 15 min antes. La salida dura 2 horas y media y se recorren los puntos mas emblematicos del delta del Rio Santiago🤩 Podrás vivir la experiencia de aprender a navegar en velero. Incluye consumición🧃",
        fecha: "24/08/2024",
        hora: "14:00",
        precio: "$XX.XXX",
        categoria: "paseos"
    },
    {
        imagen: "./assets/actividades/agosto2024/isla.png",
        nombre: "Tarde Isleña",
        descripcion: "Salida desde el Embarcadero de Berisso (calle Génova 5003) Se realizará un recorrido por el Rio Santiago🗺️ Bajaremos en la isla Paulino e iremos a la Quinta “Isabella”. Incluye una infusión☕️ Volveremos a las 17.30 hs. Es con reserva.",
        fecha: "24/08/2024",
        hora: "15:00",
        precio: "$X.XXX",
        categoria: "paseos"
    },
    {
        imagen: "./assets/actividades/museo1871.png",
        nombre: "Museo 1871 Abre sus puertas",
        descripcion: "Acércate a Av. Montevideo y esquina 32 y conoce la historia de la ciudad en un solo lugar. Visita Guiada destinada a la comunidad sorda e hipoacúsica.",
        fecha: "24/08/2024",
        hora: "15:00",
        precio: "$XX.XX",
        categoria: "paseos"
    },
    {
        imagen: "./assets/actividades/monoblock.jpg",
        nombre: "MONOBLOCK",
        descripcion: "Experiencia gastronómica en 10 y 161 restaurante Monoblock.",
        fecha: "24/08/2024",
        hora: "20:00",
        precio: "X.XXX",
        categoria: "shows"
    },
    {
        imagen: "./assets/actividades/agosto2024/anemonas.png",
        nombre: "Anémonas: un plan imperfecto",
        descripcion: "Veni a disfrutar de este show en Sala TCB - Nueva York Y Marsella. Organiza Teatro Comunitario de Berisso.",
        fecha: "24/08/2024",
        hora: "21:00",
        precio: "xx.xx",
        categoria: "shows"
    },
    {
        imagen: "./assets/actividades/agosto2024/24-8.png",
        nombre: "Cachitas Now!",
        descripcion: "Este finde veni a disfrutar de este show. Te esperamos en Bar Raices Calle 2 y 169.",
        fecha: "24/08/2024",
        hora: "22:30",
        precio: "XX.XX",
        categoria: "shows"
    },
    {
        imagen: "./assets/actividades/pesca.png",
        nombre: "Pesca Embarcada",
        descripcion: "Salidas diarias de pesca 🎣 Embarcada a todas las especies. Desde Club Náutico de Berisso.",
        fecha: "25/08/2024",
        hora: "07:00",
        precio: "$XX.XX",
        categoria: "pesca"
    },
    {
        imagen: "./assets/actividades/agosto2024/25-8.png",
        nombre: "El Alemán y Juan Solá",
        descripcion: "Este finde veni a disfrutar de este show. Te esperamos en Bar Raices Calle 2 y 169.",
        fecha: "25/08/2024",
        hora: "13:00",
        precio: "XX.XX",
        categoria: "shows"
    },
    {
        imagen: "./assets/actividades/agosto2024/navVela.png",
        nombre: "NAVEGACIÓN A VELA ⛵✨",
        descripcion: "Salimos del Club Nautico de Berisso (Genova, 5003). Recomendamos estar 15 min antes. La salida dura 2 horas y media y se recorren los puntos mas emblematicos del delta del Rio Santiago🤩 Podrás vivir la experiencia de aprender a navegar en velero. Incluye consumición🧃",
        fecha: "25/08/2024",
        hora: "14:00",
        precio: "$XX.XXX",
        categoria: "paseos"
    },
    {
        imagen: "./assets/actividades/atmosfera.png",
        nombre: "Átmosfera Carnelli",
        descripcion: "Veni a disfrutar de este show en Sala TCB - Nueva York Y Marsella. Organiza Teatro Comunitario de Berisso.",
        fecha: "25/08/2024",    
        hora: "19:00",
        precio: "xx.xx",
        categoria: "shows"
    },
    {
        imagen: "./assets/actividades/pesca.png",
        nombre: "Pesca Embarcada",
        descripcion: "Salidas diarias de pesca 🎣 Embarcada a todas las especies. Desde Club Náutico de Berisso.",
        fecha: "30/08/2024",
        hora: "07:00",
        precio: "$XX.XX",
        categoria: "pesca"
    },
    {
        imagen: "./assets/actividades/monoblock.jpg",
        nombre: "MONOBLOCK viernes de cocina a la carta",
        descripcion: "Experiencia gastronómica en 10 y 161 restaurante Monoblock.",
        fecha: "30/08/2024",
        hora: "20:00",
        precio: "X.XXX",
        categoria: "shows"
    },
    {
        imagen: "./assets/actividades/julio2024/fajre.png",
        nombre: "Cena por pasos en Fajre",
        descripcion: "Te esperamos desde las 21:00hs en Calle 11 N°4077 e/ 162n y 163 con reserva previa. Organiza Restaurante Fajre y Hogar Árabe Argentino de Berisso.",
        fecha: "30/08/2024",
        hora: "21:00",
        precio: "xx.xx",
        categoria: "shows"
    },
    {
        imagen: "./assets/actividades/agosto2024/30-8.png",
        nombre: "Arte Rodante",
        descripcion: "Este finde veni a disfrutar de este show. Te esperamos en Bar Raices Calle 2 y 169.",
        fecha: "30/08/2024",
        hora: "21:00",
        precio: "XX.XX",
        categoria: "shows"
    },
    {
        imagen: "./assets/actividades/pesca.png",
        nombre: "Pesca Embarcada",
        descripcion: "Salidas diarias de pesca 🎣 Embarcada a todas las especies. Desde Club Náutico de Berisso.",
        fecha: "31/08/2024",
        hora: "07:00",
        precio: "$XX.XX",
        categoria: "pesca"
    },
    {
        imagen: "./assets/actividades/visita.png",
        nombre: "Visita a viñedo + visita a Cooperativa de la Costa c/ degustación de vinos",
        descripcion: "Visitamos un viñedo y luego la Cooperativa de la Costa en Av. Montevideo y calle 81, Los Talas. Incluye degustación de vinos. Requisito: Contar con movilidad propia. Inscripción previa por WhatsApp al 221-5249934",
        fecha: "31/08/2024",
        hora: "11:00",
        precio: "xx.xx",
        categoria: "paseos"
    },
    {
        imagen: "./assets/actividades/agosto2024/navVela.png",
        nombre: "NAVEGACIÓN A VELA ⛵✨",
        descripcion: "Salimos del Club Nautico de Berisso (Genova, 5003). Recomendamos estar 15 min antes. La salida dura 2 horas y media y se recorren los puntos mas emblematicos del delta del Rio Santiago🤩 Podrás vivir la experiencia de aprender a navegar en velero. Incluye consumición🧃",
        fecha: "31/08/2024",
        hora: "14:00",
        precio: "$XX.XXX",
        categoria: "paseos"
    },
    {
        imagen: "./assets/actividades/museo1871.png",
        nombre: "Museo 1871 Abre sus puertas",
        descripcion: "Acércate a Av. Montevideo y esquina 32 y conoce la historia de la ciudad en un solo lugar. Visita Guiada destinada a la comunidad sorda e hipoacúsica.",
        fecha: "31/08/2024",
        hora: "15:00",
        precio: "$XX.XX",
        categoria: "paseos"
    },
    {
        imagen: "./assets/actividades/monoblock.jpg",
        nombre: "MONOBLOCK sábado de menú por pasos",
        descripcion: "Experiencia gastronómica en 10 y 161 restaurante Monoblock.",
        fecha: "31/08/2024",
        hora: "20:00",
        precio: "X.XXX",
        categoria: "shows"
    },
    {
        imagen: "./assets/actividades/agosto2024/31-8.png",
        nombre: "La Gomería",
        descripcion: "Este finde veni a disfrutar de este show. Te esperamos en Bar Raices Calle 2 y 169.",
        fecha: "31/08/2024",
        hora: "21:00",
        precio: "XX.XX",
        categoria: "shows"
    },
    {
        imagen: "./assets/actividades/pesca.png",
        nombre: "Pesca Embarcada",
        descripcion: "Salidas diarias de pesca 🎣 Embarcada a todas las especies. Desde Club Náutico de Berisso.",
        fecha: "01/09/2024",
        hora: "07:00",
        precio: "$XX.XX",
        categoria: "pesca"
    },
    /*{
        imagen: "./assets/actividades/julio2024/islaPaulino26al28-07.png",
        nombre: "Experiencia Isla Paulino",
        descripcion: "Salida desde el Embarcadero de Berisso (calle Génova 5003). Organiza Cámara de Turismo Berisso. ",
        fecha: "01/09/2024",
        hora: "10:00",
        precio: "XX.XXX",
        categoria: "paseos"
    },*/
    {
        imagen: "./assets/actividades/junio2024/peatNY2.jpg",
        nombre: "Calle Nueva York Peatonal",
        descripcion: "Los invitamos el próximo Domingo 1 de septiembre a partir de las 11hs, a la Calle Nueva York Peatonal, donde reunimos distintas propuestas como visitas guiadas🏛️, música en vivo🎤, gastronomía🍟, y mucho más! No te lo pierdas🥳<br>🙌🏻¡Entrada libre y gratuita!",
        fecha: "01/09/2024",
        hora: "11:00",
        precio: "xx.xx",
        categoria: "paseos"
    },
    {
        imagen: "./assets/actividades/agosto2024/navVela.png",
        nombre: "NAVEGACIÓN A VELA ⛵✨",
        descripcion: "Salimos del Club Nautico de Berisso (Genova, 5003). Recomendamos estar 15 min antes. La salida dura 2 horas y media y se recorren los puntos mas emblematicos del delta del Rio Santiago🤩 Podrás vivir la experiencia de aprender a navegar en velero. Incluye consumición🧃",
        fecha: "01/09/2024",
        hora: "14:00",
        precio: "$XX.XXX",
        categoria: "paseos"
    },
    {
        imagen: "./assets/actividades/agosto2024/yate.png",
        nombre: "Puesta de sol en yate privado 🛳️",
        descripcion: "Salimos desde el club Marina del Sur (Carlos Gardel 5000). Incluye 2 hs y media aproximadamente de navegación con coordinación, degustacion de vino de la costa 🍷, bebida (gaseosas, agua, té y café) y cosas dulces 🍰. Podes traer equipo de mate🧉 con reserva previa.",
        fecha: "01/09/2024",
        hora: "16:00",
        precio: "$XX.XXX",
        categoria: "paseos"
    },
    {
        imagen: "./assets/actividades/atmosfera.png",
        nombre: "Átmosfera Carnelli",
        descripcion: "Veni a disfrutar de este show en Sala TCB - Nueva York Y Marsella. Organiza Teatro Comunitario de Berisso.",
        fecha: "01/09/2024",    
        hora: "19:00",
        precio: "XX.XXX",
        categoria: "shows"
    },
    {
        imagen: "./assets/actividades/pesca.png",
        nombre: "Pesca Embarcada",
        descripcion: "Salidas diarias de pesca 🎣 Embarcada a todas las especies. Desde Club Náutico de Berisso.",
        fecha: "06/09/2024",
        hora: "07:00",
        precio: "$XX.XX",
        categoria: "pesca"
    },
    {
        imagen: "./assets/actividades/sep-2024/expoVinos.png",
        nombre: "Expo vinos Berisso",
        descripcion: "Reserva las tuyas al 2216021660 y al 2216124844<br>🍷 Valor de la entrada $15000 que incluye una copa para hacer degustaciones ✨",
        fecha: "06/09/2024",
        hora: "19:00",
        precio: "$15.000",
        categoria: "paseos"
    },
    {
        imagen: "./assets/actividades/monoblock.jpg",
        nombre: "MONOBLOCK viernes de cocina a la carta",
        descripcion: "Experiencia gastronómica en 10 y 161 restaurante Monoblock.",
        fecha: "06/09/2024",
        hora: "20:00",
        precio: "X.XXX",
        categoria: "shows"
    },
    {
        imagen: "./assets/actividades/julio2024/fajre.png",
        nombre: "Última Cena por pasos en Fajre",
        descripcion: "Te esperamos desde las 21:00hs en Calle 11 N°4077 e/ 162n y 163 con reserva previa. Organiza Restaurante Fajre y Hogar Árabe Argentino de Berisso.",
        fecha: "06/09/2024",
        hora: "21:00",
        precio: "xx.xx",
        categoria: "shows"
    },
    {
        imagen: "./assets/actividades/sep-2024/06-09.png",
        nombre: "Noche de Boleros",
        descripcion: "Este finde veni a disfrutar de este show. Te esperamos en Bar Raices Calle 2 y 169.",
        fecha: "06/09/2024",
        hora: "21:00",
        precio: "XX.XX",
        categoria: "shows"
    },
    {
        imagen: "./assets/actividades/pesca.png",
        nombre: "Pesca Embarcada",
        descripcion: "Salidas diarias de pesca 🎣 Embarcada a todas las especies. Desde Club Náutico de Berisso.",
        fecha: "07/09/2024",
        hora: "07:00",
        precio: "$XX.XX",
        categoria: "pesca"
    },
    {
        imagen: "./assets/actividades/visita.png",
        nombre: "Visita a viñedo + visita a Cooperativa de la Costa c/ degustación de vinos",
        descripcion: "Visitamos un viñedo y luego la Cooperativa de la Costa en Av. Montevideo y calle 81, Los Talas. Incluye degustación de vinos. Requisito: Contar con movilidad propia. Inscripción previa por WhatsApp al 221-5249934",
        fecha: "07/09/2024",
        hora: "11:00",
        precio: "XX.XX",
        categoria: "paseos"
    },
    {
        imagen: "./assets/actividades/sep-2024/inmi.png",
        nombre: "Sabores de Berisso",
        descripcion: "Este Sabado a las 13:00hs te esperamos en la Colectividad Búlgara – (Av. Montevideo N°1789). Organiza la Asociación de Entidades Extranjeras de Berisso.",
        fecha: "07/09/2024",
        hora: "13:00",
        precio: "$XX.XX",
        categoria: "paseos"
    },
    {
        imagen: "./assets/actividades/agosto2024/navVela.png",
        nombre: "NAVEGACIÓN A VELA ⛵✨",
        descripcion: "Salimos del Club Nautico de Berisso (Genova, 5003). Recomendamos estar 15 min antes. La salida dura 2 horas y media y se recorren los puntos mas emblematicos del delta del Rio Santiago🤩 Podrás vivir la experiencia de aprender a navegar en velero. Incluye consumición🧃",
        fecha: "07/09/2024",
        hora: "14:00",
        precio: "$XX.XXX",
        categoria: "paseos"
    },
    {
        imagen: "./assets/actividades/museo1871.png",
        nombre: "Museo 1871 Abre sus puertas",
        descripcion: "Acércate a Av. Montevideo y esquina 32 y conoce la historia de la ciudad en un solo lugar. Visita Guiada destinada a la comunidad sorda e hipoacúsica.",
        fecha: "07/09/2024",
        hora: "15:00",
        precio: "$XX.XX",
        categoria: "paseos"
    },
    {
        imagen: "./assets/actividades/agosto2024/yate.png",
        nombre: "Puesta de sol en yate privado 🛳️",
        descripcion: "Salimos desde el club Marina del Sur (Carlos Gardel 5000). Incluye 2 hs y media aproximadamente de navegación con coordinación, degustacion de vino de la costa 🍷, bebida (gaseosas, agua, té y café) y cosas dulces 🍰. Podes traer equipo de mate🧉 con reserva previa.",
        fecha: "07/09/2024",
        hora: "16:00",
        precio: "$XX.XXX",
        categoria: "paseos"
    },
    {
        imagen: "./assets/actividades/monoblock.jpg",
        nombre: "MONOBLOCK sábado de menú por pasos",
        descripcion: "Experiencia gastronómica en 10 y 161 restaurante Monoblock.",
        fecha: "07/09/2024",
        hora: "20:00",
        precio: "X.XXX",
        categoria: "shows"
    },
    {
        imagen: "./assets/actividades/sep-2024/07-09.png",
        nombre: "Cantoras de Berisso",
        descripcion: "Este finde veni a disfrutar de este show. Te esperamos en Bar Raices Calle 2 y 169.",
        fecha: "07/09/2024",
        hora: "21:00",
        precio: "XX.XX",
        categoria: "shows"
    },
    {
        imagen: "./assets/actividades/sep-2024/07-09-1.png",
        nombre: "Los Limones “Jaidefiniyon”",
        descripcion: "Este finde veni a disfrutar de este show. Te esperamos en Bar Raices Calle 2 y 169.",
        fecha: "07/09/2024",
        hora: "23:45",
        precio: "XX.XX",
        categoria: "shows"
    },
    {
        imagen: "./assets/actividades/pesca.png",
        nombre: "Pesca Embarcada",
        descripcion: "Salidas diarias de pesca 🎣 Embarcada a todas las especies. Desde Club Náutico de Berisso.",
        fecha: "08/09/2024",
        hora: "07:00",
        precio: "$XX.XX",
        categoria: "pesca"
    },
    {
        imagen: "./assets/actividades/sep-2024/carrera.png",
        nombre: "Maratón del Inmigrante",
        descripcion: "🏃‍♂️🏃 CARRERA DEL INMIGRANTE “NUEVO DESAFÍO HEROICO”<br>15 K y 30 K - 5 K participativo<br>Link de inscripción:<br>https://docs.google.com/forms/d/e/1FAIpQLSfL9WQ8jSa16dAk_1X850jedIGoEvtS-jucof9apyjlN6RZJw/viewform?usp=sf_link",
        fecha: "08/09/2024",
        hora: "08:00",
        precio: "$XX.XX",
        categoria: "paseos"
    },
    {
        imagen: "./assets/actividades/julio2024/islaPaulino26al28-07.png",
        nombre: "Experiencia Isla Paulino",
        descripcion: "Salida desde el Embarcadero de Berisso (calle Génova 5003). Organiza Cámara de Turismo Berisso. ",
        fecha: "08/09/2024",
        hora: "10:00",
        precio: "XX.XXX",
        categoria: "paseos"
    },
    {
        imagen: "./assets/actividades/sep-2024/mercado.png",
        nombre: "Mercado de la Ribera",
        descripcion: "El Mercado de la Ribera abre sus puertas a partir de las 10:00hs detrás de la pista de atletismo (170 e/ 8 y 9). Organiza Mercado la Ribera.",
        fecha: "08/09/2024",
        hora: "10:00",
        precio: "X.XXX",
        categoria: "paseos"
    },
    {
        imagen: "./assets/actividades/sep-2024/08-09.png",
        nombre: "Ciclo gastronómico de Antaño",
        descripcion: "Este finde veni a disfrutar de este show. Te esperamos en Bar Raices Calle 2 y 169.",
        fecha: "08/09/2024",
        hora: "13:00",
        precio: "XX.XX",
        categoria: "shows"
    },
    {
        imagen: "./assets/actividades/agosto2024/navVela.png",
        nombre: "NAVEGACIÓN A VELA ⛵✨",
        descripcion: "Salimos del Club Nautico de Berisso (Genova, 5003). Recomendamos estar 15 min antes. La salida dura 2 horas y media y se recorren los puntos mas emblematicos del delta del Rio Santiago🤩 Podrás vivir la experiencia de aprender a navegar en velero. Incluye consumición🧃",
        fecha: "08/09/2024",
        hora: "14:00",
        precio: "$XX.XXX",
        categoria: "paseos"
    },
    {
        imagen: "./assets/actividades/sep-2024/inmi.png",
        nombre: "Posta del Inmigrante",
        descripcion: "Te esperamos a las 15:00hs en la Colectividad Griega – (calle 8 esq. 164). Organiza la Asociación de Entidades Extranjeras de Berisso.",
        fecha: "08/09/2024",
        hora: "15:00",
        precio: "$XX.XXX",
        categoria: "paseos"
    },
    {
        imagen: "./assets/actividades/pesca.png",
        nombre: "Pesca Embarcada",
        descripcion: "Salidas diarias de pesca 🎣 Embarcada a todas las especies. Desde Club Náutico de Berisso.",
        fecha: "13/09/2024",
        hora: "07:00",
        precio: "$XX.XX",
        categoria: "pesca"
    },
    {
        imagen: "./assets/actividades/monoblock.jpg",
        nombre: "MONOBLOCK viernes de cocina a la carta",
        descripcion: "Experiencia gastronómica en 10 y 161 restaurante Monoblock.",
        fecha: "13/09/2024",
        hora: "20:00",
        precio: "X.XXX",
        categoria: "shows"
    },
    {
        imagen: "./assets/actividades/delta.png",
        nombre: "DELTA NOCTURNO 🛳️",
        descripcion: "El recorrido por el Rio Santiago durará 1 hora y 30 minutos aprox. Incluye guiada y degustación de vino de la costa, tipico de Berisso🍷",
        fecha: "13/09/2024",
        hora: "20:30",
        precio: "$X.XXX",
        categoria: "paseos"
    },
    {
        imagen: "./assets/actividades/sep-2024/13-09-1.png",
        nombre: "Noche de Tango y Flamenco",
        descripcion: "Este finde veni a disfrutar de este show. Te esperamos en Bar Raices Calle 2 y 169.",
        fecha: "13/09/2024",
        hora: "21:00",
        precio: "XX.XX",
        categoria: "shows"
    },
    {
        imagen: "./assets/actividades/sep-2024/13-09-2.png",
        nombre: "Espíritu Stone Homenaje",
        descripcion: "Este finde veni a disfrutar de este show. Te esperamos en Bar Raices Calle 2 y 169.",
        fecha: "13/09/2024",
        hora: "23:45",
        precio: "XX.XX",
        categoria: "shows"
    },
    {
        imagen: "./assets/actividades/pesca.png",
        nombre: "Pesca Embarcada",
        descripcion: "Salidas diarias de pesca 🎣 Embarcada a todas las especies. Desde Club Náutico de Berisso.",
        fecha: "14/09/2024",
        hora: "07:00",
        precio: "$XX.XX",
        categoria: "pesca"
    },
    {
        imagen: "./assets/actividades/sep-2024/ruta14-09.png",
        nombre: "Tours Gratuitos a Pie – Ruta de la Diversidad Cultural ",
        descripcion: "¡Vení a conocer la cultura de los inmigrantes de la ciudad de Berisso! Este recorrido tendrá comienzo en el Monumento de los Inmigrantes, siguiendo por la Colectividad Belarusa (Club Vostok de Berisso), el Club Eslovaco Argentino de Berisso, y finalizará en la Sociedad Cultural Búlgara Iván Vazov✨<br>☎️Inscripciones al 221-571-6163<br>Se suspende por lluvias 🌧️",
        fecha: "14/09/2024",
        hora: "10:30",
        precio: "XX.XX",
        categoria: "paseos"
    },
    {
        imagen: "./assets/actividades/museo1871.png",
        nombre: "Museo 1871 Abre sus puertas",
        descripcion: "Acércate a Av. Montevideo y esquina 32 y conoce la historia de la ciudad en un solo lugar. Visita Guiada destinada a la comunidad sorda e hipoacúsica.",
        fecha: "14/09/2024",
        hora: "15:00",
        precio: "$XX.XX",
        categoria: "paseos"
    },
    {
        imagen: "./assets/actividades/agosto2024/yate.png",
        nombre: "Puesta de sol en yate privado 🛳️",
        descripcion: "Salimos desde el club Marina del Sur (Carlos Gardel 5000). Incluye 2 hs y media aproximadamente de navegación con coordinación, degustacion de vino de la costa 🍷, bebida (gaseosas, agua, té y café) y cosas dulces 🍰. Podes traer equipo de mate🧉 con reserva previa.",
        fecha: "14/09/2024",
        hora: "17:00",
        precio: "$XX.XXX",
        categoria: "paseos"
    },
    {
        imagen: "./assets/actividades/agosto2024/navVela.png",
        nombre: "NAVEGACIÓN A VELA ⛵✨",
        descripcion: "Salimos del Club Nautico de Berisso (Genova, 5003). Recomendamos estar 15 min antes. La salida dura 2 horas y media y se recorren los puntos mas emblematicos del delta del Rio Santiago🤩 Podrás vivir la experiencia de aprender a navegar en velero. Incluye consumición🧃",
        fecha: "14/09/2024",
        hora: "17:00",
        precio: "$XX.XXX",
        categoria: "paseos"
    },
    {
        imagen: "./assets/actividades/monoblock.jpg",
        nombre: "MONOBLOCK sábado de menú por pasos",
        descripcion: "Experiencia gastronómica en 10 y 161 restaurante Monoblock.",
        fecha: "14/09/2024",
        hora: "20:00",
        precio: "X.XXX",
        categoria: "shows"
    },
    {
        imagen: "./assets/actividades/sep-2024/14-09.png",
        nombre: "Jota y los Magníficos junto a Matías Alba ",
        descripcion: "Este finde veni a disfrutar de este show. Te esperamos en Bar Raices Calle 2 y 169.",
        fecha: "14/09/2024",
        hora: "21:00",
        precio: "XX.XX",
        categoria: "shows"
    },
    {
        imagen: "./assets/actividades/pesca.png",
        nombre: "Pesca Embarcada",
        descripcion: "Salidas diarias de pesca 🎣 Embarcada a todas las especies. Desde Club Náutico de Berisso.",
        fecha: "15/09/2024",
        hora: "07:00",
        precio: "$XX.XX",
        categoria: "pesca"
    },
    {
        imagen: "./assets/actividades/sep-2024/peatonal15-09.png",
        nombre: "Calle Nueva York Peatonal en el marco del Desembarco Simbólico",
        descripcion: "Los invitamos el próximo Domingo 15 de septiembre a partir de las 11hs, a la Calle Nueva York Peatonal, donde reunimos distintas propuestas como visitas guiadas🏛️, música en vivo🎤, gastronomía🍟, y mucho más! No te lo pierdas🥳<br>🙌🏻¡Entrada libre y gratuita!",
        fecha: "15/09/2024",
        hora: "11:00",
        precio: "xx.xx",
        categoria: "paseos"
    },
    {
        imagen: "./assets/actividades/sep-2024/orilla.png",
        nombre: "De Orilla a Orilla 'Festival Cultural Entre Islas'",
        descripcion: "Te esperamos este domingo 15 de septiembre para disfrutar de la segunda edición De Orilla a Orilla. Organiza Dirección de Cultura.",
        fecha: "15/09/2024",
        hora: "11:00",
        precio: "xx.xx",
        categoria: "paseos"
    },
    {
        imagen: "./assets/actividades/sep-2024/inmi.png",
        nombre: "Apertura del Patio gastronómico del Desembarco de los Inmigrantes",
        descripcion: "Te esperamos a las 12:00hs en explanada del Puerto de La Plata. Organiza la Asociación de Entidades Extranjeras de Berisso.",
        fecha: "15/09/2024",
        hora: "12:00",
        precio: "$XX.XXX",
        categoria: "paseos"
    },
    {
        imagen: "./assets/actividades/sep-2024/inmi.png",
        nombre: "Desembarco de los Inmigrantes",
        descripcion: "Te esperamos a las 15:00hs en explanada del Puerto de La Plata. Organiza la Asociación de Entidades Extranjeras de Berisso.",
        fecha: "15/09/2024",
        hora: "15:00",
        precio: "$XX.XXX",
        categoria: "paseos"
    },
    {
        imagen: "./assets/actividades/agosto2024/navVela.png",
        nombre: "NAVEGACIÓN A VELA ⛵✨",
        descripcion: "Salimos del Club Nautico de Berisso (Genova, 5003). Recomendamos estar 15 min antes. La salida dura 2 horas y media y se recorren los puntos mas emblematicos del delta del Rio Santiago🤩 Podrás vivir la experiencia de aprender a navegar en velero. Incluye consumición🧃",
        fecha: "15/09/2024",
        hora: "17:00",
        precio: "$XX.XXX",
        categoria: "paseos"
    },
    {
        imagen: "./assets/actividades/sep-2024/15-09.png",
        nombre: "Pablo Riquero Murga y Canciones Montevideanas",
        descripcion: "Este finde veni a disfrutar de este show. Te esperamos en Bar Raices Calle 2 y 169.",
        fecha: "15/09/2024",
        hora: "20:00",
        precio: "XX.XX",
        categoria: "shows"
    },
    {
        imagen: "./assets/actividades/pesca.png",
        nombre: "Pesca Embarcada",
        descripcion: "Salidas diarias de pesca 🎣 Embarcada a todas las especies. Desde Club Náutico de Berisso.",
        fecha: "20/09/2024",
        hora: "07:00",
        precio: "$XX.XX",
        categoria: "pesca"
    },
    {
        imagen: "./assets/actividades/monoblock.jpg",
        nombre: "MONOBLOCK viernes de cocina a la carta",
        descripcion: "Experiencia gastronómica en 10 y 161 restaurante Monoblock.",
        fecha: "20/09/2024",
        hora: "20:00",
        precio: "X.XXX",
        categoria: "shows"
    },
    {
        imagen: "./assets/actividades/sep-2024/20-09.png",
        nombre: "La Bestia Folk y Tierra Negra",
        descripcion: "Este finde veni a disfrutar de este show. Te esperamos en Bar Raices Calle 2 y 169.",
        fecha: "20/09/2024",
        hora: "21:00",
        precio: "XX.XX",
        categoria: "shows"
    },
    {
        imagen: "./assets/actividades/pesca.png",
        nombre: "Pesca Embarcada",
        descripcion: "Salidas diarias de pesca 🎣 Embarcada a todas las especies. Desde Club Náutico de Berisso.",
        fecha: "21/09/2024",
        hora: "07:00",
        precio: "$XX.XX",
        categoria: "pesca"
    },
    {
        imagen: "./assets/actividades/sep-2024/vino21-09.png",
        nombre: "Primavera entre Viñedos con la participación especial de Vinito y Co",
        descripcion: "Visitamos un viñedo y luego la Cooperativa de la Costa en Av. Montevideo y calle 81, Los Talas. Incluye degustación de vinos. Requisito: Contar con movilidad propia. Inscripción previa por WhatsApp al 221-5249934",
        fecha: "21/09/2024",
        hora: "10:00",
        precio: "XX.XX",
        categoria: "paseos"
    },
    {
        imagen: "../images/noticias/turismo/DiaPrim2024.png",
        nombre: "Dia de la Primavera - Festival Cultural",
        descripcion: "👉🏻Desde las 14 hs en el Parque Cívico, podrás disfrutar de una jornada completa con:<br><br>🍔Gastronomía<br>🛍️Artesanos y emprendedores<br>🎸Bandas del Consejo del Rock<br>🎧DJ’s en vivo<br><br>¡Te esperamos para disfrutar juntos de una primavera llena de música y cultura! 🌼🌺",
        fecha: "21/09/2024",
        hora: "14:00",
        precio: "XX.XX",
        categoria: "paseos"
    },
    {
        imagen: "./assets/actividades/agosto2024/isla.png",
        nombre: "Tarde Isleña",
        descripcion: "Salida desde el Embarcadero de Berisso (calle Génova 5003) Se realizará un recorrido por el Rio Santiago🗺️ Bajaremos en la isla Paulino e iremos a la Quinta “Isabella”. Incluye una infusión☕️ Volveremos a las 17.30 hs. Es con reserva.",
        fecha: "21/09/2024",
        hora: "15:00",
        precio: "$X.XXX",
        categoria: "paseos"
    },
    {
        imagen: "./assets/actividades/museo1871.png",
        nombre: "Museo 1871 Abre sus puertas",
        descripcion: "Acércate a Av. Montevideo y esquina 32 y conoce la historia de la ciudad en un solo lugar. Visita Guiada destinada a la comunidad sorda e hipoacúsica.",
        fecha: "21/09/2024",
        hora: "15:00",
        precio: "$XX.XX",
        categoria: "paseos"
    },
    {
        imagen: "./assets/actividades/agosto2024/navVela.png",
        nombre: "NAVEGACIÓN A VELA ⛵✨",
        descripcion: "Salimos del Club Nautico de Berisso (Genova, 5003). Recomendamos estar 15 min antes. La salida dura 2 horas y media y se recorren los puntos mas emblematicos del delta del Rio Santiago🤩 Podrás vivir la experiencia de aprender a navegar en velero. Incluye consumición🧃",
        fecha: "21/09/2024",
        hora: "16:30",
        precio: "$XX.XXX",
        categoria: "paseos"
    },
    {
        imagen: "./assets/actividades/monoblock.jpg",
        nombre: "MONOBLOCK sábado de menú por pasos",
        descripcion: "Experiencia gastronómica en 10 y 161 restaurante Monoblock.",
        fecha: "21/09/2024",
        hora: "20:00",
        precio: "X.XXX",
        categoria: "shows"
    },
    {
        imagen: "./assets/actividades/pesca.png",
        nombre: "Pesca Embarcada",
        descripcion: "Salidas diarias de pesca 🎣 Embarcada a todas las especies. Desde Club Náutico de Berisso.",
        fecha: "22/09/2024",
        hora: "07:00",
        precio: "$XX.XX",
        categoria: "pesca"
    },
    {
        imagen: "./assets/actividades/agosto2024/navVela.png",
        nombre: "NAVEGACIÓN A VELA ⛵✨",
        descripcion: "Salimos del Club Nautico de Berisso (Genova, 5003). Recomendamos estar 15 min antes. La salida dura 2 horas y media y se recorren los puntos mas emblematicos del delta del Rio Santiago🤩 Podrás vivir la experiencia de aprender a navegar en velero. Incluye consumición🧃",
        fecha: "22/09/2024",
        hora: "16:30",
        precio: "$XX.XXX",
        categoria: "paseos"
    },
    {
        imagen: "./assets/actividades/agosto2024/yate.png",
        nombre: "Puesta de sol en yate privado 🛳️",
        descripcion: "Salimos desde el club Marina del Sur (Carlos Gardel 5000). Incluye 2 hs y media aproximadamente de navegación con coordinación, degustacion de vino de la costa 🍷, bebida (gaseosas, agua, té y café) y cosas dulces 🍰. Podes traer equipo de mate🧉 con reserva previa.",
        fecha: "22/09/2024",
        hora: "16:30",
        precio: "$XX.XXX",
        categoria: "paseos"
    },
    {
        imagen: "./assets/actividades/sep-2024/22-09.png",
        nombre: "Juan Falú “A solas”",
        descripcion: "Este finde veni a disfrutar de este show. Te esperamos en Bar Raices Calle 2 y 169.",
        fecha: "22/09/2024",
        hora: "20:00",
        precio: "XX.XX",
        categoria: "shows"
    },
    {
        imagen: "./assets/actividades/sep-2024/atmosfera.png",
        nombre: "Obra de Teatro 'Atmósfera Carnelli'",
        descripcion: "Acércate este domingo a la SALA TCB (Nueva York y Marsella) y disfruta de esta obra de teatro del Director Nelson Mallach. Organiza SALA TCB.",
        fecha: "22/09/2024",
        hora: "20:00",
        precio: "$XX.XX",
        categoria: "shows"
    },
    {
        imagen: "./assets/actividades/pesca.png",
        nombre: "Pesca Embarcada",
        descripcion: "Salidas diarias de pesca 🎣 Embarcada a todas las especies. Desde Club Náutico de Berisso.",
        fecha: "27/09/2024",
        hora: "07:00",
        precio: "$XX.XX",
        categoria: "pesca"
    },
    {
        imagen: "./assets/actividades/sep-2024/poemas27-09.png",
        nombre: "🍵📚 Merienda Literaria: Florecen los Poemas 🌸🖋️",
        descripcion: "Te invitamos a una tarde donde la poesía florece entre charlas y café. Vení a disfrutar de la lectura compartida, intercambiar palabras y sentir la magia de los versos.<br>📍 Casa de Culturas - Av. Montevideo 821, Berisso",
        fecha: "27/09/2024",
        hora: "17:00",
        precio: "X.XXX",
        categoria: "cultura"
    },
    {
        imagen: "./assets/actividades/sep-2024/inmi.png",
        nombre: "Muestra fotográfica: 'Raíces'",
        descripcion: "Te invitamos a esta muestra fotográfica en Casa de Culturas - Av. Montevideo 821, Berisso.",
        fecha: "27/09/2024",
        hora: "18:30",
        precio: "X.XXX",
        categoria: "eventos"
    },
    {
        imagen: "./assets/actividades/monoblock.jpg",
        nombre: "MONOBLOCK viernes de cocina a la carta",
        descripcion: "Experiencia gastronómica en 10 y 161 restaurante Monoblock.",
        fecha: "27/09/2024",
        hora: "20:00",
        precio: "X.XXX",
        categoria: "shows"
    },
    {
        imagen: "./assets/actividades/sep-2024/27-09.png",
        nombre: "Duo Cynthia Aguirre y Alejandro Rodriguez",
        descripcion: "Este finde veni a disfrutar de este show. Te esperamos en Bar Raices Calle 2 y 169.",
        fecha: "27/09/2024",
        hora: "21:00",
        precio: "XX.XX",
        categoria: "shows"
    },
    {
        imagen: "./assets/actividades/pesca.png",
        nombre: "Pesca Embarcada",
        descripcion: "Salidas diarias de pesca 🎣 Embarcada a todas las especies. Desde Club Náutico de Berisso.",
        fecha: "28/09/2024",
        hora: "07:00",
        precio: "$XX.XX",
        categoria: "pesca"
    },
    {
        imagen: "./assets/actividades/sep-2024/inmi28-29.png",
        nombre: "🎉 FESTIVAL DE COLECTIVIDADES",
        descripcion: "¡Este fin de semana abre la Carpa del Inmigrante!<br>-A partir de las 12:00 hs, calle montevideo entre 10 y 11 (Centro Cívico)<br><br>🍝 Stands de Comidas Típicas<br>💃Shows de Danzas<br>🎨Paseo de Artesanos<br>📌 Entrada libre y gratuita.",
        fecha: "28/09/2024",
        hora: "12:00",
        precio: "X.XXX",
        categoria: "eventos"
    },
    {
        imagen: "./assets/actividades/museo1871.png",
        nombre: "Museo 1871 Abre sus puertas",
        descripcion: "Acércate a Av. Montevideo y esquina 32 y conoce la historia de la ciudad en un solo lugar. Visita Guiada destinada a la comunidad sorda e hipoacúsica.",
        fecha: "28/09/2024",
        hora: "15:00",
        precio: "$XX.XX",
        categoria: "paseos"
    },
    {
        imagen: "./assets/actividades/agosto2024/yate.png",
        nombre: "Puesta de sol en yate privado 🛳️",
        descripcion: "Salimos desde el club Marina del Sur (Carlos Gardel 5000). Incluye 2 hs y media aproximadamente de navegación con coordinación, degustacion de vino de la costa 🍷, bebida (gaseosas, agua, té y café) y cosas dulces 🍰. Podes traer equipo de mate🧉 con reserva previa.",
        fecha: "28/09/2024",
        hora: "16:30",
        precio: "$XX.XXX",
        categoria: "paseos"
    },
    {
        imagen: "./assets/actividades/sep-2024/teatro.png",
        nombre: "TCB cumplimos 19 años",
        descripcion: "Celebrá con nosotros nuestros 19 años con esta doble función teatral 🎭🎉<br><br>📍SALA TCB - Nueva York y Marsella (2 y 169) Berisso",
        fecha: "28/09/2024",
        hora: "19:00",
        precio: "$XX.XXX",
        categoria: "shows"
    },
    {
        imagen: "./assets/actividades/sep-2024/inmi28.png",
        nombre: "👑 PRESENTACIÓN DE REPRESENTANTES",
        descripcion: "Este sábado estaremos conociendo a los Representantes Infantiles, y a los postulantes a Embajadora y Embajador Provincial del Inmigrante.<br><br>⏰ 20:00 hs<br>📍 Carpa del Inmigrante, Montevideo entre 10 y 11<br>📌 Entrada libre y gratuita.",
        fecha: "28/09/2024",
        hora: "20:00",
        precio: "$XX.XXX",
        categoria: "eventos"
    },
    {
        imagen: "./assets/actividades/monoblock.jpg",
        nombre: "MONOBLOCK sábado de menú por pasos",
        descripcion: "Experiencia gastronómica en 10 y 161 restaurante Monoblock.",
        fecha: "28/09/2024",
        hora: "20:00",
        precio: "X.XXX",
        categoria: "shows"
    },
    {
        imagen: "./assets/actividades/sep-2024/28-09.png",
        nombre: "Adrián Stoppelman",
        descripcion: "Este finde veni a disfrutar de este show. Te esperamos en Bar Raices Calle 2 y 169.",
        fecha: "28/09/2024",
        hora: "21:00",
        precio: "XX.XX",
        categoria: "shows"
    },
    {
        imagen: "./assets/actividades/pesca.png",
        nombre: "Pesca Embarcada",
        descripcion: "Salidas diarias de pesca 🎣 Embarcada a todas las especies. Desde Club Náutico de Berisso.",
        fecha: "29/09/2024",
        hora: "07:00",
        precio: "$XX.XX",
        categoria: "pesca"
    },
    {
        imagen: "./assets/actividades/sep-2024/inmi28-29.png",
        nombre: "🎉 FESTIVAL DE COLECTIVIDADES",
        descripcion: "¡Este fin de semana abre la Carpa del Inmigrante!<br>-A partir de las 12:00 hs, calle montevideo entre 10 y 11 (Centro Cívico)<br><br>🍝 Stands de Comidas Típicas<br>💃Shows de Danzas<br>🎨Paseo de Artesanos<br>📌 Entrada libre y gratuita.",
        fecha: "29/09/2024",
        hora: "12:00",
        precio: "X.XXX",
        categoria: "eventos"
    },
    {
        imagen: "./assets/actividades/sep-2024/29-09-1.png",
        nombre: "“Suena Litoral“",
        descripcion: "Este finde veni a disfrutar de este show. Te esperamos en Bar Raices Calle 2 y 169.",
        fecha: "29/09/2024",
        hora: "13:00",
        precio: "XX.XX",
        categoria: "shows"
    },
    {
        imagen: "./assets/actividades/agosto2024/yate.png",
        nombre: "Puesta de sol en yate privado 🛳️",
        descripcion: "Salimos desde el club Marina del Sur (Carlos Gardel 5000). Incluye 2 hs y media aproximadamente de navegación con coordinación, degustacion de vino de la costa 🍷, bebida (gaseosas, agua, té y café) y cosas dulces 🍰. Podes traer equipo de mate🧉 con reserva previa.",
        fecha: "29/09/2024",
        hora: "16:30",
        precio: "$XX.XXX",
        categoria: "paseos"
    },
    {
        imagen: "./assets/actividades/sep-2024/29-09-2.png",
        nombre: "“ La que regresa “ es Hebe Grbin",
        descripcion: "Este finde veni a disfrutar de este show. Te esperamos en Bar Raices Calle 2 y 169.",
        fecha: "29/09/2024",
        hora: "20:00",
        precio: "XX.XX",
        categoria: "shows"
    },
    {
        imagen: "./assets/actividades/sep-2024/atmosfera.png",
        nombre: "Obra de Teatro 'Atmósfera Carnelli'",
        descripcion: "Acércate este domingo a la SALA TCB (Nueva York y Marsella) y disfruta de esta obra de teatro del Director Nelson Mallach. Organiza SALA TCB.",
        fecha: "29/09/2024",
        hora: "20:00",
        precio: "$XX.XX",
        categoria: "shows"
    },
    {
        imagen: "./assets/actividades/pesca.png",
        nombre: "Pesca Embarcada",
        descripcion: "Salidas diarias de pesca 🎣 Embarcada a todas las especies. Desde Club Náutico de Berisso.",
        fecha: "04/10/2024",
        hora: "07:00",
        precio: "Arancelada",
        categoria: "pesca"
    },
    {
        imagen: "./assets/actividades/octubre2024/inmi04-10.png",
        nombre: "Elección del Embajador Provincial del Inmigrante y Nacional de la Inmigración",
        descripcion: "En la Carpa del Inmigrante, Centro Cívico e/ 10 y 11. Organiza la Asociación de Entidades Extranjeras.",
        fecha: "04/10/2024",
        hora: "20:00",
        precio: "Gratuita",
        categoria: "eventos"
    },
    {
        imagen: "./assets/actividades/monoblock.jpg",
        nombre: "MONOBLOCK viernes de cocina a la carta",
        descripcion: "Experiencia gastronómica en 10 y 161 restaurante Monoblock.",
        fecha: "04/10/2024",
        hora: "20:00",
        precio: "Arancelada",
        categoria: "shows"
    },
    {
        imagen: "./assets/actividades/octubre2024/04-10.png",
        nombre: "CARISS en BANDA Presentación oficial SER ",
        descripcion: "Este finde veni a disfrutar de este show. Te esperamos en Bar Raices Calle 2 y 169.",
        fecha: "04/10/2024",
        hora: "21:00",
        precio: "Arancelada",
        categoria: "shows"
    },
    {
        imagen: "./assets/actividades/pesca.png",
        nombre: "Pesca Embarcada",
        descripcion: "Salidas diarias de pesca 🎣 Embarcada a todas las especies. Desde Club Náutico de Berisso.",
        fecha: "05/10/2024",
        hora: "07:00",
        precio: "Arancelada",
        categoria: "pesca"
    },
    {
        imagen: "./assets/actividades/visita.png",
        nombre: "Visita a viñedo + visita a Cooperativa de la Costa c/ degustación de vinos",
        descripcion: "Visitamos un viñedo y luego la Cooperativa de la Costa en Av. Montevideo y calle 81, Los Talas. Incluye degustación de vinos. Requisito: Contar con movilidad propia. Inscripción previa por WhatsApp al 221-5249934",
        fecha: "05/10/2024",
        hora: "11:00",
        precio: "Arancelada",
        categoria: "paseos"
    },
    {
        imagen: "./assets/actividades/octubre2024/festival.png",
        nombre: "🎉 FESTIVAL DE COLECTIVIDADES",
        descripcion: "¡Este fin de semana abre nuevamente la Carpa del Inmigrante!<br>-A partir de las 12:00 hs, Av. Montevideo entre 10 y 11 (Centro Cívico)<br><br>🍝 Stands de Comidas Típicas<br>💃Shows de Danzas<br>🎨Paseo de Artesanos<br>📌 Entrada libre y gratuita.",
        fecha: "05/10/2024",
        hora: "12:00",
        precio: "Gratuita",
        categoria: "eventos"
    },
    {
        imagen: "./assets/actividades/museo1871.png",
        nombre: "Museo 1871 Abre sus puertas",
        descripcion: "Acércate a Av. Montevideo y esquina 32 y conoce la historia de la ciudad en un solo lugar. Visita Guiada destinada a la comunidad sorda e hipoacúsica.",
        fecha: "05/10/2024",
        hora: "15:00",
        precio: "Gratuita",
        categoria: "paseos"
    },
    {
        imagen: "./assets/actividades/agosto2024/navVela.png",
        nombre: "NAVEGACIÓN A VELA ⛵✨",
        descripcion: "Salimos del Club Nautico de Berisso (Genova, 5003). Recomendamos estar 15 min antes. La salida dura 2 horas y media y se recorren los puntos mas emblematicos del delta del Rio Santiago🤩 Podrás vivir la experiencia de aprender a navegar en velero. Incluye consumición🧃",
        fecha: "05/10/2024",
        hora: "16:30",
        precio: "Arancelada",
        categoria: "paseos"
    },
    {
        imagen: "./assets/actividades/agosto2024/yate.png",
        nombre: "Puesta de sol en yate privado 🛳️",
        descripcion: "Salimos desde el club Marina del Sur (Carlos Gardel 5000). Incluye 2 hs y media aproximadamente de navegación con coordinación, degustacion de vino de la costa 🍷, bebida (gaseosas, agua, té y café) y cosas dulces 🍰. Podes traer equipo de mate🧉 con reserva previa.",
        fecha: "05/10/2024",
        hora: "16:30",
        precio: "Arancelada",
        categoria: "paseos"
    },
    {
        imagen: "./assets/actividades/octubre2024/pena.png",
        nombre: "La Peña de Cultura",
        descripcion: "Acércate este sábado en la Casa de Culturas en Av. Montevideo 821. Organiza Dirección de Cultura.",
        fecha: "05/10/2024",
        hora: "20:00",
        precio: "Gratuita",
        categoria: "cultura"
    },
    {
        imagen: "./assets/actividades/octubre2024/inmi05-10.png",
        nombre: "Elección de la Embajadora Provincial del Inmigrante y Nacional de la Inmigración",
        descripcion: "En la Carpa del Inmigrante, Centro Cívico e/ 10 y 11. Organiza la Asociación de Entidades Extranjeras.",
        fecha: "05/10/2024",
        hora: "20:00",
        precio: "Gratuita",
        categoria: "eventos"
    },
    {
        imagen: "./assets/actividades/monoblock.jpg",
        nombre: "MONOBLOCK sábado de menú por pasos",
        descripcion: "Experiencia gastronómica en 10 y 161 restaurante Monoblock.",
        fecha: "05/10/2024",
        hora: "20:00",
        precio: "Arancelada",
        categoria: "shows"
    },
    {
        imagen: "./assets/actividades/octubre2024/05-10.png",
        nombre: "Germán Fratarcángelli Trio",
        descripcion: "Este finde veni a disfrutar de este show. Te esperamos en Bar Raices Calle 2 y 169.",
        fecha: "05/10/2024",
        hora: "21:00",
        precio: "Arancelada",
        categoria: "shows"
    },
    {
        imagen: "./assets/actividades/octubre2024/05-10-1.png",
        nombre: "Los Limones Jaidefiniyon",
        descripcion: "Este finde veni a disfrutar de este show. Te esperamos en Bar Raices Calle 2 y 169.",
        fecha: "05/10/2024",
        hora: "23:45",
        precio: "Arancelada",
        categoria: "shows"
    },
    {
        imagen: "./assets/actividades/pesca.png",
        nombre: "Pesca Embarcada",
        descripcion: "Salidas diarias de pesca 🎣 Embarcada a todas las especies. Desde Club Náutico de Berisso.",
        fecha: "06/10/2024",
        hora: "07:00",
        precio: "Arancelada",
        categoria: "pesca"
    },
    {
        imagen: "./assets/actividades/octubre2024/festival.png",
        nombre: "🎉 FESTIVAL DE COLECTIVIDADES",
        descripcion: "¡Este fin de semana abre nuevamente la Carpa del Inmigrante!<br>-A partir de las 12:00 hs, Av. Montevideo entre 10 y 11 (Centro Cívico)<br><br>🍝 Stands de Comidas Típicas<br>💃Shows de Danzas<br>🎨Paseo de Artesanos<br>📌 Entrada libre y gratuita.",
        fecha: "06/10/2024",
        hora: "12:00",
        precio: "Gratuita",
        categoria: "eventos"
    },
    {
        imagen: "./assets/actividades/agosto2024/isla.png",
        nombre: "Tarde Isleña",
        descripcion: "Salida desde el Embarcadero de Berisso (calle Génova 5003) Se realizará un recorrido por el Rio Santiago🗺️ Bajaremos en la isla Paulino e iremos a la Quinta “Isabella”. Incluye una infusión☕️ Volveremos a las 17.30 hs. Es con reserva.",
        fecha: "06/10/2024",
        hora: "15:00",
        precio: "Arancelada",
        categoria: "paseos"
    },
    {
        imagen: "./assets/actividades/agosto2024/navVela.png",
        nombre: "NAVEGACIÓN A VELA ⛵✨",
        descripcion: "Salimos del Club Nautico de Berisso (Genova, 5003). Recomendamos estar 15 min antes. La salida dura 2 horas y media y se recorren los puntos mas emblematicos del delta del Rio Santiago🤩 Podrás vivir la experiencia de aprender a navegar en velero. Incluye consumición🧃",
        fecha: "06/10/2024",
        hora: "16:30",
        precio: "Arancelada",
        categoria: "paseos"
    },
    {
        imagen: "./assets/actividades/agosto2024/yate.png",
        nombre: "Puesta de sol en yate privado 🛳️",
        descripcion: "Salimos desde el club Marina del Sur (Carlos Gardel 5000). Incluye 2 hs y media aproximadamente de navegación con coordinación, degustacion de vino de la costa 🍷, bebida (gaseosas, agua, té y café) y cosas dulces 🍰. Podes traer equipo de mate🧉 con reserva previa.",
        fecha: "06/10/2024",
        hora: "16:30",
        precio: "Arancelada",
        categoria: "paseos"
    },
    {
        imagen: "./assets/actividades/octubre2024/06-10.png",
        nombre: "Piedra, papel y tijera & Seba Fernández",
        descripcion: "Este finde veni a disfrutar de este show. Te esperamos en Bar Raices Calle 2 y 169.",
        fecha: "06/10/2024",
        hora: "20:00",
        precio: "Arancelada",
        categoria: "shows"
    },
    {
        imagen: "./assets/actividades/pesca.png",
        nombre: "Pesca Embarcada",
        descripcion: "Salidas diarias de pesca 🎣 Embarcada a todas las especies. Desde Club Náutico de Berisso.",
        fecha: "11/10/2024",
        hora: "08:00",
        precio: "Arancelada",
        categoria: "pesca"
    },
    {
        imagen: "./assets/actividades/octubre2024/festivalcom.png",
        nombre: "🎉 FESTIVAL DE COLECTIVIDADES",
        descripcion: "¡Este fin de semana abre nuevamente la Carpa del Inmigrante!<br>-A partir de las 12:00 hs, Av. Montevideo entre 10 y 11 (Centro Cívico).",
        fecha: "11/10/2024",
        hora: "12:00",
        precio: "Gratuita",
        categoria: "eventos"
    },
    {
        imagen: "./assets/actividades/agosto2024/isla.png",
        nombre: "Tarde Isleña",
        descripcion: "Salida desde el Embarcadero de Berisso (calle Génova 5003) Se realizará un recorrido por el Rio Santiago🗺️ Bajaremos en la isla Paulino e iremos a la Quinta “Isabella”. Incluye una infusión☕️ Volveremos a las 17.30 hs. Es con reserva.",
        fecha: "11/10/2024",
        hora: "15:00",
        precio: "Arancelada",
        categoria: "paseos"
    },
    {
        imagen: "./assets/actividades/agosto2024/navVela.png",
        nombre: "NAVEGACIÓN A VELA ⛵✨",
        descripcion: "Salimos del Club Nautico de Berisso (Genova, 5003). Recomendamos estar 15 min antes. La salida dura 2 horas y media y se recorren los puntos mas emblematicos del delta del Rio Santiago🤩 Podrás vivir la experiencia de aprender a navegar en velero. Incluye consumición🧃",
        fecha: "11/10/2024",
        hora: "16:30",
        precio: "Arancelada",
        categoria: "paseos"
    },
    {
        imagen: "./assets/actividades/octubre2024/festival.png",
        nombre: "NOCHE DE TANGO Y FOLKLORE",
        descripcion: "¡Te esperamos en la Carpa del Inmigrante!<br>-A partir de las 19:00 hs, Av. Montevideo entre 10 y 11 (Centro Cívico)<br><br>Entrada libre y gratuita.",
        fecha: "11/10/2024",
        hora: "19:00",
        precio: "Gratuita",
        categoria: "eventos"
    },
    {
        imagen: "./assets/actividades/monoblock.jpg",
        nombre: "MONOBLOCK viernes de cocina a la carta",
        descripcion: "Experiencia gastronómica en 10 y 161 restaurante Monoblock.",
        fecha: "11/10/2024",
        hora: "20:00",
        precio: "Arancelada",
        categoria: "shows"
    },
    {
        imagen: "./assets/actividades/octubre2024/11-10.png",
        nombre: "Rodolfo Mederos Trio",
        descripcion: "Este finde veni a disfrutar de este show. Te esperamos en Bar Raices Calle 2 y 169.",
        fecha: "11/10/2024",
        hora: "21:00",
        precio: "Arancelada",
        categoria: "shows"
    },
    {
        imagen: "./assets/actividades/pesca.png",
        nombre: "Pesca Embarcada",
        descripcion: "Salidas diarias de pesca 🎣 Embarcada a todas las especies. Desde Club Náutico de Berisso.",
        fecha: "12/10/2024",
        hora: "08:00",
        precio: "Arancelada",
        categoria: "pesca"
    },
    {
        imagen: "./assets/actividades/octubre2024/festivalcom.png",
        nombre: "🎉 FESTIVAL DE COLECTIVIDADES",
        descripcion: "¡Este fin de semana abre nuevamente la Carpa del Inmigrante!<br>-A partir de las 12:00 hs, Av. Montevideo entre 10 y 11 (Centro Cívico).",
        fecha: "12/10/2024",
        hora: "12:00",
        precio: "Gratuita",
        categoria: "eventos"
    },
    {
        imagen: "./assets/actividades/museo1871.png",
        nombre: "Museo 1871 Abre sus puertas",
        descripcion: "Acércate a Av. Montevideo y esquina 32 y conoce la historia de la ciudad en un solo lugar. Visita Guiada destinada a la comunidad sorda e hipoacúsica.",
        fecha: "12/10/2024",
        hora: "15:00",
        precio: "Gratuita",
        categoria: "paseos"
    },
    {
        imagen: "./assets/actividades/agosto2024/navVela.png",
        nombre: "NAVEGACIÓN A VELA ⛵✨",
        descripcion: "Salimos del Club Nautico de Berisso (Genova, 5003). Recomendamos estar 15 min antes. La salida dura 2 horas y media y se recorren los puntos mas emblematicos del delta del Rio Santiago🤩 Podrás vivir la experiencia de aprender a navegar en velero. Incluye consumición🧃",
        fecha: "12/10/2024",
        hora: "16:30",
        precio: "Arancelada",
        categoria: "paseos"
    },
    {
        imagen: "./assets/actividades/agosto2024/yate.png",
        nombre: "Puesta de sol en yate privado 🛳️",
        descripcion: "Salimos desde el club Marina del Sur (Carlos Gardel 5000). Incluye 2 hs y media aproximadamente de navegación con coordinación, degustacion de vino de la costa 🍷, bebida (gaseosas, agua, té y café) y cosas dulces 🍰. Podes traer equipo de mate🧉 con reserva previa.",
        fecha: "12/10/2024",
        hora: "16:30",
        precio: "Arancelada",
        categoria: "paseos"
    },
    {
        imagen: "./assets/actividades/monoblock.jpg",
        nombre: "MONOBLOCK sábado de menú por pasos",
        descripcion: "Experiencia gastronómica en 10 y 161 restaurante Monoblock.",
        fecha: "12/10/2024",
        hora: "20:00",
        precio: "Arancelada",
        categoria: "shows"
    },
    {
        imagen: "./assets/actividades/octubre2024/12-10.png",
        nombre: "Un Rubio Peronista",
        descripcion: "Este finde veni a disfrutar de este show. Te esperamos en Bar Raices Calle 2 y 169.",
        fecha: "12/10/2024",
        hora: "21:30",
        precio: "Arancelada",
        categoria: "shows"
    },
    {
        imagen: "./assets/actividades/pesca.png",
        nombre: "Pesca Embarcada",
        descripcion: "Salidas diarias de pesca 🎣 Embarcada a todas las especies. Desde Club Náutico de Berisso.",
        fecha: "13/10/2024",
        hora: "08:00",
        precio: "Arancelada",
        categoria: "pesca"
    },
    {
        imagen: "./assets/actividades/julio2024/islaPaulino26al28-07.png",
        nombre: "Experiencia Isla Paulino",
        descripcion: "Salida desde el Embarcadero de Berisso (calle Génova 5003). Organiza Cámara de Turismo Berisso. ",
        fecha: "13/10/2024",
        hora: "10:00",
        precio: "Arancelada",
        categoria: "paseos"
    },
    {
        imagen: "./assets/actividades/sep-2024/mercado.png",
        nombre: "Apertura del Mercado de la Ribera",
        descripcion: "El Mercado de la Ribera abre sus puertas a partir de las 10:00hs detrás de la pista de atletismo (170 e/ 8 y 9). Organiza Mercado la Ribera.",
        fecha: "13/10/2024",
        hora: "10:00",
        precio: "Gratuita",
        categoria: "paseos"
    },
    {
        imagen: "./assets/actividades/octubre2024/festivalcom.png",
        nombre: "🎉 FESTIVAL DE COLECTIVIDADES",
        descripcion: "¡Este fin de semana abre nuevamente la Carpa del Inmigrante!<br>-A partir de las 12:00 hs, Av. Montevideo entre 10 y 11 (Centro Cívico).",
        fecha: "13/10/2024",
        hora: "12:00",
        precio: "Gratuita",
        categoria: "eventos"
    },
    {
        imagen: "./assets/actividades/general.jpg",
        nombre: "Paseo guiado por el Delta del Río Santiago",
        descripcion: "Veni a disfrutar de este recorrido desde la Calle 170 e/ 8 y 9. Organiza Mercado de la Ribera y Daniela Mondelo.",
        fecha: "13/10/2024",
        hora: "13:30",
        precio: "Arancelada",
        categoria: "paseos"
    },
    {
        imagen: "./assets/actividades/octubre2024/inmi.png",
        nombre: "DESFILE DE CLAUSURA",
        descripcion: "¡Te esperamos sobre la Av. Montevideo!. Organiza Asosiación de Entidades Extranjeras",
        fecha: "13/10/2024",
        hora: "15:00",
        precio: "Gratuita",
        categoria: "eventos"
    },
    {
        imagen: "./assets/actividades/agosto2024/navVela.png",
        nombre: "NAVEGACIÓN A VELA ⛵✨",
        descripcion: "Salimos del Club Nautico de Berisso (Genova, 5003). Recomendamos estar 15 min antes. La salida dura 2 horas y media y se recorren los puntos mas emblematicos del delta del Rio Santiago🤩 Podrás vivir la experiencia de aprender a navegar en velero. Incluye consumición🧃",
        fecha: "13/10/2024",
        hora: "16:30",
        precio: "Arancelada",
        categoria: "paseos"
    },
    {
        imagen: "./assets/actividades/octubre2024/inmi.png",
        nombre: "SHOW DE CIERRE",
        descripcion: "¡Te esperamos en la Carpa del Inmigrante!<br>-A partir de las 20:00 hs, Av. Montevideo entre 10 y 11 (Centro Cívico). Organiza Asosiación de Entidades Extranjeras",
        fecha: "13/10/2024",
        hora: "20:00",
        precio: "Gratuita",
        categoria: "eventos"
    },
    {
        imagen: "./assets/actividades/pesca.png",
        nombre: "Pesca Embarcada",
        descripcion: "Salidas diarias de pesca 🎣 Embarcada a todas las especies. Desde Club Náutico de Berisso.",
        fecha: "18/10/2024",
        hora: "08:00",
        precio: "Arancelada",
        categoria: "pesca"
    },
    {
        imagen: "./assets/actividades/monoblock.jpg",
        nombre: "SEA REC-MONOBLOCK",
        descripcion: "Veni a disfrutar de este show organizado por Monoblock y Sea Prods. Experiencia gastronómica en 10 y 161 restaurante Monoblock.",
        fecha: "18/10/2024",
        hora: "18:00",
        precio: "Arancelada",
        categoria: "shows"
    },
    {
        imagen: "./assets/actividades/agosto2024/navVela.png",
        nombre: "NAVEGACIÓN A VELA ⛵✨",
        descripcion: "Salimos del Club Nautico de Berisso (Genova, 5003). Recomendamos estar 15 min antes. La salida dura 2 horas y media y se recorren los puntos mas emblematicos del delta del Rio Santiago🤩 Podrás vivir la experiencia de aprender a navegar en velero. Incluye consumición🧃",
        fecha: "18/10/2024",
        hora: "19:30",
        precio: "Arancelada",
        categoria: "paseos"
    },
    {
        imagen: "./assets/actividades/octubre2024/pena2.png",
        nombre: "Peña a beneficio",
        descripcion: "Acércate este viernes al Centro Recreativo Hogar y Amor (32 y 169). Organiza Dirección de Cultura.",
        fecha: "18/10/2024",
        hora: "20:00",
        precio: "Gratuita",
        categoria: "cultura"
    },
    {
        imagen: "./assets/actividades/delta.png",
        nombre: "DELTA NOCTURNO 🛳️",
        descripcion: "El recorrido por el Rio Santiago durará 1 hora y 30 minutos aprox. Incluye guiada y degustación de vino de la costa, tipico de Berisso🍷",
        fecha: "18/10/2024",
        hora: "20:00",
        precio: "Arancelada",
        categoria: "paseos"
    },
    {
        imagen: "./assets/actividades/monoblock.jpg",
        nombre: "MONOBLOCK viernes de cocina a la carta",
        descripcion: "Experiencia gastronómica en 10 y 161 restaurante Monoblock.",
        fecha: "18/10/2024",
        hora: "21:00",
        precio: "Arancelada",
        categoria: "shows"
    },
    {
        imagen: "./assets/actividades/octubre2024/18-10.png",
        nombre: "Piraña presenta 'Chafalonias' Tango / Canción Griolla",
        descripcion: "Este finde veni a disfrutar de este show. Te esperamos en Bar Raices Calle 2 y 169.",
        fecha: "18/10/2024",
        hora: "21:00",
        precio: "Arancelada",
        categoria: "shows"
    },
    {
        imagen: "./assets/actividades/pesca.png",
        nombre: "Pesca Embarcada",
        descripcion: "Salidas diarias de pesca 🎣 Embarcada a todas las especies. Desde Club Náutico de Berisso.",
        fecha: "19/10/2024",
        hora: "08:00",
        precio: "Arancelada",
        categoria: "pesca"
    },
    {
        imagen: "./assets/actividades/visita.png",
        nombre: "Visita a viñedo + visita a Cooperativa de la Costa c/ degustación de vinos",
        descripcion: "Visitamos un viñedo y luego la Cooperativa de la Costa en Av. Montevideo y calle 81, Los Talas. Incluye degustación de vinos. Requisito: Contar con movilidad propia. Inscripción previa por WhatsApp al 221-5249934",
        fecha: "19/10/2024",
        hora: "11:00",
        precio: "Arancelada",
        categoria: "paseos"
    },
    {
        imagen: "./assets/actividades/agosto2024/isla.png",
        nombre: "Tarde Isleña",
        descripcion: "Salida desde el Embarcadero de Berisso (calle Génova 5003) Se realizará un recorrido por el Rio Santiago🗺️ Bajaremos en la isla Paulino e iremos a la Quinta “Isabella”. Incluye una infusión☕️ Volveremos a las 17.30 hs. Es con reserva.",
        fecha: "19/10/2024",
        hora: "15:00",
        precio: "Arancelada",
        categoria: "paseos"
    },
    {
        imagen: "./assets/actividades/museo1871.png",
        nombre: "Museo 1871 Abre sus puertas",
        descripcion: "Acércate a Av. Montevideo y esquina 32 y conoce la historia de la ciudad en un solo lugar. Visita Guiada destinada a la comunidad sorda e hipoacúsica.",
        fecha: "19/10/2024",
        hora: "15:00",
        precio: "Gratuita",
        categoria: "paseos"
    },
    {
        imagen: "./assets/actividades/agosto2024/yate.png",
        nombre: "Puesta de sol en yate privado 🛳️",
        descripcion: "Salimos desde el club Marina del Sur (Carlos Gardel 5000). Incluye 2 hs y media aproximadamente de navegación con coordinación, degustacion de vino de la costa 🍷, bebida (gaseosas, agua, té y café) y cosas dulces 🍰. Podes traer equipo de mate🧉 con reserva previa.",
        fecha: "19/10/2024",
        hora: "16:30",
        precio: "Arancelada",
        categoria: "paseos"
    },
    {
        imagen: "./assets/actividades/agosto2024/navVela.png",
        nombre: "NAVEGACIÓN A VELA ⛵✨",
        descripcion: "Salimos del Club Nautico de Berisso (Genova, 5003). Recomendamos estar 15 min antes. La salida dura 2 horas y media y se recorren los puntos mas emblematicos del delta del Rio Santiago🤩 Podrás vivir la experiencia de aprender a navegar en velero. Incluye consumición🧃",
        fecha: "19/10/2024",
        hora: "19:30",
        precio: "Arancelada",
        categoria: "paseos"
    },
    {
        imagen: "./assets/actividades/octubre2024/19-10.png",
        nombre: "Vuelve Rita Cortese",
        descripcion: "Este finde veni a disfrutar de este show. Te esperamos en Bar Raices Calle 2 y 169.",
        fecha: "19/10/2024",
        hora: "21:00",
        precio: "Arancelada",
        categoria: "shows"
    },
    {
        imagen: "./assets/actividades/pesca.png",
        nombre: "Pesca Embarcada",
        descripcion: "Salidas diarias de pesca 🎣 Embarcada a todas las especies. Desde Club Náutico de Berisso.",
        fecha: "20/10/2024",
        hora: "08:00",
        precio: "Arancelada",
        categoria: "pesca"
    },
    {
        imagen: "./assets/actividades/octubre2024/20-10.png",
        nombre: "Almuerzo del Día de las Madres",
        descripcion: "Este finde veni a disfrutar de este show. Te esperamos en Bar Raices Calle 2 y 169.",
        fecha: "20/10/2024",
        hora: "11:00",
        precio: "Arancelada",
        categoria: "shows"
    },
    {
        imagen: "./assets/actividades/octubre2024/atmosfera.png",
        nombre: "Obra de Teatro 'Atmósfera Carnelli'",
        descripcion: "Acércate este domingo a la SALA TCB (Nueva York y Marsella) y disfruta de esta obra de teatro del Director Nelson Mallach. Organiza SALA TCB.",
        fecha: "20/10/2024",
        hora: "20:00",
        precio: "Arancelada",
        categoria: "shows"
    },
    {
        imagen: "./assets/actividades/pesca.png",
        nombre: "Pesca Embarcada",
        descripcion: "Salidas diarias de pesca 🎣 Embarcada a todas las especies. Desde Club Náutico de Berisso.",
        fecha: "25/10/2024",
        hora: "08:00",
        precio: "Arancelada",
        categoria: "pesca"
    },
    {
        imagen: "./assets/actividades/octubre2024/libro25-10.png",
        nombre: "Presentación del libro “La Grasita” de Mercedes Pérez Sabbi",
        descripcion: "🔸Mercedes Pérez Sabbi nos ofrece una novela bella y conmovedora, que desde la belleza de los pequeños detalles nos lleva a reflexionar sobre momentos históricos de gran impacto...",
        fecha: "25/10/2024",
        hora: "13:30",
        precio: "Gratuita",
        categoria: "cultura"
    },
    {
        imagen: "./assets/actividades/monoblock.jpg",
        nombre: "MONOBLOCK viernes de cocina a la carta",
        descripcion: "Experiencia gastronómica en 10 y 161 restaurante Monoblock.",
        fecha: "25/10/2024",
        hora: "21:00",
        precio: "Arancelada",
        categoria: "shows"
    },
    {
        imagen: "./assets/actividades/octubre2024/match25-10.png",
        nombre: "Match de Improvisación",
        descripcion: "Acércate este viernes a la SALA TCB (Nueva York y Marsella) y disfruta de esta obra de teatro. Organiza SALA TCB.",
        fecha: "25/10/2024",
        hora: "21:00",
        precio: "Arancelada",
        categoria: "shows"
    },
    {
        imagen: "./assets/actividades/octubre2024/25-10.png",
        nombre: "“Universon”",
        descripcion: "Este finde veni a disfrutar de este show. Te esperamos en Bar Raices Calle 2 y 169.",
        fecha: "25/10/2024",
        hora: "21:00",
        precio: "Arancelada",
        categoria: "shows"
    },
    {
        imagen: "./assets/actividades/pesca.png",
        nombre: "Pesca Embarcada",
        descripcion: "Salidas diarias de pesca 🎣 Embarcada a todas las especies. Desde Club Náutico de Berisso.",
        fecha: "26/10/2024",
        hora: "08:00",
        precio: "Arancelada",
        categoria: "pesca"
    },
    {
        imagen: "./assets/actividades/agosto2024/yate.png",
        nombre: "Travesía en yate privado🛳️",
        descripcion: "Salimos desde el club Marina del Sur (Carlos Gardel 5000). Incluye 2 hs y media aproximadamente de navegación con coordinación, degustacion de vino de la costa 🍷, bebida (gaseosas, agua, té y café) y cosas dulces 🍰. Podes traer equipo de mate🧉 con reserva previa.",
        fecha: "26/10/2024",
        hora: "10:30",
        precio: "Arancelada",
        categoria: "paseos"
    },
    {
        imagen: "./assets/actividades/museo1871.png",
        nombre: "Museo 1871 Abre sus puertas",
        descripcion: "Acércate a Av. Montevideo y esquina 32 y conoce la historia de la ciudad en un solo lugar. Visita Guiada destinada a la comunidad sorda e hipoacúsica.",
        fecha: "26/10/2024",
        hora: "15:00",
        precio: "Gratuita",
        categoria: "paseos"
    },
    {
        imagen: "./assets/actividades/puestaDelSol.png",
        nombre: "Puesta de sol en yate privado 🛳️",
        descripcion: "Salimos desde el club Marina del Sur (Carlos Gardel 5000). Incluye 2 hs y media aproximadamente de navegación con coordinación, degustacion de vino de la costa 🍷, bebida (gaseosas, agua, té y café) y cosas dulces 🍰. Podes traer equipo de mate🧉 con reserva previa.",
        fecha: "26/10/2024",
        hora: "16:30",
        precio: "Arancelada",
        categoria: "paseos"
    },
    {
        imagen: "./assets/actividades/agosto2024/navVela.png",
        nombre: "NAVEGACIÓN A VELA ⛵✨",
        descripcion: "Salimos del Club Nautico de Berisso (Genova, 5003). Recomendamos estar 15 min antes. La salida dura 2 horas y media y se recorren los puntos mas emblematicos del delta del Rio Santiago🤩 Podrás vivir la experiencia de aprender a navegar en velero. Incluye consumición🧃",
        fecha: "26/10/2024",
        hora: "16:30",
        precio: "Arancelada",
        categoria: "paseos"
    },
    {
        imagen: "./assets/actividades/octubre2024/tcb26-10.png",
        nombre: "“El amor puede, más…No jodan más” y “Creer o reventar”",
        descripcion: "Acércate este sábado a la SALA TCB (Nueva York y Marsella) y disfruta de esta obra de teatro. Organiza SALA TCB.",
        fecha: "26/10/2024",
        hora: "19:00",
        precio: "Arancelada",
        categoria: "shows"
    },
    {
        imagen: "./assets/actividades/monoblock.jpg",
        nombre: "MONOBLOCK sábado de menú por pasos",
        descripcion: "Experiencia gastronómica en 10 y 161 restaurante Monoblock.",
        fecha: "26/10/2024",
        hora: "21:00",
        precio: "Arancelada",
        categoria: "shows"
    },
    {
        imagen: "./assets/actividades/octubre2024/26-10.png",
        nombre: "“Fulanos Trio y Flores Negras”",
        descripcion: "Este finde veni a disfrutar de este show. Te esperamos en Bar Raices Calle 2 y 169.",
        fecha: "26/10/2024",
        hora: "21:00",
        precio: "Arancelada",
        categoria: "shows"
    },
    {
        imagen: "./assets/actividades/pesca.png",
        nombre: "Pesca Embarcada",
        descripcion: "Salidas diarias de pesca 🎣 Embarcada a todas las especies. Desde Club Náutico de Berisso.",
        fecha: "27/10/2024",
        hora: "08:00",
        precio: "Arancelada",
        categoria: "pesca"
    },
    {
        imagen: "./assets/actividades/agosto2024/navVela.png",
        nombre: "NAVEGACIÓN A VELA ⛵✨",
        descripcion: "Salimos del Club Nautico de Berisso (Genova, 5003). Recomendamos estar 15 min antes. La salida dura 2 horas y media y se recorren los puntos mas emblematicos del delta del Rio Santiago🤩 Podrás vivir la experiencia de aprender a navegar en velero. Incluye consumición🧃",
        fecha: "27/10/2024",
        hora: "16:30",
        precio: "Arancelada",
        categoria: "paseos"
    },
    {
        imagen: "./assets/actividades/octubre2024/jievaras.png",
        nombre: "Presentación del conjunto de danzas tradicionales lituanas 'Jievaras'",
        descripcion: "Llegados desde Lituania - En la Escuela Enseñanza Media N°1 Berisso. Organiza Conjunto Nemunas.",
        fecha: "27/10/2024",
        hora: "18:00",
        precio: "Gratuita",
        categoria: "shows"
    },
    {
        imagen: "./assets/actividades/octubre2024/27-10.png",
        nombre: "“Exodo” Tributo a Marley",
        descripcion: "Este finde veni a disfrutar de este show. Te esperamos en Bar Raices Calle 2 y 169.",
        fecha: "27/10/2024",
        hora: "20:00",
        precio: "Arancelada",
        categoria: "shows"
    },
    {
        imagen: "./assets/actividades/octubre2024/atmosfera27-10.png",
        nombre: "Obra de Teatro 'Atmósfera Carnelli'",
        descripcion: "Acércate este domingo a la SALA TCB (Nueva York y Marsella) y disfruta de esta obra de teatro del Director Nelson Mallach. Organiza SALA TCB.",
        fecha: "27/10/2024",
        hora: "20:00",
        precio: "Arancelada",
        categoria: "shows"
    },
    {
        imagen: "./assets/actividades/pesca.png",
        nombre: "Pesca Embarcada",
        descripcion: "Salidas diarias de pesca 🎣 Embarcada a todas las especies. Desde Club Náutico de Berisso.",
        fecha: "01/11/2024",
        hora: "08:00",
        precio: "Arancelada",
        categoria: "pesca"
    },
    {
        imagen: "./assets/actividades/monoblock.jpg",
        nombre: "MONOBLOCK viernes de cocina a la carta",
        descripcion: "Experiencia gastronómica en 10 y 161 restaurante Monoblock.",
        fecha: "01/11/2024",
        hora: "21:00",
        precio: "Arancelada",
        categoria: "shows"
    },
    {
        imagen: "./assets/actividades/noviembre2024/01-11.png",
        nombre: "Noche de Tango ",
        descripcion: "Este finde veni a disfrutar de este show. Te esperamos en Bar Raices Calle 2 y 169.",
        fecha: "01/11/2024",
        hora: "21:00",
        precio: "Arancelada",
        categoria: "shows"
    },
    {
        imagen: "./assets/actividades/pesca.png",
        nombre: "Pesca Embarcada",
        descripcion: "Salidas diarias de pesca 🎣 Embarcada a todas las especies. Desde Club Náutico de Berisso.",
        fecha: "02/11/2024",
        hora: "08:00",
        precio: "Arancelada",
        categoria: "pesca"
    },
    {
        imagen: "./assets/actividades/noviembre2024/vinedos02-11.png",
        nombre: "Degustación entre Viñedos",
        descripcion: "Visitamos un viñedo y luego la Cooperativa de la Costa en Av. Montevideo y calle 81, Los Talas. Incluye degustación de vinos. Requisito: Contar con movilidad propia. Inscripción previa por WhatsApp al 221-5249934",
        fecha: "02/11/2024",
        hora: "10:00",
        precio: "Arancelada",
        categoria: "paseos"
    },
    {
        imagen: "./assets/actividades/museo1871.png",
        nombre: "Museo 1871 Abre sus puertas",
        descripcion: "Acércate a Av. Montevideo y esquina 32 y conoce la historia de la ciudad en un solo lugar. Visita Guiada destinada a la comunidad sorda e hipoacúsica.",
        fecha: "02/11/2024",
        hora: "15:00",
        precio: "Gratuita",
        categoria: "paseos"
    },
    {
        imagen: "./assets/actividades/agosto2024/navVela.png",
        nombre: "NAVEGACIÓN A VELA ⛵✨",
        descripcion: "Salimos del Club Nautico de Berisso (Genova, 5003). Recomendamos estar 15 min antes. La salida dura 2 horas y media y se recorren los puntos mas emblematicos del delta del Rio Santiago🤩 Podrás vivir la experiencia de aprender a navegar en velero. Incluye consumición🧃",
        fecha: "02/11/2024",
        hora: "16:30",
        precio: "Arancelada",
        categoria: "paseos"
    },
    {
        imagen: "./assets/actividades/monoblock.jpg",
        nombre: "MONOBLOCK sábado de menú por pasos",
        descripcion: "Experiencia gastronómica en 10 y 161 restaurante Monoblock.",
        fecha: "02/11/2024",
        hora: "21:00",
        precio: "Arancelada",
        categoria: "shows"
    },
    {
        imagen: "./assets/actividades/noviembre2024/02-11.png",
        nombre: "Gambeteando Odiadores",
        descripcion: "Este finde veni a disfrutar de este show. Te esperamos en Bar Raices Calle 2 y 169.",
        fecha: "02/11/2024",
        hora: "21:00",
        precio: "Arancelada",
        categoria: "shows"
    },
    {
        imagen: "./assets/actividades/pesca.png",
        nombre: "Pesca Embarcada",
        descripcion: "Salidas diarias de pesca 🎣 Embarcada a todas las especies. Desde Club Náutico de Berisso.",
        fecha: "03/11/2024",
        hora: "08:00",
        precio: "Arancelada",
        categoria: "pesca"
    },
    {
        imagen: "./assets/actividades/noviembre2024/ny03-11.png",
        nombre: "Calle Nueva York Peatonal",
        descripcion: "Los invitamos el próximo Domingo 03 de noviembre a partir de las 12hs, a la Calle Nueva York Peatonal, donde reunimos distintas propuestas como visitas guiadas🏛️, música en vivo🎤, gastronomía🍟, y mucho más! No te lo pierdas🥳<br>🙌🏻¡Entrada libre y gratuita!",
        fecha: "03/11/2024",
        hora: "12:00",
        precio: "Gratuita",
        categoria: "paseos"
    },
    {
        imagen: "./assets/actividades/agosto2024/isla.png",
        nombre: "Tarde Isleña",
        descripcion: "Salida desde el Embarcadero de Berisso (calle Génova 5003) Se realizará un recorrido por el Rio Santiago🗺️ Bajaremos en la isla Paulino e iremos a la Quinta “Isabella”. Incluye una infusión☕️ Volveremos a las 17.30 hs. Es con reserva.",
        fecha: "03/11/2024",
        hora: "15:00",
        precio: "Arancelada",
        categoria: "paseos"
    },
    {
        imagen: "./assets/actividades/agosto2024/navVela.png",
        nombre: "NAVEGACIÓN A VELA ⛵✨",
        descripcion: "Salimos del Club Nautico de Berisso (Genova, 5003). Recomendamos estar 15 min antes. La salida dura 2 horas y media y se recorren los puntos mas emblematicos del delta del Rio Santiago🤩 Podrás vivir la experiencia de aprender a navegar en velero. Incluye consumición🧃",
        fecha: "03/11/2024",
        hora: "16:30",
        precio: "Arancelada",
        categoria: "paseos"
    },
    {
        imagen: "./assets/actividades/pesca.png",
        nombre: "Pesca Embarcada",
        descripcion: "Salidas diarias de pesca 🎣 Embarcada a todas las especies. Desde Club Náutico de Berisso.",
        fecha: "08/11/2024",
        hora: "08:00",
        precio: "Arancelada",
        categoria: "pesca"
    },
    {
        imagen: "./assets/actividades/monoblock.jpg",
        nombre: "MONOBLOCK viernes de cocina a la carta",
        descripcion: "Experiencia gastronómica en 10 y 161 restaurante Monoblock.",
        fecha: "08/11/2024",
        hora: "21:00",
        precio: "Arancelada",
        categoria: "shows"
    },
    {
        imagen: "./assets/actividades/noviembre2024/8-11.png",
        nombre: "Juan Solo",
        descripcion: "Este finde veni a disfrutar de este show. Te esperamos en Bar Raices Calle 2 y 169.",
        fecha: "08/11/2024",
        hora: "21:00",
        precio: "Arancelada",
        categoria: "shows"
    },
    {
        imagen: "./assets/actividades/pesca.png",
        nombre: "Pesca Embarcada",
        descripcion: "Salidas diarias de pesca 🎣 Embarcada a todas las especies. Desde Club Náutico de Berisso.",
        fecha: "09/11/2024",
        hora: "08:00",
        precio: "Arancelada",
        categoria: "pesca"
    },
    {
        imagen: "./assets/actividades/sep-2024/ruta14-09.png",
        nombre: "Tours Gratuitos a Pie – Ruta de la Diversidad Cultural ",
        descripcion: "¡Vení a conocer la cultura de los inmigrantes de la ciudad de Berisso! Este recorrido tendrá comienzo en el Monumento de los Inmigrantes, siguiendo por la Colectividad Belarusa (Club Vostok de Berisso), el Club Eslovaco Argentino de Berisso, y finalizará en la Sociedad Cultural Búlgara Iván Vazov✨<br>☎️Inscripciones al 221-571-6163<br>Se suspende por lluvias 🌧️",
        fecha: "09/11/2024",
        hora: "10:30",
        precio: "Gratuito",
        categoria: "paseos"
    },
    {
        imagen: "./assets/actividades/visita.png",
        nombre: "Visita a viñedo + visita a Cooperativa de la Costa c/ degustación de vinos",
        descripcion: "Visitamos un viñedo y luego la Cooperativa de la Costa en Av. Montevideo y calle 81, Los Talas. Incluye degustación de vinos. Requisito: Contar con movilidad propia. Inscripción previa por WhatsApp al 221-5249934",
        fecha: "09/11/2024",
        hora: "11:00",
        precio: "Arancelada",
        categoria: "paseos"
    },
    {
        imagen: "./assets/actividades/museo1871.png",
        nombre: "Museo 1871 Abre sus puertas",
        descripcion: "Acércate a Av. Montevideo y esquina 32 y conoce la historia de la ciudad en un solo lugar. Visita Guiada destinada a la comunidad sorda e hipoacúsica.",
        fecha: "09/11/2024",
        hora: "15:00",
        precio: "Gratuita",
        categoria: "paseos"
    },
    {
        imagen: "./assets/actividades/agosto2024/navVela.png",
        nombre: "NAVEGACIÓN A VELA ⛵✨",
        descripcion: "Salimos del Club Nautico de Berisso (Genova, 5003). Recomendamos estar 15 min antes. La salida dura 2 horas y media y se recorren los puntos mas emblematicos del delta del Rio Santiago🤩 Podrás vivir la experiencia de aprender a navegar en velero. Incluye consumición🧃",
        fecha: "09/11/2024",
        hora: "16:30",
        precio: "Arancelada",
        categoria: "paseos"
    },
    {
        imagen: "./assets/actividades/agosto2024/creer.png",
        nombre: "Creer o reventar",
        descripcion: "Veni a disfrutar de este show en Sala TCB - Nueva York Y Marsella. Organiza Teatro Comunitario de Berisso.",
        fecha: "09/11/2024",
        hora: "20:00",
        precio: "",
        categoria: "shows"
    },
    {
        imagen: "./assets/actividades/monoblock.jpg",
        nombre: "MONOBLOCK sábado de menú por pasos",
        descripcion: "Experiencia gastronómica en 10 y 161 restaurante Monoblock.",
        fecha: "09/11/2024",
        hora: "21:00",
        precio: "Arancelada",
        categoria: "shows"
    },
    {
        imagen: "./assets/actividades/noviembre2024/9-11.png",
        nombre: "LA FERNI y Nahuel Quipildor",
        descripcion: "Este finde veni a disfrutar de este show. Te esperamos en Bar Raices Calle 2 y 169.",
        fecha: "09/11/2024",
        hora: "21:00",
        precio: "Arancelada",
        categoria: "shows"
    },
    {
        imagen: "./assets/actividades/pesca.png",
        nombre: "Pesca Embarcada",
        descripcion: "Salidas diarias de pesca 🎣 Embarcada a todas las especies. Desde Club Náutico de Berisso.",
        fecha: "10/11/2024",
        hora: "08:00",
        precio: "Arancelada",
        categoria: "pesca"
    },
    {
        imagen: "./assets/actividades/sep-2024/mercado.png",
        nombre: "Apertura del Mercado de la Ribera",
        descripcion: "El Mercado de la Ribera abre sus puertas a partir de las 10:00hs detrás de la pista de atletismo (170 e/ 8 y 9). Organiza Mercado la Ribera.",
        fecha: "10/11/2024",
        hora: "10:00",
        precio: "Gratuita",
        categoria: "paseos"
    },
    {
        imagen: "./assets/actividades/julio2024/islaPaulino26al28-07.png",
        nombre: "Experiencia Isla Paulino",
        descripcion: "Salida desde el Embarcadero de Berisso (calle Génova 5003). Organiza Cámara de Turismo Berisso. ",
        fecha: "10/11/2024",
        hora: "10:00",
        precio: "Arancelada",
        categoria: "paseos"
    },
    {
        imagen: "./assets/actividades/museo1871.png",
        nombre: "Feria de Antiguedades - Museo 1871",
        descripcion: "Acércate a Av. Montevideo y esquina 32 y conoce la historia de la ciudad en un solo lugar. Visita Guiada destinada a la comunidad sorda e hipoacúsica.",
        fecha: "10/11/2024",
        hora: "11:00",
        precio: "Gratuita",
        categoria: "paseos"
    },
    {
        imagen: "./assets/actividades/noviembre2024/10-11.png",
        nombre: "DÍA DE LA TRADICIÓN Canto de las Dos Orillas",
        descripcion: "Este finde veni a disfrutar de este show. Te esperamos en Bar Raices Calle 2 y 169.",
        fecha: "10/11/2024",
        hora: "13:00",
        precio: "Arancelada",
        categoria: "shows"
    },
    {
        imagen: "./assets/actividades/general.jpg",
        nombre: "Paseo guiado por el Delta del Río Santiago",
        descripcion: "Veni a disfrutar de este recorrido desde la Calle 170 e/ 8 y 9. Organiza Mercado de la Ribera y Daniela Mondelo.",
        fecha: "10/11/2024",
        hora: "13:30",
        precio: "Arancelada",
        categoria: "paseos"
    },
    {
        imagen: "./assets/actividades/puestaDelSol.png",
        nombre: "Puesta de sol en yate privado 🛳️",
        descripcion: "Salimos desde el club Marina del Sur (Carlos Gardel 5000). Incluye 2 hs y media aproximadamente de navegación con coordinación, degustacion de vino de la costa 🍷, bebida (gaseosas, agua, té y café) y cosas dulces 🍰. Podes traer equipo de mate🧉 con reserva previa.",
        fecha: "10/11/2024",
        hora: "16:30",
        precio: "Arancelada",
        categoria: "paseos"
    },
    {
        imagen: "./assets/actividades/agosto2024/navVela.png",
        nombre: "NAVEGACIÓN A VELA ⛵✨",
        descripcion: "Salimos del Club Nautico de Berisso (Genova, 5003). Recomendamos estar 15 min antes. La salida dura 2 horas y media y se recorren los puntos mas emblematicos del delta del Rio Santiago🤩 Podrás vivir la experiencia de aprender a navegar en velero. Incluye consumición🧃",
        fecha: "10/11/2024",
        hora: "16:30",
        precio: "Arancelada",
        categoria: "paseos"
    },
    {
        imagen: "./assets/actividades/noviembre2024/10-11-1.png",
        nombre: "FUSIÓN DE MÚSICAS DEL MUNDO, RÍO CHECO + LA MORINGA",
        descripcion: "Este finde veni a disfrutar de este show. Te esperamos en Bar Raices Calle 2 y 169.",
        fecha: "10/11/2024",
        hora: "20:00",
        precio: "Arancelada",
        categoria: "shows"
    },
    {
        imagen: "./assets/actividades/pesca.png",
        nombre: "Pesca Embarcada",
        descripcion: "Salidas diarias de pesca 🎣 Embarcada a todas las especies. Desde Club Náutico de Berisso.",
        fecha: "15/11/2024",
        hora: "08:00",
        precio: "Arancelada",
        categoria: "pesca"
    },
    {
        imagen: "./assets/actividades/noviembre2024/literario15-11.png",
        nombre: "Encuentro Literario",
        descripcion: "Veni a disfrutar este viernes 15 de noviembre a las 18:00hs en el Centro de Residentes Santiageños (Calle 7 y 150).",
        fecha: "15/11/2024",
        hora: "18:00",
        precio: "Gratuito",
        categoria: "cultura"
    },
    {
        imagen: "./assets/actividades/noviembre2024/muestra15-11.png",
        nombre: "Muestra Conjunta - Taller de Teatro Leído y el Quinteto Municipal",
        descripcion: "Veni a disfrutar este viernes 15 de noviembre a las 18:00hs en la Casa de Culturas (Av. Montevideo N°821).",
        fecha: "15/11/2024",
        hora: "18:00",
        precio: "Gratuito",
        categoria: "cultura"
    },
    {
        imagen: "./assets/actividades/monoblock.jpg",
        nombre: "MONOBLOCK viernes de cocina a la carta",
        descripcion: "Experiencia gastronómica en 10 y 161 restaurante Monoblock.",
        fecha: "15/11/2024",
        hora: "21:00",
        precio: "Arancelada",
        categoria: "shows"
    },
    {
        imagen: "./assets/actividades/noviembre2024/15-11.png",
        nombre: "Ignacio Copani",
        descripcion: "Este finde veni a disfrutar de este show. Te esperamos en Bar Raices Calle 2 y 169.",
        fecha: "15/11/2024",
        hora: "21:00",
        precio: "Arancelada",
        categoria: "shows"
    },
    {
        imagen: "./assets/actividades/pesca.png",
        nombre: "Pesca Embarcada",
        descripcion: "Salidas diarias de pesca 🎣 Embarcada a todas las especies. Desde Club Náutico de Berisso.",
        fecha: "16/11/2024",
        hora: "08:00",
        precio: "Arancelada",
        categoria: "pesca"
    },
    {
        imagen: "./assets/actividades/visita.png",
        nombre: "Visita a viñedo + visita a Cooperativa de la Costa c/ degustación de vinos",
        descripcion: "Visitamos un viñedo y luego la Cooperativa de la Costa en Av. Montevideo y calle 81, Los Talas. Incluye degustación de vinos. Requisito: Contar con movilidad propia. Inscripción previa por WhatsApp al 221-5249934",
        fecha: "16/11/2024",
        hora: "10:00",
        precio: "Arancelada",
        categoria: "paseos"
    },
    {
        imagen: "./assets/actividades/agosto2024/yate.png",
        nombre: "Travesía en yate privado🛳️",
        descripcion: "Salimos desde el club Marina del Sur (Carlos Gardel 5000). Incluye 2 hs y media aproximadamente de navegación con coordinación, degustacion de vino de la costa 🍷, bebida (gaseosas, agua, té y café) y cosas dulces 🍰. Podes traer equipo de mate🧉 con reserva previa.",
        fecha: "16/11/2024",
        hora: "19:00",
        precio: "Arancelada",
        categoria: "paseos"
    },
    {
        imagen: "./assets/actividades/agosto2024/navVela.png",
        nombre: "NAVEGACIÓN A VELA ⛵✨",
        descripcion: "Salimos del Club Nautico de Berisso (Genova, 5003). Recomendamos estar 15 min antes. La salida dura 2 horas y media y se recorren los puntos mas emblematicos del delta del Rio Santiago🤩 Podrás vivir la experiencia de aprender a navegar en velero. Incluye consumición🧃",
        fecha: "16/11/2024",
        hora: "16:30",
        precio: "Arancelada",
        categoria: "paseos"
    },
    {
        imagen: "./assets/actividades/museo1871.png",
        nombre: "Museo 1871 Abre sus puertas",
        descripcion: "Acércate a Av. Montevideo y esquina 32 y conoce la historia de la ciudad en un solo lugar. Visita Guiada destinada a la comunidad sorda e hipoacúsica.",
        fecha: "16/11/2024",
        hora: "19:00",
        precio: "Gratuita",
        categoria: "paseos"
    },
    {
        imagen: "./assets/actividades/macany.png",
        nombre: "Museo A Cielo Abierto a calle Nueva York",
        descripcion: "Acércate a la calle Nueva York y conoce la historia de esta emblematica calle en un solo lugar. Organiza MACANY.",
        fecha: "16/11/2024",
        hora: "19:00",
        precio: "Gratuita",
        categoria: "paseos"
    },
    {
        imagen: "./assets/actividades/noviembre2024/museos16.png",
        nombre: "Casa de Culturas",
        descripcion: "Acércate a Av. Montevideo N°821. Organiza Casa de Culturas junto a la Red de Museos de La Plata y la UNLP.",
        fecha: "16/11/2024",
        hora: "20:00",
        precio: "Gratuita",
        categoria: "paseos"
    },
    {
        imagen: "./assets/actividades/delta.png",
        nombre: "DELTA NOCTURNO 🛳️",
        descripcion: "El recorrido por el Rio Santiago durará 1 hora y 30 minutos aprox. Incluye guiada y degustación de vino de la costa, tipico de Berisso🍷",
        fecha: "16/11/2024",
        hora: "20:00",
        precio: "Arancelada",
        categoria: "paseos"
    },
    {
        imagen: "./assets/actividades/monoblock.jpg",
        nombre: "MONOBLOCK sábado de menú por pasos",
        descripcion: "Experiencia gastronómica en 10 y 161 restaurante Monoblock.",
        fecha: "16/11/2024",
        hora: "21:00",
        precio: "Arancelada",
        categoria: "shows"
    },
    {
        imagen: "./assets/actividades/noviembre2024/16-11.png",
        nombre: "Fina y Soledad - Transformismo y Humor",
        descripcion: "Este finde veni a disfrutar de este show. Te esperamos en Bar Raices Calle 2 y 169.",
        fecha: "16/11/2024",
        hora: "21:00",
        precio: "Arancelada",
        categoria: "shows"
    },
    {
        imagen: "./assets/actividades/noviembre2024/16-11-1.png",
        nombre: "Los Limones Jaidefiniyon",
        descripcion: "Este finde veni a disfrutar de este show. Te esperamos en Bar Raices Calle 2 y 169.",
        fecha: "16/11/2024",
        hora: "23:45",
        precio: "Arancelada",
        categoria: "shows"
    },
    {
        imagen: "./assets/actividades/pesca.png",
        nombre: "Pesca Embarcada",
        descripcion: "Salidas diarias de pesca 🎣 Embarcada a todas las especies. Desde Club Náutico de Berisso.",
        fecha: "17/11/2024",
        hora: "08:00",
        precio: "Arancelada",
        categoria: "pesca"
    },
    {
        imagen: "./assets/actividades/noviembre2024/17-11.png",
        nombre: "Micaela Cauque - Presenta nuevo repertorio",
        descripcion: "Este finde veni a disfrutar de este show. Te esperamos en Bar Raices Calle 2 y 169.",
        fecha: "17/11/2024",
        hora: "13:00",
        precio: "Arancelada",
        categoria: "shows"
    },
    {
        imagen: "./assets/actividades/noviembre2024/danzapolaca17.png",
        nombre: "2° Encuentro Internacional de Danzas Folclóricas Polacas",
        descripcion: "Este finde veni a disfrutar de este show. Te esperamos en el Gimnasio municipal de Berisso.",
        fecha: "17/11/2024",
        hora: "17:00",
        precio: "Gratuita",
        categoria: "shows"
    },
    {
        imagen: "./assets/actividades/noviembre2024/17-11-1.png",
        nombre: "Devi Jazz - Clásicos y Bossa",
        descripcion: "Este finde veni a disfrutar de este show. Te esperamos en Bar Raices Calle 2 y 169.",
        fecha: "17/11/2024",
        hora: "20:00",
        precio: "Arancelada",
        categoria: "shows"
    },
    {
        imagen: "./assets/actividades/pesca.png",
        nombre: "Pesca Embarcada",
        descripcion: "Salidas diarias de pesca 🎣 Embarcada a todas las especies. Desde Club Náutico de Berisso.",
        fecha: "22/11/2024",
        hora: "08:00",
        precio: "Arancelada",
        categoria: "pesca"
    },
    {
        imagen: "./assets/actividades/noviembre2024/musica22-11.png",
        nombre: "Día de la Música ",
        descripcion: "Veni a disfrutar este viernes 22 de noviembre a las 17:00hs en Monumento a la Música de los Inmigrantes (Av. Génova y 150) del Día de la Música!",
        fecha: "22/11/2024",
        hora: "17:00",
        precio: "Gratuito",
        categoria: "cultura"
    },
    {
        imagen: "./assets/actividades/agosto2024/navVela.png",
        nombre: "NAVEGACIÓN A VELA ⛵✨",
        descripcion: "Salimos del Club Nautico de Berisso (Genova, 5003). Recomendamos estar 15 min antes. La salida dura 2 horas y media y se recorren los puntos mas emblematicos del delta del Rio Santiago🤩 Podrás vivir la experiencia de aprender a navegar en velero. Incluye consumición🧃",
        fecha: "22/11/2024",
        hora: "17:30",
        precio: "Arancelada",
        categoria: "paseos"
    },
    {
        imagen: "./assets/actividades/noviembre2024/circo22-11.png",
        nombre: "Circo en los Barrios",
        descripcion: "Veni a disfrutar este viernes 22 de noviembre a las 19:30hs en Club Villa Argüello (Calle 128 e/ 64 y 65). ",
        fecha: "22/11/2024",
        hora: "19:30",
        precio: "Gratuito",
        categoria: "cultura"
    },
    {
        imagen: "./assets/actividades/monoblock.jpg",
        nombre: "MONOBLOCK viernes de cocina a la carta",
        descripcion: "Experiencia gastronómica en 10 y 161 restaurante Monoblock.",
        fecha: "22/11/2024",
        hora: "21:00",
        precio: "Arancelada",
        categoria: "shows"
    },
    {
        imagen: "./assets/actividades/noviembre2024/22-11.png",
        nombre: "ADRIANA VARELA en La Nueva York",
        descripcion: "Este finde veni a disfrutar de este show. Te esperamos en Bar Raices Calle 2 y 169.",
        fecha: "22/11/2024",
        hora: "21:00",
        precio: "Arancelada",
        categoria: "shows"
    },
    {
        imagen: "./assets/actividades/pesca.png",
        nombre: "Pesca Embarcada",
        descripcion: "Salidas diarias de pesca 🎣 Embarcada a todas las especies. Desde Club Náutico de Berisso.",
        fecha: "23/11/2024",
        hora: "08:00",
        precio: "Arancelada",
        categoria: "pesca"
    },
    {
        imagen: "./assets/actividades/noviembre2024/prov23-11.png",
        nombre: "21° Fiesta de los Provincianos",
        descripcion: "Este finde te invitamos a disfrutar de la 21° Fiesta de los Provincianos en el Playon Municipal.",
        fecha: "23/11/2024",
        hora: "14:00",
        precio: "Gratuita",
        categoria: "cultura"
    },
    {
        imagen: "./assets/actividades/agosto2024/navVela.png",
        nombre: "NAVEGACIÓN A VELA ⛵✨",
        descripcion: "Salimos del Club Nautico de Berisso (Genova, 5003). Recomendamos estar 15 min antes. La salida dura 2 horas y media y se recorren los puntos mas emblematicos del delta del Rio Santiago🤩 Podrás vivir la experiencia de aprender a navegar en velero. Incluye consumición🧃",
        fecha: "23/11/2024",
        hora: "17:30",
        precio: "Arancelada",
        categoria: "paseos"
    },
    {
        imagen: "./assets/actividades/puestaDelSol.png",
        nombre: "Puesta de sol en yate privado 🛳️",
        descripcion: "Salimos desde el club Marina del Sur (Carlos Gardel 5000). Incluye 2 hs y media aproximadamente de navegación con coordinación, degustacion de vino de la costa 🍷, bebida (gaseosas, agua, té y café) y cosas dulces 🍰. Podes traer equipo de mate🧉 con reserva previa.",
        fecha: "23/11/2024",
        hora: "17:30",
        precio: "Arancelada",
        categoria: "paseos"
    },
    {
        imagen: "./assets/actividades/noviembre2024/creer23-11.png",
        nombre: "Creer o reventar",
        descripcion: "Veni a disfrutar de este show en Sala TCB - Nueva York Y Marsella. Organiza Teatro Comunitario de Berisso.",
        fecha: "23/11/2024",
        hora: "20:00",
        precio: "Arancelada",
        categoria: "shows"
    },
    {
        imagen: "./assets/actividades/monoblock.jpg",
        nombre: "MONOBLOCK sábado de menú por pasos",
        descripcion: "Experiencia gastronómica en 10 y 161 restaurante Monoblock.",
        fecha: "23/11/2024",
        hora: "21:00",
        precio: "Arancelada",
        categoria: "shows"
    },
    {
        imagen: "./assets/actividades/noviembre2024/23-11.png",
        nombre: "3DC Versiones acústicas de Rock Nacional",
        descripcion: "Este finde veni a disfrutar de este show. Te esperamos en Bar Raices Calle 2 y 169.",
        fecha: "23/11/2024",
        hora: "21:00",
        precio: "Arancelada",
        categoria: "shows"
    },
    {
        imagen: "./assets/actividades/pesca.png",
        nombre: "Pesca Embarcada",
        descripcion: "Salidas diarias de pesca 🎣 Embarcada a todas las especies. Desde Club Náutico de Berisso.",
        fecha: "24/11/2024",
        hora: "08:00",
        precio: "Arancelada",
        categoria: "pesca"
    },
    {
        imagen: "./assets/actividades/agosto2024/navVela.png",
        nombre: "NAVEGACIÓN A VELA ⛵✨",
        descripcion: "Salimos del Club Nautico de Berisso (Genova, 5003). Recomendamos estar 15 min antes. La salida dura 2 horas y media y se recorren los puntos mas emblematicos del delta del Rio Santiago🤩 Podrás vivir la experiencia de aprender a navegar en velero. Incluye consumición🧃",
        fecha: "24/11/2024",
        hora: "17:30",
        precio: "Arancelada",
        categoria: "paseos"
    },
    {
        imagen: "./assets/actividades/noviembre2024/24-11.png",
        nombre: "SENTIDOS Taller de música y arte",
        descripcion: "Este finde veni a disfrutar de este show. Te esperamos en Bar Raices Calle 2 y 169.",
        fecha: "24/11/2024",
        hora: "20:00",
        precio: "Arancelada",
        categoria: "shows"
    },
    {
        imagen: "./assets/actividades/pesca.png",
        nombre: "Pesca Embarcada",
        descripcion: "Salidas diarias de pesca 🎣 Embarcada a todas las especies. Desde Club Náutico de Berisso.",
        fecha: "29/11/2024",
        hora: "08:00",
        precio: "Arancelada",
        categoria: "pesca"
    },
    {
        imagen: "./assets/actividades/noviembre2024/prosvita29-11.png",
        nombre: "Conociendo las artes, oficios y artesanías tradicionales de la Cultura Ucraniana",
        descripcion: "Seguimos difundiendo nuestra cultura este viernes 29 y sábado 30 en el horario de 19 a 22hs en Av. Montevideo N1088 Berisso. Entrada libre y gratuita. Te esperamos!",
        fecha: "29/11/2024",
        hora: "19:00",
        precio: "Gratuito",
        categoria: "cultura"
    },
    {
        imagen: "./assets/actividades/monoblock.jpg",
        nombre: "MONOBLOCK viernes de cocina a la carta",
        descripcion: "Experiencia gastronómica en 10 y 161 restaurante Monoblock.",
        fecha: "29/11/2024",
        hora: "21:00",
        precio: "Arancelada",
        categoria: "shows"
    },
    {
        imagen: "./assets/actividades/noviembre2024/29-11.png",
        nombre: "NOCHE DE TABLAO FLAMENCO",
        descripcion: "Este finde veni a disfrutar de este show. Te esperamos en Bar Raices Calle 2 y 169.",
        fecha: "29/11/2024",
        hora: "21:00",
        precio: "Arancelada",
        categoria: "shows"
    },
    {
        imagen: "./assets/actividades/pesca.png",
        nombre: "Pesca Embarcada",
        descripcion: "Salidas diarias de pesca 🎣 Embarcada a todas las especies. Desde Club Náutico de Berisso.",
        fecha: "30/11/2024",
        hora: "08:00",
        precio: "Arancelada",
        categoria: "pesca"
    },
    {
        imagen: "./assets/actividades/noviembre2024/findemusica30-11.png",
        nombre: "“Finde Música” en el marco de la Fiesta de los Provincianos",
        descripcion: "Este finde vení a disfrutar de pura música y demás en el marco de la Fiesta de los Provincianos.",
        fecha: "30/11/2024",
        hora: "14:00",
        precio: "Gratuita",
        categoria: "shows"
    },
    {
        imagen: "./assets/actividades/noviembre2024/provincianos30-11.png",
        nombre: "🇦🇷21° Fiesta del Provinciano: Jornada de Cierre",
        descripcion: "Te esperamos para disfrutar del ultimo día de la fiesta que celebra nuestras raíces y costumbres.",
        fecha: "30/11/2024",
        hora: "14:00",
        precio: "Gratuita",
        categoria: "shows"
    },
    {
        imagen: "./assets/actividades/agosto2024/navVela.png",
        nombre: "NAVEGACIÓN A VELA ⛵✨",
        descripcion: "Salimos del Club Nautico de Berisso (Genova, 5003). Recomendamos estar 15 min antes. La salida dura 2 horas y media y se recorren los puntos mas emblematicos del delta del Rio Santiago🤩 Podrás vivir la experiencia de aprender a navegar en velero. Incluye consumición🧃",
        fecha: "30/11/2024",
        hora: "17:30",
        precio: "Arancelada",
        categoria: "paseos"
    },
    {
        imagen: "./assets/actividades/puestaDelSol.png",
        nombre: "Puesta de sol en yate privado 🛳️",
        descripcion: "Salimos desde el club Marina del Sur (Carlos Gardel 5000). Incluye 2 hs y media aproximadamente de navegación con coordinación, degustacion de vino de la costa 🍷, bebida (gaseosas, agua, té y café) y cosas dulces 🍰. Podes traer equipo de mate🧉 con reserva previa.",
        fecha: "30/11/2024",
        hora: "17:30",
        precio: "Arancelada",
        categoria: "paseos"
    },
    {
        imagen: "./assets/actividades/noviembre2024/circo22-11.png",
        nombre: "Circo en los Barrios",
        descripcion: "Veni a disfrutar este sabado 30 de noviembre a las 17:30hs en el Gimnasio JB Justo (Calle 32 y 173N). ",
        fecha: "30/11/2024",
        hora: "17:30",
        precio: "Gratuito",
        categoria: "cultura"
    },
    {
        imagen: "./assets/actividades/noviembre2024/tintas30-11.png",
        nombre: "🎨 Taller de Tintas Naturales 🎨",
        descripcion: "Te invitamos a sumergirte en el arte de crear tintas naturales en un encuentro único, donde aprenderás a extraer colores de la naturaleza y transformarlos en herramientas de expresión. 🌱✨ ",
        fecha: "30/11/2024",
        hora: "18:00",
        precio: "Gratuito",
        categoria: "cultura"
    },
    {
        imagen: "./assets/actividades/noviembre2024/prosvita29-11.png",
        nombre: "Conociendo las artes, oficios y artesanías tradicionales de la Cultura Ucraniana",
        descripcion: "Seguimos difundiendo nuestra cultura este viernes 29 y sábado 30 en el horario de 19 a 22hs en Av. Montevideo N1088 Berisso. Entrada libre y gratuita. Te esperamos!",
        fecha: "30/11/2024",
        hora: "19:00",
        precio: "Gratuito",
        categoria: "cultura"
    },
    {
        imagen: "./assets/actividades/monoblock.jpg",
        nombre: "MONOBLOCK sábado de menú por pasos",
        descripcion: "Experiencia gastronómica en 10 y 161 restaurante Monoblock.",
        fecha: "30/11/2024",
        hora: "21:00",
        precio: "Arancelada",
        categoria: "shows"
    },
    {
        imagen: "./assets/actividades/noviembre2024/30-11.png",
        nombre: "Julieta Díaz & Diego Presa ",
        descripcion: "Este finde veni a disfrutar de este show. Te esperamos en Bar Raices Calle 2 y 169.",
        fecha: "30/11/2024",
        hora: "21:00",
        precio: "Arancelada",
        categoria: "shows"
    },
    {
        imagen: "./assets/actividades/pesca.png",
        nombre: "Pesca Embarcada",
        descripcion: "Salidas diarias de pesca 🎣 Embarcada a todas las especies. Desde Club Náutico de Berisso.",
        fecha: "01/12/2024",
        hora: "08:00",
        precio: "Arancelada",
        categoria: "pesca"
    },
    {
        imagen: "./assets/actividades/agosto2024/navVela.png",
        nombre: "NAVEGACIÓN A VELA ⛵✨",
        descripcion: "Salimos del Club Nautico de Berisso (Genova, 5003). Recomendamos estar 15 min antes. La salida dura 2 horas y media y se recorren los puntos mas emblematicos del delta del Rio Santiago🤩 Podrás vivir la experiencia de aprender a navegar en velero. Incluye consumición🧃",
        fecha: "01/12/2024",
        hora: "17:30",
        precio: "Arancelada",
        categoria: "paseos"
    },
    {
        imagen: "./assets/actividades/noviembre2024/01-12.png",
        nombre: "“Éxodo, El movimiento continúa”",
        descripcion: "Este finde veni a disfrutar de este show. Te esperamos en Bar Raices Calle 2 y 169.",
        fecha: "01/12/2024",
        hora: "20:00",
        precio: "Arancelada",
        categoria: "shows"
    },
    {
        imagen: "./assets/actividades/pesca.png",
        nombre: "Pesca Embarcada",
        descripcion: "Salidas diarias de pesca 🎣 Embarcada a todas las especies. Desde Club Náutico de Berisso.",
        fecha: "06/12/2024",
        hora: "08:00",
        precio: "Arancelada",
        categoria: "pesca"
    },
    {
        imagen: "./assets/actividades/diciembre2024/fiesta06-07-08.png",
        nombre: "Fiesta de la Birra de Berisso",
        descripcion: "Este viernes, sábado y domingo llega una nueva edición de la Fiesta de la Birra.🍻<br>Birra, música y amigos… No te lo podes perder🥳",
        fecha: "06/12/2024",
        hora: "16:00",
        precio: "Gratuita",
        categoria: "paseos"
    },
    {
        imagen: "./assets/actividades/diciembre2024/hijasdelrio06-07-08.png",
        nombre: "Feria de Emprendedoras “Hijas del Río” ",
        descripcion: "Vení a disfrutar de una exposición y venta de trabajos artesanales únicos, hechos con amor y dedicación por emprendedoras locales. Te esperamos en Casa de Culturas (Av. Montevideo N°821). ",
        fecha: "06/12/2024",
        hora: "16:30",
        precio: "Gratuito",
        categoria: "cultura"
    },
    {
        imagen: "./assets/actividades/monoblock.jpg",
        nombre: "MONOBLOCK viernes de cocina a la carta",
        descripcion: "Experiencia gastronómica en 10 y 161 restaurante Monoblock.",
        fecha: "06/12/2024",
        hora: "21:00",
        precio: "Arancelada",
        categoria: "shows"
    },
    {
        imagen: "./assets/actividades/diciembre2024/06-12.png",
        nombre: "Sofia Viola presenta Alma Gitana",
        descripcion: "Este finde veni a disfrutar de este show. Te esperamos en Bar Raices Calle 2 y 169.",
        fecha: "06/12/2024",
        hora: "21:00",
        precio: "Arancelada",
        categoria: "shows"
    },
    {
        imagen: "./assets/actividades/pesca.png",
        nombre: "Pesca Embarcada",
        descripcion: "Salidas diarias de pesca 🎣 Embarcada a todas las especies. Desde Club Náutico de Berisso.",
        fecha: "07/12/2024",
        hora: "08:00",
        precio: "Arancelada",
        categoria: "pesca"
    },
    {
        imagen: "./assets/actividades/visita.png",
        nombre: "Visita a viñedo + visita a Cooperativa de la Costa c/ degustación de vinos",
        descripcion: "Visitamos un viñedo y luego la Cooperativa de la Costa en Av. Montevideo y calle 81, Los Talas. Incluye degustación de vinos. Requisito: Contar con movilidad propia. Inscripción previa por WhatsApp al 221-5249934",
        fecha: "07/12/2024",
        hora: "11:00",
        precio: "Arancelada",
        categoria: "paseos"
    },
    {
        imagen: "./assets/actividades/diciembre2024/fiesta06-07-08.png",
        nombre: "Fiesta de la Birra de Berisso",
        descripcion: "Este viernes, sábado y domingo llega una nueva edición de la Fiesta de la Birra.🍻<br>Birra, música y amigos… No te lo podes perder🥳",
        fecha: "07/12/2024",
        hora: "16:00",
        precio: "Gratuita",
        categoria: "paseos"
    },
    {
        imagen: "./assets/actividades/diciembre2024/hijasdelrio06-07-08.png",
        nombre: "Feria de Emprendedoras “Hijas del Río” ",
        descripcion: "Vení a disfrutar de una exposición y venta de trabajos artesanales únicos, hechos con amor y dedicación por emprendedoras locales. Te esperamos en Casa de Culturas (Av. Montevideo N°821). ",
        fecha: "07/12/2024",
        hora: "16:30",
        precio: "Gratuito",
        categoria: "cultura"
    },
    {
        imagen: "./assets/actividades/diciembre2024/navegandoestrellas07-12.png",
        nombre: "Navegando Estrellas",
        descripcion: "Salimos del Club Nautico de Berisso (Genova, 5003). Recomendamos estar 15 min antes.",
        fecha: "07/12/2024",
        hora: "19:00",
        precio: "Arancelada",
        categoria: "paseos"
    },
    {
        imagen: "./assets/actividades/monoblock.jpg",
        nombre: "MONOBLOCK sábado de menú por pasos",
        descripcion: "Experiencia gastronómica en 10 y 161 restaurante Monoblock.",
        fecha: "07/12/2024",
        hora: "21:00",
        precio: "Arancelada",
        categoria: "shows"
    },
    {
        imagen: "./assets/actividades/diciembre2024/07-12.png",
        nombre: "Cuarteto Venezolano + Seba Fernández + Natalio Sturla ",
        descripcion: "Este finde veni a disfrutar de este show. Te esperamos en Bar Raices Calle 2 y 169.",
        fecha: "07/12/2024",
        hora: "21:00",
        precio: "Arancelada",
        categoria: "shows"
    },
    {
        imagen: "./assets/actividades/pesca.png",
        nombre: "Pesca Embarcada",
        descripcion: "Salidas diarias de pesca 🎣 Embarcada a todas las especies. Desde Club Náutico de Berisso.",
        fecha: "08/12/2024",
        hora: "08:00",
        precio: "Arancelada",
        categoria: "pesca"
    },
    {
        imagen: "./assets/actividades/diciembre2024/fiesta06-07-08.png",
        nombre: "Fiesta de la Birra de Berisso",
        descripcion: "Este viernes, sábado y domingo llega una nueva edición de la Fiesta de la Birra.🍻<br>Birra, música y amigos… No te lo podes perder🥳",
        fecha: "08/12/2024",
        hora: "16:00",
        precio: "Gratuita",
        categoria: "paseos"
    },
    {
        imagen: "./assets/actividades/diciembre2024/hijasdelrio06-07-08.png",
        nombre: "Feria de Emprendedoras “Hijas del Río” ",
        descripcion: "Vení a disfrutar de una exposición y venta de trabajos artesanales únicos, hechos con amor y dedicación por emprendedoras locales. Te esperamos en Casa de Culturas (Av. Montevideo N°821). ",
        fecha: "08/12/2024",
        hora: "16:30",
        precio: "Gratuito",
        categoria: "cultura"
    },
    {
        imagen: "./assets/actividades/diciembre2024/08-12.png",
        nombre: "MIXTION MÚSICA Versiones tangueras del rock nacional",
        descripcion: "Este finde veni a disfrutar de este show. Te esperamos en Bar Raices Calle 2 y 169.",
        fecha: "08/12/2024",
        hora: "20:00",
        precio: "Arancelada",
        categoria: "shows"
    },
    {
        imagen: "./assets/actividades/pesca.png",
        nombre: "Pesca Embarcada",
        descripcion: "Salidas diarias de pesca 🎣 Embarcada a todas las especies. Desde Club Náutico de Berisso.",
        fecha: "13/12/2024",
        hora: "08:00",
        precio: "Arancelada",
        categoria: "pesca"
    },
    {
        imagen: "./assets/actividades/monoblock.jpg",
        nombre: "MONOBLOCK viernes de cocina a la carta",
        descripcion: "Experiencia gastronómica en 10 y 161 restaurante Monoblock.",
        fecha: "13/12/2024",
        hora: "21:00",
        precio: "Arancelada",
        categoria: "shows"
    },
    {
        imagen: "./assets/actividades/diciembre2024/13-12.png",
        nombre: "ROMÁNTICAS TANGUERAS Susana Bauzada - Ana Ruiz",
        descripcion: "Este finde veni a disfrutar de este show. Te esperamos en Bar Raices Calle 2 y 169.",
        fecha: "13/12/2024",
        hora: "21:00",
        precio: "Arancelada",
        categoria: "shows"
    },
    {
        imagen: "./assets/actividades/pesca.png",
        nombre: "Pesca Embarcada",
        descripcion: "Salidas diarias de pesca 🎣 Embarcada a todas las especies. Desde Club Náutico de Berisso.",
        fecha: "14/12/2024",
        hora: "08:00",
        precio: "Arancelada",
        categoria: "pesca"
    },
    {
        imagen: "./assets/actividades/museo1871.png",
        nombre: "Museo 1871 Abre sus puertas",
        descripcion: "Acércate a Av. Montevideo y esquina 32 y conoce la historia de la ciudad en un solo lugar. Visita Guiada destinada a la comunidad sorda e hipoacúsica.",
        fecha: "14/12/2024",
        hora: "15:00",
        precio: "Gratuita",
        categoria: "paseos"
    },
    {
        imagen: "./assets/actividades/agosto2024/navVela.png",
        nombre: "NAVEGACIÓN A VELA ⛵✨",
        descripcion: "Salimos del Club Nautico de Berisso (Genova, 5003). Recomendamos estar 15 min antes. La salida dura 2 horas y media y se recorren los puntos mas emblematicos del delta del Rio Santiago🤩 Podrás vivir la experiencia de aprender a navegar en velero. Incluye consumición🧃",
        fecha: "14/12/2024",
        hora: "19:00",
        precio: "Arancelada",
        categoria: "paseos"
    },
    {
        imagen: "./assets/actividades/agosto2024/yate.png",
        nombre: "Travesía en yate privado🛳️",
        descripcion: "Salimos desde el club Marina del Sur (Carlos Gardel 5000). Incluye 2 hs y media aproximadamente de navegación con coordinación, degustacion de vino de la costa 🍷, bebida (gaseosas, agua, té y café) y cosas dulces 🍰. Podes traer equipo de mate🧉 con reserva previa.",
        fecha: "14/12/2024",
        hora: "19:00",
        precio: "Arancelada",
        categoria: "paseos"
    },
    {
        imagen: "./assets/actividades/delta.png",
        nombre: "DELTA NOCTURNO 🛳️",
        descripcion: "El recorrido por el Rio Santiago durará 1 hora y 30 minutos aprox. Incluye guiada y degustación de vino de la costa, tipico de Berisso🍷",
        fecha: "14/12/2024",
        hora: "20:00",
        precio: "Arancelada",
        categoria: "paseos"
    },
    {
        imagen: "./assets/actividades/monoblock.jpg",
        nombre: "MONOBLOCK sábado de menú por pasos",
        descripcion: "Experiencia gastronómica en 10 y 161 restaurante Monoblock.",
        fecha: "14/12/2024",
        hora: "21:00",
        precio: "Arancelada",
        categoria: "shows"
    },
    {
        imagen: "./assets/actividades/diciembre2024/14-12.png",
        nombre: "Raúl Barboza",
        descripcion: "Este finde veni a disfrutar de este show. Te esperamos en Bar Raices Calle 2 y 169.",
        fecha: "14/12/2024",
        hora: "21:00",
        precio: "Arancelada",
        categoria: "shows"
    },
    {
        imagen: "./assets/actividades/pesca.png",
        nombre: "Pesca Embarcada",
        descripcion: "Salidas diarias de pesca 🎣 Embarcada a todas las especies. Desde Club Náutico de Berisso.",
        fecha: "15/12/2024",
        hora: "08:00",
        precio: "Arancelada",
        categoria: "pesca"
    },
    {
        imagen: "./assets/actividades/julio2024/islaPaulino26al28-07.png",
        nombre: "Experiencia Isla Paulino",
        descripcion: "Salida desde el Embarcadero de Berisso (calle Génova 5003). Organiza Cámara de Turismo Berisso. ",
        fecha: "15/12/2024",
        hora: "11:00",
        precio: "Arancelada",
        categoria: "paseos"
    },
    {
        imagen: "./assets/actividades/diciembre2024/15-12-1.png",
        nombre: "Ciclo Gastronomía de Antaño",
        descripcion: "Este finde veni a disfrutar de este show. Te esperamos en Bar Raices Calle 2 y 169.",
        fecha: "15/12/2024",
        hora: "13:00",
        precio: "Arancelada",
        categoria: "shows"
    },
    {
        imagen: "./assets/actividades/diciembre2024/creer15-12.png",
        nombre: "Creer o reventar",
        descripcion: "Veni a disfrutar de este show en Sala TCB - Nueva York Y Marsella. Organiza Teatro Comunitario de Berisso.",
        fecha: "15/12/2024",
        hora: "20:00",
        precio: "Arancelada",
        categoria: "shows"
    },
    {
        imagen: "./assets/actividades/diciembre2024/15-12-2.png",
        nombre: "CRISIS Una obra de humor, música y terapias",
        descripcion: "Este finde veni a disfrutar de este show. Te esperamos en Bar Raices Calle 2 y 169.",
        fecha: "15/12/2024",
        hora: "20:00",
        precio: "Arancelada",
        categoria: "shows"
    },
    {
        imagen: "./assets/actividades/pesca.png",
        nombre: "Pesca Embarcada",
        descripcion: "Salidas diarias de pesca 🎣 Embarcada a todas las especies. Desde Club Náutico de Berisso.",
        fecha: "20/12/2024",
        hora: "08:00",
        precio: "Arancelada",
        categoria: "pesca"
    },
    {
        imagen: "./assets/actividades/diciembre2024/feria20-12.png",
        nombre: "FERIA DE FIN DE AÑO",
        descripcion: "🎊 Terminamos el año y queremos celebrarlo con toda la comunidad 🎊<br>🗓️ VIERNES 20 de 8:30 a 15hs<br>📍Playon del Parque Civico.",
        fecha: "20/12/2024",
        hora: "08:30",
        precio: "Gratuita",
        categoria: "paseos"
    },
    {
        imagen: "./assets/actividades/diciembre2024/hijasdelrio20-12.png",
        nombre: "Feria de Emprendedoras “Hijas del Río” ",
        descripcion: "Vení a disfrutar de una exposición y venta de trabajos artesanales únicos, hechos con amor y dedicación por emprendedoras locales. Te esperamos en Casa de Culturas (Av. Montevideo N°821). ",
        fecha: "20/12/2024",
        hora: "17:00",
        precio: "Gratuito",
        categoria: "cultura"
    },
    {
        imagen: "./assets/actividades/diciembre2024/nochedecompras20-12.png",
        nombre: "🎄Noche de Compras",
        descripcion: "🗓️Jueves 19 y viernes 20<br>🕣De 19 a 23 hs.<br>📍Av. Montevideo Peatonal de calle 12 a calle 15.",
        fecha: "20/12/2024",
        hora: "19:00",
        precio: "Gratuita",
        categoria: "paseos"
    },
    {
        imagen: "./assets/actividades/monoblock.jpg",
        nombre: "MONOBLOCK viernes de cocina a la carta",
        descripcion: "Experiencia gastronómica en 10 y 161 restaurante Monoblock.",
        fecha: "20/12/2024",
        hora: "21:00",
        precio: "Arancelada",
        categoria: "shows"
    },
    {
        imagen: "./assets/actividades/pesca.png",
        nombre: "Pesca Embarcada",
        descripcion: "Salidas diarias de pesca 🎣 Embarcada a todas las especies. Desde Club Náutico de Berisso.",
        fecha: "21/12/2024",
        hora: "08:00",
        precio: "Arancelada",
        categoria: "pesca"
    },
    {
        imagen: "./assets/actividades/agosto2024/navVela.png",
        nombre: "NAVEGACIÓN A VELA ⛵✨",
        descripcion: "Salimos del Club Nautico de Berisso (Genova, 5003). Recomendamos estar 15 min antes. La salida dura 2 horas y media y se recorren los puntos mas emblematicos del delta del Rio Santiago🤩 Podrás vivir la experiencia de aprender a navegar en velero. Incluye consumición🧃",
        fecha: "21/12/2024",
        hora: "18:00",
        precio: "Arancelada",
        categoria: "paseos"
    },
    {
        imagen: "./assets/actividades/diciembre2024/bbp21-12.png",
        nombre: "🎄Fiesta de Fin de Año del Barrio Banco Provincia",
        descripcion: "🗓️Sábado 21 de diciembre<br>🕣Desde las 18 hs.<br>📍32 y 173 N<br><br>¡Vení a disfrutar en familia la fiesta del barrio!",
        fecha: "21/12/2024",
        hora: "18:00",
        precio: "Gratuita",
        categoria: "eventos"
    },
    {
        imagen: "./assets/actividades/monoblock.jpg",
        nombre: "MONOBLOCK sábado de menú por pasos",
        descripcion: "Experiencia gastronómica en 10 y 161 restaurante Monoblock.",
        fecha: "21/12/2024",
        hora: "21:00",
        precio: "Arancelada",
        categoria: "shows"
    },
    {
        imagen: "./assets/actividades/diciembre2024/21-12.png",
        nombre: "RÍO CHECO - ARAUZ FINOCCHI SKRT",
        descripcion: "Este finde veni a disfrutar de este show. Te esperamos en Bar Raices Calle 2 y 169.",
        fecha: "21/12/2024",
        hora: "21:00",
        precio: "Arancelada",
        categoria: "shows"
    },
    {
        imagen: "./assets/actividades/pesca.png",
        nombre: "Pesca Embarcada",
        descripcion: "Salidas diarias de pesca 🎣 Embarcada a todas las especies. Desde Club Náutico de Berisso.",
        fecha: "22/12/2024",
        hora: "08:00",
        precio: "Arancelada",
        categoria: "pesca"
    },
    
    {
        imagen: "./assets/actividades/diciembre2024/ny22-12.png",
        nombre: "Calle Nueva York Peatonal",
        descripcion: "Los invitamos el próximo Domingo 22 de diciembre a partir de las 17hs, a la Calle Nueva York Peatonal, donde reunimos distintas propuestas como visitas guiadas🏛️, música en vivo🎤, gastronomía🍟, y mucho más! No te lo pierdas🥳<br>🙌🏻¡Entrada libre y gratuita!",
        fecha: "22/12/2024",
        hora: "17:00",
        precio: "Gratuita",
        categoria: "paseos"
    },
    {
        imagen: "./assets/actividades/agosto2024/navVela.png",
        nombre: "NAVEGACIÓN A VELA ⛵✨",
        descripcion: "Salimos del Club Nautico de Berisso (Genova, 5003). Recomendamos estar 15 min antes. La salida dura 2 horas y media y se recorren los puntos mas emblematicos del delta del Rio Santiago🤩 Podrás vivir la experiencia de aprender a navegar en velero. Incluye consumición🧃",
        fecha: "22/12/2024",
        hora: "18:00",
        precio: "Arancelada",
        categoria: "paseos"
    },
    {
        imagen: "./assets/actividades/puestaDelSol.png",
        nombre: "Puesta de sol en yate privado 🛳️",
        descripcion: "Salimos desde el club Marina del Sur (Carlos Gardel 5000). Incluye 2 hs y media aproximadamente de navegación con coordinación, degustacion de vino de la costa 🍷, bebida (gaseosas, agua, té y café) y cosas dulces 🍰. Podes traer equipo de mate🧉 con reserva previa.",
        fecha: "22/12/2024",
        hora: "18:00",
        precio: "Arancelada",
        categoria: "paseos"
    },
    {
        imagen: "./assets/actividades/diciembre2024/22-12.png",
        nombre: "Juan Solo",
        descripcion: "Este finde veni a disfrutar de este show. Te esperamos en Bar Raices Calle 2 y 169.",
        fecha: "22/12/2024",
        hora: "21:00",
        precio: "Arancelada",
        categoria: "shows"
    },
    // Agrega más objetos para más actividades si es necesario
];

// Obtener el filtro y el contenedor de actividades
const filtroCategoria = document.getElementById("filtroCategoria");
const container = document.getElementById("actividadesContainer");
const prevPageBtn = document.getElementById("prevPage");
const nextPageBtn = document.getElementById("nextPage");
const pageInfo = document.getElementById("pageInfo");

let currentPage = 1;
const itemsPerPage = 9;
let actividadesFiltradas = [];

// Función para convertir el formato de fecha DD/MM/AAAA al formato MM/DD/AAAA
function convertirFormatoFecha(fecha) {
    const [dia, mes, año] = fecha.split('/');
    return `${mes}/${dia}/${año}`;
}

// Función para renderizar las tarjetas de actividades
function renderizarActividades(actividades, page = 1) {
    // Limpiar el contenedor antes de renderizar las nuevas tarjetas
    container.innerHTML = '';

    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const actividadesPagina = actividades.slice(start, end);

    actividadesPagina.forEach(actividad => {
        const tarjeta = document.createElement("div");
        tarjeta.className = "tarjeta-actividad bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full";
        tarjeta.innerHTML = `
            <img src="${actividad.imagen}" alt="${actividad.nombre}" class="w-full h-48 object-cover m-auto">
            <div class="info p-4">
                <h3 class="text-lg font-semibold mb-2">${actividad.nombre}</h3>
                <p class="text-sm mb-2">${actividad.descripcion}</p>
                <p class="text-sm mb-2">Fecha: ${actividad.fecha}</p>
                <p class="text-sm mb-2">Hora: ${actividad.hora}</p>
                <p class="text-sm mb-2">Actividad: ${actividad.precio}</p>
            </div>
        `;

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

    // Actualizar la información de paginación
    pageInfo.textContent = `Página ${page} de ${Math.ceil(actividades.length / itemsPerPage)}`;
    prevPageBtn.disabled = page === 1;
    nextPageBtn.disabled = end >= actividades.length;
}

// Función para filtrar y ordenar las actividades
function filtrarYOrdenarActividades() {
    const categoriaSeleccionada = filtroCategoria.value;
    actividadesFiltradas = actividades;

    // Filtrar por categoría si no se selecciona "todos" o "pasadas"
    if (categoriaSeleccionada !== 'todos' && categoriaSeleccionada !== 'pasadas') {
        const fechaActual = new Date();
        fechaActual.setHours(0, 0, 0, 0);
        actividadesFiltradas = actividadesFiltradas.filter(actividad => actividad.categoria === categoriaSeleccionada && 
            new Date(convertirFormatoFecha(actividad.fecha)) >= fechaActual);
    }

    // Filtrar las actividades según la categoría seleccionada
    if (categoriaSeleccionada === 'pasadas') {
        actividadesFiltradas = actividadesFiltradas.filter(actividad => {
            const fechaActual = new Date();
            fechaActual.setHours(0, 0, 0, 0);
            const fechaActividad = new Date(convertirFormatoFecha(actividad.fecha));
            return fechaActividad < fechaActual; // Actividades con fechas pasadas
        });

        actividadesFiltradas.sort((a, b) => {
            const fechaA = new Date(convertirFormatoFecha(a.fecha));
            const fechaB = new Date(convertirFormatoFecha(b.fecha));
            return fechaB - fechaA;});

    } else if (categoriaSeleccionada === 'todos') {
        actividadesFiltradas = actividadesFiltradas.filter(actividad => {
            const fechaActual = new Date();
            fechaActual.setHours(0, 0, 0, 0);
            const fechaActividad = new Date(convertirFormatoFecha(actividad.fecha));
            return fechaActividad >= fechaActual; // Actividades con fechas futuras o presentes
        });

         // Ordenar las actividades futuras de manera normal
         actividadesFiltradas.sort((a, b) => {
            const fechaA = new Date(convertirFormatoFecha(a.fecha));
            const fechaB = new Date(convertirFormatoFecha(b.fecha));
            return fechaA - fechaB;
        });
    }

    // Ordenar las actividades por fecha (más próxima primero)
    /*actividadesFiltradas.sort((a, b) => {
        const fechaA = new Date(convertirFormatoFecha(a.fecha));
        const fechaB = new Date(convertirFormatoFecha(b.fecha));
        return fechaA - fechaB;
    });*/

    // Renderizar las actividades filtradas y ordenadas
    currentPage = 1;
    renderizarActividades(actividadesFiltradas, currentPage);
}

// Manejadores de eventos para la paginación
prevPageBtn.addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        renderizarActividades(actividadesFiltradas, currentPage);
    }
});

nextPageBtn.addEventListener('click', () => {
    if (currentPage * itemsPerPage < actividadesFiltradas.length) {
        currentPage++;
        renderizarActividades(actividadesFiltradas, currentPage);
    }
});

// Escuchar el evento change del filtro
filtroCategoria.addEventListener('change', filtrarYOrdenarActividades);

// Llamar a la función inicialmente para mostrar todas las actividades
filtrarYOrdenarActividades();


