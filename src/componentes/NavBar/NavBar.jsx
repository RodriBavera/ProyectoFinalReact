import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";
import { Link, NavLink } from "react-router-dom";



const NavBar = () => {
  return (
    <header>
        <Link to="/">
        <h1>Tienda NeoTech Store</h1>
        </Link>
        <nav>
  <ul>
    <li>
      <NavLink to="/categoria/audio-y-sonido">Audio y Sonido</NavLink>
    </li>
    <li>
      <NavLink to="/categoria/accesorios-para-computadoras">Accesorios para Computadoras</NavLink>
    </li>
    <li>
      <NavLink to="/categoria/monitores-y-perifericos">Monitores y Perifericos</NavLink>
    </li>
    <li>
      <NavLink to="/categoria/muebles-y-ergonomia">Muebles y Ergonomia</NavLink>
    </li>
    <li>
      <NavLink to="/categoria/otros">Otros</NavLink>
    </li>
  </ul>
</nav>

        <CartWidget/>
    </header>
  )
}

export default NavBar