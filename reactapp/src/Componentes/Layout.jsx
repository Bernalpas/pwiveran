import { NavLink, Outlet } from "react-router-dom";



const Layout = () => {
    return(
        <nav>
            <NavLink to='/'> Home </NavLink>
            <NavLink to='/productos'> Productos </NavLink>
            <NavLink to='/formulario'> Formulario </NavLink>
            <Outlet />
        </nav>
    )
}

export default Layout;