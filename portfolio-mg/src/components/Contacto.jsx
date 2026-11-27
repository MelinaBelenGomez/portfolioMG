import "./Contacto.scss";
import { useState } from 'react'
import { Mail } from 'lucide-react'

function Contacto() {
    const [copiado, setCopiado] = useState(false)
    const [enviado, setEnviado] = useState(false)
    const [error, setError] = useState(false)

    function copiarMail() {
        navigator.clipboard.writeText('melinabelengomez@gmail.com')
        setCopiado(true)
        setTimeout(() => setCopiado(false), 2000)
    }
async function enviarMail(e) {
    e.preventDefault()
    const formulario = e.target

    try {
        const respuesta = await fetch('https://formspree.io/f/xkjreygy', {
            method: 'POST',
            body: new FormData(formulario),
            headers: { Accept: 'application/json' }
        })

        if (respuesta.ok) {
            formulario.reset()
            setEnviado(true)
            setTimeout(() => setEnviado(false), 3000)
        } else {
            setError(true)
            setTimeout(() => setError(false), 3000)
        }
    } catch {
        setError(true)
        setTimeout(() => setError(false), 3000)
    }
}

    return (
        <section id="contacto" className="containerContacto">

            <h2 className="txtContacto">¿Nos ponemos en contacto?</h2>
            <h3 className="txtLogoMail">Hacé click en el logo bajo este texto para copiar mi email</h3>
            <button className="social-logo btnMail" onClick={copiarMail} aria-label="Copiar mail">
                <Mail size={20} />
            </button>

            {copiado && <span className="mailCopiado">¡Mail copiado!</span>}


            <h3 className="txtForm">¡O podrías utilizar el formulario completando los datos y yo me pondré en contacto! </h3>
            <form className="contact-form" onSubmit={enviarMail}>
                <label htmlFor="nombre">Nombre</label>
                <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    placeholder="Tu nombre"
                    required
                />

                <label htmlFor="email">Correo electrónico</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Tu correo electrónico"
                    required
                />

                <label htmlFor="mensaje">Mensaje</label>
                <textarea
                    id="mensaje"
                    name="mensaje"
                    placeholder="Escribí tu mensaje..."
                    rows={5}
                    required
                />

                <button type="submit">Enviar</button>
                {enviado && <span className="mailCopiado">¡Mail enviado!</span>}
                {error && <span className="mailCopiado mailError">No se pudo enviar el mensaje. Por favor, intentá de nuevo o copiá mi mail.</span>}

            </form>

        </section>

    );


}
export default Contacto