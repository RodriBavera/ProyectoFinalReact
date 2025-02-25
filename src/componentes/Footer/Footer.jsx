import "./Footer.css";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp, FaArrowUp } from "react-icons/fa";
import { useState, useEffect } from "react";

const Footer = () => {
    const [showScrollTop, setShowScrollTop] = useState(false);


    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setShowScrollTop(true);
            } else {
                setShowScrollTop(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <footer className="footer">
            <div className="footer-container">

                <div className="footer-logo">
                    <img src="/src/assets/iconNeoTech.jpg" alt="NeoTech Logo" />
                    <p>Tu tienda de tecnología con los mejores productos del mercado.</p>
                </div>


                <div className="footer-links">
                    <h3>Enlaces</h3>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/tienda">Tienda</Link></li>
                        <li><Link to="/contacto">Contacto</Link></li>
                    </ul>
                </div>

                <div className="footer-contact">
                    <h3>Contacto</h3>
                    <p>📍 Dirección: Av. Tecnología 123, Ciudad</p>
                    <p>📞 Teléfono: +54 9 123 456 789</p>
                    <p>📧 Email: contacto@neotech.com</p>
                </div>

                <div className="footer-social">
                    <h3>Síguenos</h3>
                    <div className="social-icons">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebook /></a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><FaTwitter /></a>
                        <a href="https://wa.me/549123456789" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><FaWhatsapp /></a>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p>© {new Date().getFullYear()} NeoTech Store. Todos los derechos reservados.</p>
            </div>

            {showScrollTop && (
                <button
                    className="scroll-to-top"
                    onClick={scrollToTop}
                    aria-label="Volver arriba"
                >
                    <FaArrowUp />
                </button>
            )}
        </footer>
    );
};

export default Footer;