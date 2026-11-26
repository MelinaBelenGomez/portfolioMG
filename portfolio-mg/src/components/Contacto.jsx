import "./Contacto.scss";

function Contacto() {

    return (
        <form className="contact-form">
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
        </form>
    );


}
export default Contacto