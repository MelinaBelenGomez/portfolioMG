import Carrusel from './Carrusel'
import './TarjetaProyecto.scss'
import { ScreenShare, CodeXml } from 'lucide-react'

function TarjetaProyecto({ titulo, tecnologias, descripcion, imagenes, enDesarrollo, demo, repositorio }) {
    return (
        <article className="contenedorProyecto">
            <div className="imagenProyecto">
                <Carrusel imagenes={imagenes} />
                {enDesarrollo && <span className="etiquetaDesarrollo">En desarrollo</span>}
            </div>

            <div className="contenidoProyecto">
                <h3>{titulo}</h3>


                <ul className="tecnologias">
                    {tecnologias.map((tec) => (
                        <li key={tec}>{tec}</li>
                    ))}

                </ul>

                <p>{descripcion}</p>
                <div className="linksProyecto">
                    {demo && <a href={demo} target="_blank" aria-label="Ver demo">
                        <ScreenShare size={20} />
                    </a>}
                    {repositorio && <a href={repositorio} target="_blank" aria-label="Ver Código">
                        <CodeXml size={20}/>
                        </a>}
                </div>
            </div>
        </article>
    )
}


export default TarjetaProyecto
