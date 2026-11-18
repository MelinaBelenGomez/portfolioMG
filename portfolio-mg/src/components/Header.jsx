function Header({ cambiarSeccion }) {
    return (
        <header className="indexHeader">
            <div className="headerTop">
                <div className="headerTitulos">
                    <h1 className="indexHeaderH1">Melina Gomez</h1>
                    <p className="indexHeaderSubtitulo">Desarrolladora Web</p>
                </div>

                <nav className="linksInicio">
                    <ul>
                        <li><a className="linksInicioStyle" href="#sobreMi" onClick={() => cambiarSeccion('sobreMi')}>Sobre Mí</a></li>
                        <li><a className="linksInicioStyle" href="#proyectos" onClick={() => cambiarSeccion('proyectos')}>Proyectos</a></li>
                        <li><a className="linksInicioStyle" href="#contacto" onClick={() => cambiarSeccion('contacto')}>Contacto</a></li>
                    </ul>
                </nav>
            </div>

        </header>
    )
}

export default Header