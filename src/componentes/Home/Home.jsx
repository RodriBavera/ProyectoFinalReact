import { Link } from "react-router-dom";
import "./Home.css";
import logo from "../../assets/logo-neotech.jpg";

const Home = () => {
  return (
    <div className="home-container">
      <div className="background-overlay"></div>
      
      <section className="hero-section">
        <div className="hero-content">
          <img src={logo} alt="NeoTech Store" className="logo-home" />
          
          <div className="hero-text">
            <h1>Tecnología del futuro, hoy</h1>
            <p className="main-slogan">Tu destino definitivo para la mejor tecnología</p>
            
            <div className="features">
              <div className="feature">
                <span className="feature-icon">⚡</span>
                <p>Productos innovadores</p>
              </div>
              <div className="feature">
                <span className="feature-icon">🔒</span>
                <p>Garantía de calidad</p>
              </div>
              <div className="feature">
                <span className="feature-icon">🚚</span>
                <p>Envío rápido</p>
              </div>
            </div>
            
            <p className="sub-slogan">Descubre productos de alta calidad para transformar tu experiencia digital</p>
            
            <Link to="/productos" className="btn-shop">
              Explorar Tienda
              <span className="btn-arrow">→</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;