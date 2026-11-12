function Header() {
    return (
        <header className="indexHeader">
            <div class="headerTop">
                <div class="headerTitulos">
                    <h1 class="indexHeaderH1">Melina Gomez</h1>
                    <p class="indexHeaderSubtitulo">Desarrolladora Web</p>
                </div>

                <nav class="linksInicio">
                    <ul>
                        <li><a class="linksInicioStyle" href="#inicio">Inicio</a></li>
                        <li><a class="linksInicioStyle" href="#sobre-mi">Sobre mí</a></li>
                        <li><a class="linksInicioStyle" href="#proyectos">Proyectos</a></li>
                        <li><a class="linksInicioStyle" href="#contacto">Contacto</a></li>
                    </ul>
                </nav>
            </div>

        </header>
    )
}

export default Header