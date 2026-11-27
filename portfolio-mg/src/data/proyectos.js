const proyectos = [
    {
        id: 'frozen',
        titulo: 'Frozen',
        tecnologias: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'Java', 'Spring Boot', 'Python', 'Supabase'],
        descripcion: 'FROZEN es una aplicación web desarrollada para gestionar y optimizar los procesos de producción de una PyME de frutas y hortalizas. Permite administrar materias primas, planificar órdenes de producción, realizar el seguimiento de sus etapas y consultar indicadores para facilitar la toma de decisiones.',
        imagenes: [
            { src: '/images/carruselProyectos/inicioFrz.png', alt: 'Pantalla de inicio de Frozen' },
            { src: '/images/carruselProyectos/pantallaPrincipalFrz.png', alt: 'Pantalla Principal Frozen' },
            { src: '/images/carruselProyectos/1frz.png', alt: 'Pantalla  Frozen' },
            { src: '/images/carruselProyectos/stockFrz.png', alt: 'Stock Frozen' }
        ],

        enDesarrollo: false,
        demo: 'https://tplabo.vercel.app/',
        repositorio: 'https://github.com/MelinaBelenGomez/TPFinal_ProyectoProfesional',
    },

    {
        id: 'amazing',
        titulo: 'Backend Amazing',
        tecnologias: ['Java', 'POO', 'GIT', 'Lógica de Negocio'],
        descripcion: 'Simulador de gestión de envíos desarrollado en Java, aplicando los cuatro pilares de la Programación Orientada a Objetos (POO). El sistema representa las operaciones de una empresa logística mediante clases, objetos y relaciones entre entidades, implementando lógica de negocio, herencia, polimorfismo y reutilización de código.',
        imagenes: [
            { src: '/images/carruselProyectos/amazingIMG.png', alt: 'Amazing solo código' }
        ],

        enDesarrollo: false,
        demo: '',
        repositorio: 'https://github.com/MelinaBelenGomez/SimulacionEmpresaEnvios_Amazing_JAVA',
    },

            {
        id: '2048',
        titulo: 'Juego 2048',
        tecnologias: ['Java', 'Java Swing', 'WindowBuilder'],
        descripcion: 'Juego de lógica 2048 desarrollado en Java, aplicando Programación Orientada a Objetos (POO) e interfaz gráfica con Swing. Implementa una cuadrícula interactiva de 4×4, movimientos mediante teclado, combinación de fichas, cálculo de puntuaciones y controles para reiniciar o deshacer movimientos.',
        imagenes: [
            { src: '/images/carruselProyectos/2048Inicio.png', alt: '2048 Inicio' },
            { src: '/images/carruselProyectos/2048Juego.png', alt: '2048 Juego' },
            { src: '/images/carruselProyectos/2048Juego2.png', alt: '2048 Juego2' },
            { src: '/images/carruselProyectos/2048win.png', alt: '2048 Win' },
            { src: '/images/carruselProyectos/2048Lose.png', alt: '2048 Lose' }
        ],

        enDesarrollo: false,
        demo: '',
        repositorio: 'https://github.com/MelinaBelenGomez/juego2048_JAVA'
    },

    {
        id: 'peperina',
        titulo: 'Web Peperina Café',
        tecnologias: ['HTML5', 'CSS3', 'SASS/SCSS', 'Bootstrap 5'],
        descripcion: 'Sitio web institucional para una cafetería, desarrollado con un diseño responsive y una estructura de navegación multipágina. Incluye catálogo de productos, información del establecimiento, ubicaciones y formulario de contacto. Implementa estilos personalizados, animaciones, componentes interactivos y optimización SEO para mejorar la experiencia de usuario.',
        imagenes: [
            { src: '/images/carruselProyectos/PeperinaInicioMobile.png', alt: 'Peperina Inicio' },
            { src: '/images/carruselProyectos/peperinaMenu.png', alt: 'Peperina Menu' },
            { src: '/images/carruselProyectos/peperinaMenu2.png', alt: 'Peperina Menu y desc' },
            { src: '/images/carruselProyectos/peperinaContact.png', alt: 'Peperina Contacto' }
        ],

        enDesarrollo: false,
        demo: 'https://peperinacafe.netlify.app/',
        repositorio: 'https://github.com/MelinaBelenGomez/peperinaCafe'
    },


        {
        id: 'ahorcado',
        titulo: 'Juego Ahorcado (Assembler)',
        tecnologias: ['Assembly ARM', 'Linux', 'Git', 'GitHub'],
        descripcion: 'Juego del Ahorcado desarrollado en lenguaje ensamblador ARM, con interacción mediante consola. Implementa selección de palabras, validación de letras, control de intentos y detección de victorias y derrotas. Incluye un sistema de ranking de jugadores y una mecánica adicional de disparo mediante coordenadas, utilizando subrutinas y operaciones de bajo nivel.',
        imagenes: [
            { src: '/images/carruselProyectos/Ahorcado1.png', alt: 'Ahorcado Código' }
        ],

        enDesarrollo: false,
        demo: '',
        repositorio: 'https://github.com/MelinaBelenGomez/juegoAhorcado_Assembler'
    },
]

export default proyectos