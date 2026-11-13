function Header() {
    return (
        <header className="indexHeader">
            <div className="headerTop">
                <div className="headerTitulos">
                    <h1 className="indexHeaderH1">Melina Gomez</h1>
                    <p className="indexHeaderSubtitulo">Desarrolladora Web</p>
                </div>

                <nav className="linksInicio">
                    <ul>
                        <li><a className="linksInicioStyle" href="#inicio">Inicio</a></li>
                        <li><a className="linksInicioStyle" href="#sobre-mi">Sobre mí</a></li>
                        <li><a className="linksInicioStyle" href="#proyectos">Proyectos</a></li>
                        <li><a className="linksInicioStyle" href="#contacto">Contacto</a></li>
                    </ul>
                </nav>
            </div>

        </header>
    )
}

export default Header