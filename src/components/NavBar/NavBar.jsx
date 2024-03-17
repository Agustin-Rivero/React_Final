import "./NavBar.css"
import { Link ,NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <>
    <div>
        <h1>E-Commerce "Without name"</h1>
        <ul className="NavBar">
            <li className="boton">
            <NavLink to={'/'}>Inicio</NavLink>
            </li>
            <li className="boton">
            <NavLink to={'/'} >Productos</NavLink>
            </li>
            <li className="boton">
            <NavLink to={'/cart'}>Carrito</NavLink>
            </li>
            <li className="boton">
            <NavLink to={'/'}>Nosotros</NavLink>
            </li>
            <li className="boton">
            <Link to={'/'}>Contacto</Link>
            </li>
        </ul>
    </div>   
        </>
    )
}
export default NavBar;
