import { useState } from "react";
import './Carrusel.scss'

function Carrusel({ imagenes }) {
    const [indice, setIndice] = useState(0)

    function irASiguiente() {
        if (indice === imagenes.length - 1) {
            setIndice(0)
        }
        else { setIndice(indice + 1) }
    }

    function irAAnterior() {
        if (indice === 0) {
            setIndice(imagenes.length - 1)
        }
        else { setIndice(indice - 1) }
    }


    return (

        <div className="carrusel">
            <button onClick={irAAnterior}>←</button>
            <img src={imagenes[indice].src} alt={imagenes[indice].alt} />
            <button onClick={irASiguiente}>→</button>
        </div>
    )
}
export default Carrusel
