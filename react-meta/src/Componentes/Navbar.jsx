import { Component } from 'react';
import '../App.css'


/* Componente de Tipo Clase */
class Navbar extends Component {
    render() {
        return(
            <nav className="navegacion">
                <ul>
                    <li>Home</li>
                    <li>Sucursales</li>
                    <li>Contacto</li>
                    <li>Productos</li>
                    <li>Nosotros</li>
                </ul>
            </nav>
        )
    }
}

export default Navbar;