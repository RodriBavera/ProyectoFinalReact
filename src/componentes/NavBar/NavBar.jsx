import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";
import { Link, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import logo from "../../assets/iconNeoTech.jpg";
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [dropdownTimer, setDropdownTimer] = useState(null);

  
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth > 768) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      if (dropdownTimer) clearTimeout(dropdownTimer);
    };
  }, [dropdownTimer]);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
    setDropdownOpen(false);
  };

  const handleMouseEnter = () => {
    if (windowWidth > 768) {
      clearTimeout(dropdownTimer);
      setDropdownOpen(true);
    }
  };

  const handleMouseLeave = () => {
    if (windowWidth > 768) {
      const timer = setTimeout(() => {
        setDropdownOpen(false);
      }, 300); // 300ms de retraso
      setDropdownTimer(timer);
    }
  };

  return (
    <header className="navbar">
      <div className="logo-container">
        <img src={logo} alt="NeoTech Store Logo" className="logo" />
        <Link to="/" className="store-name">
          <h1>NeoTech Store</h1>
        </Link>
      </div>
      
      <div className="navbar-right">
        <button className="menu-toggle" onClick={toggleMenu} aria-label="Menú">
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
        
        <nav className={`nav-container ${menuOpen ? "active" : ""}`}>
          <ul className="nav-links">
            <li>
              <NavLink to="/" className="home-link" onClick={closeMenu}>Home</NavLink>
            </li>
            <li>
              <NavLink to="/tienda" className="shop-link" onClick={closeMenu}>Tienda</NavLink>
            </li>
            <li 
              className="dropdown-container"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <span 
                className="dropdown-toggle" 
                onClick={() => windowWidth <= 768 ? toggleDropdown() : null}
              >
                Categorías
              </span>
              {dropdownOpen && (
                <ul className="dropdown-menu">
                  <li>
                    <NavLink to="/categoria/audio-y-sonido" onClick={closeMenu}>Audio y Sonido</NavLink>
                  </li>
                  <li>
                    <NavLink to="/categoria/accesorios-para-computadoras" onClick={closeMenu}>Accesorios para Computadoras</NavLink>
                  </li>
                  <li>
                    <NavLink to="/categoria/monitores-y-perifericos" onClick={closeMenu}>Monitores y Periféricos</NavLink>
                  </li>
                  <li>
                    <NavLink to="/categoria/muebles-y-ergonomia" onClick={closeMenu}>Muebles y Ergonomía</NavLink>
                  </li>
                  <li>
                    <NavLink to="/categoria/otros" onClick={closeMenu}>Otros</NavLink>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <NavLink to="/contacto" className="contact-link" onClick={closeMenu}>Contacto</NavLink>
            </li>
          </ul>
        </nav>
        
        <CartWidget />
      </div>
    </header>
  );
};

export default NavBar;