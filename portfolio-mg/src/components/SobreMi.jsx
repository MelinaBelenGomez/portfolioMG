import './SobreMi.scss'

function SobreMi() {
    return (
        <section id="sobreMi" className="sobreMiBackground">

            <div className="containerSobreMi">

                <div className="containerAvatarYTxt">
                    <img className="indexHeaderAvatar" src="/images/melinaGomezLogo.png" alt="Ilustración de Melina Gomez"></img>
                    <p className="txtSobreMi">Soy desarrolladora web y construyo soluciones adaptables y funcionales con
                        código limpio.</p>
                </div>

                <div className="containerMiExperiencia">
                    <div className="divTrabajo">
                        <img className="imgTrabajo" src="/images/aboutMeImg/workPNG.png" alt="Logo Trabajo" />
                        <p className="txtWork">Desarrolladora de software con conocimientos en Java, desarrollo web, programación orientada a objetos y bases de datos. Cuento con más de seis años de experiencia profesional en IT, principalmente en análisis funcional, sistemas ERP, SQL, gestión de requerimientos y pruebas de software.</p>
                    </div>
                    <div className="divEducacion">
                        <img className="imgEducacion" src="/images/aboutMeImg/eduPNG.png" alt="Logo Educación" />
                        <p className="txtWork">Me recibí de Técnica Universitaria en Informática, graduada de la UNGS, donde aprendí a programar, diseñar bases de datos y desarrollar proyectos de software aplicando buenas prácticas de código limpio y metodologías ágiles, desde el análisis de requerimientos hasta su implementación. Complementé mi formación con un curso de desarrollo web y busco seguir ampliando mis conocimientos e incorporando nuevas tecnologías.</p>
                    </div>
                </div>

            </div>

        </section>


    )
}

export default SobreMi