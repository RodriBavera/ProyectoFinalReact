import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

const NavBar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <header className="navbar">
      <Link to="/" className="store-name">
        <h1>Tienda NeoTech Store</h1>
      </Link>
      <nav>
        <ul className="nav-links">
          <li>
            <NavLink to="/" className="home-link">Home</NavLink>
          </li>
          <li onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
            <span className="dropdown-toggle">Categorías</span>
            {dropdownOpen && (
              <ul className="dropdown-menu">
                <li>
                  <NavLink to="/categoria/audio-y-sonido">Audio y Sonido</NavLink>
                </li>
                <li>
                  <NavLink to="/categoria/accesorios-para-computadoras">Accesorios para Computadoras</NavLink>
                </li>
                <li>
                  <NavLink to="/categoria/monitores-y-perifericos">Monitores y Periféricos</NavLink>
                </li>
                <li>
                  <NavLink to="/categoria/muebles-y-ergonomia">Muebles y Ergonomía</NavLink>
                </li>
                <li>
                  <NavLink to="/categoria/otros">Otros</NavLink>
                </li>

              </ul>
            )}
          </li>

          <li>
            <NavLink to="/contacto" className="contact-link">Contacto</NavLink>
          </li>
        </ul>
      </nav>
      <CartWidget />
    </header>
  );
};

export default NavBar;