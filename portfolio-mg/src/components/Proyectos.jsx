import './Proyectos.scss'
import TarjetaProyecto from './TarjetaProyecto'
import proyectos from '../data/proyectos'

function Proyectos() {


    return (

        <section id="proyectos">
            <h2>Mis proyectos</h2>
            <p> A continuación presento proyectos desarrollados con diferentes tecnologías, aplicando conocimientos de programación, diseño y resolución de problemas.</p>

            <div className="contenedorGrandeProyectos">
                {proyectos.map((proyecto) => (
                    <TarjetaProyecto
                        key={proyecto.id}
                        titulo={proyecto.titulo}
                        tecnologias={proyecto.tecnologias}
                        descripcion={proyecto.descripcion}
                        imagenes={proyecto.imagenes}
                        enDesarrollo={proyecto.enDesarrollo}
                        demo={proyecto.demo}
                        repositorio={proyecto.repositorio}
                    />
                ))}



            </div>


        </section>
    )
}

export default Proyectos