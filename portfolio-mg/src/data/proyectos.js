const proyectos = [
    {
        id: 'frozen',
        titulo: 'Frozen',
        tecnologias:['React.js', 'JavaScript', 'HTML5', 'CSS3', 'Java', 'Spring Boot', 'Python', 'Supabase'],
        descripcion: 'FROZEN es una aplicación web desarrollada para gestionar y optimizar los procesos de producción de una PyME de frutas y hortalizas. Permite administrar materias primas, planificar órdenes de producción, realizar el seguimiento de sus etapas y consultar indicadores para facilitar la toma de decisiones.',
        imagenes: [
            { src: '/images/carruselProyectos/inicioFrz.png', alt: 'Pantalla de inicio de Frozen' },
            { src: '/images/carruselProyectos/pantallaPrincipalFrz.png', alt: 'Pantalla Principal Frozen' },
            { src: '/images/carruselProyectos/1frz.png', alt: 'Pantalla  Frozen' },
            { src: '/images/carruselProyectos/stockFrz.png', alt: 'Stock Frozen' }
        ],

        enDesarrollo: false,
        demo:'https://tplabo.vercel.app/',
        repositorio:'https://github.com/MelinaBelenGomez/TPFinal_ProyectoProfesional',
    },

        {
        id: 'amazing',
        titulo: 'Backend Amazing',
        tecnologias:['Java', 'POO', 'GIT', 'Lógica de Negocio'],
        descripcion: 'Simulador de gestión de envíos desarrollado en Java, aplicando los cuatro pilares de la Programación Orientada a Objetos (POO). El sistema representa las operaciones de una empresa logística mediante clases, objetos y relaciones entre entidades, implementando lógica de negocio, herencia, polimorfismo y reutilización de código.',
        imagenes: [
            { src: '/images/carruselProyectos/amazingIMG.png', alt: 'Amazing solo código' }
        ],

        enDesarrollo: false,
        demo:'',
        repositorio:'https://github.com/MelinaBelenGomez/SimulacionEmpresaEnvios_Amazing_JAVA',
    },
]

export default proyectos