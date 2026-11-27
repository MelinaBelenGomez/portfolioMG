import './SobreMi.scss'

function SobreMi({ cambiarSeccion }) {
    return (
        <section id="sobreMi" className="sobreMiBackground">

            <div className="containerSobreMi">

                <div className="containerAvatarYTxt">
                    <img className="indexHeaderAvatar" src="/images/melinaGomezLogo.png" alt="Ilustración de Melina Gomez"></img>
                    <p className="txtSobreMi">Soy desarrolladora web y construyo soluciones adaptables y funcionales con
                        código limpio.</p>


                    <div className='botonesDiv'>
                        <a href="https://www.linkedin.com/in/melina-b-gomez/" target='_blank' rel="noopener noreferrer"
                            className="social-logo" aria-label="LinkedIn"><svg viewBox="0 0 24 24" fill="currentColor">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z" />
                            </svg></a>

                        <a
                            href="https://github.com/MelinaBelenGomez"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-logo"
                            aria-label="GitHub"
                        >
                            <svg viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3
    3.44 9.8 8.21 11.39.6.11.82-.26.82-.58
    0-.29-.01-1.04-.02-2.04-3.34.72-4.04-1.61
    -4.04-1.61-.55-1.39-1.33-1.76-1.33-1.76
    -1.09-.74.08-.73.08-.73 1.2.08 1.84 1.23
    1.84 1.23 1.07 1.83 2.81 1.3 3.49.99.11
    -.78.42-1.3.76-1.6-2.67-.3-5.47-1.33
    -5.47-5.93 0-1.31.47-2.38 1.24-3.22
    -.12-.3-.54-1.52.12-3.17 0 0 1.01-.32
    3.3 1.23a11.5 11.5 0 016 0c2.29-1.55
    3.3-1.23 3.3-1.23.66 1.65.24 2.87.12
    3.17.77.84 1.24 1.91 1.24 3.22 0 4.61
    -2.81 5.62-5.49 5.92.43.37.82 1.1.82
    2.22 0 1.6-.01 2.89-.01 3.28 0 .32.22
    .69.83.57C20.57 21.8 24 17.3 24 12
    24 5.37 18.63 0 12 0z" />
                            </svg>
                        </a>

                        <a className="descargarCvBtn" href="/cv/CV - Gomez Melina_.pdf" download="CV-Melina-Gomez.pdf">Descargar CV </a>

                    </div>
                    <a className="descargarCvBtn btnContacto" href="#contacto" onClick={() => cambiarSeccion('contacto')}>Contactame!</a>
                    
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