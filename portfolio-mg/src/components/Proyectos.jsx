import './Proyectos.scss'
import Carrusel from './Carrusel'

function Proyectos() {

    const imagenesFrozen = [
        { src: '/images/carruselProyectos/inicioFrz.png', alt: 'Pantalla de inicio de Frozen' },
        { src: '/images/carruselProyectos/inicioFrz.png', alt: 'Pantalla de inicio de Frozen' },
    ]


    return (

        <section id="proyectos">

            <div className="contenedorGrandeProyectos">
                <h2>Mis proyectos</h2>
                <article className="contenedorProyecto">
<Carrusel imagenes={imagenesFrozen} />
                    <h3>Frozen</h3>
                    <p>React.js, JavaScript, HTML5, CSS3, Java, Spring Boot, Python, Supabase </p>
                    <p>FROZEN es una aplicación web desarrollada para gestionar y optimizar los procesos de producción de una PyME de frutas y hortalizas. Permite administrar materias primas, planificar órdenes de producción, realizar el seguimiento de sus etapas y consultar indicadores para facilitar la toma de decisiones.</p>
                </article>


            </div>


        </section>
    )
}

export default Proyectos