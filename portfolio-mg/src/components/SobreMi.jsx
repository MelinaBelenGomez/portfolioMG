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

                    </div>
                    <div className="divEducacion">
                        Mi Formación
                        <img className="imgEducacion" src="/images/aboutMeImg/eduPNG.png" alt="Logo Educación" />
                    </div>
                </div>

            </div>

        </section>


    )
}

export default SobreMi