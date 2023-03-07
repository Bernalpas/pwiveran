import '../footer.css'


/* Componente de tipo Función */
function Footer() {
    return(
        <footer>
            <address className="footer">
                <p>
                    Contactos al mail <a href="mailto:pepe@gmail.com">pepe@gmail.com</a> 
                </p>
                <p>
                    Teléfono: <a href="tel:123456789">123456789</a>
                </p>
                <p>
                    Creado por ®UTN-2023
                </p>
            </address>
        </footer>
    )
}

export default Footer;
