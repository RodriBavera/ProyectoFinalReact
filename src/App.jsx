import NavBar from "./componentes/NavBar/NavBar"
import Home from "./componentes/Home/Home"
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { CarritoProvider } from "./context/CarritoContext"
import Cart from "./componentes/Cart/Cart"
import Checkout from "./componentes/Checkout/Checkout"
import Contacto from "./componentes/Contacto/Contacto"
import Shop from "./componentes/Shop/Shop"
import Footer from "./componentes/Footer/Footer"
import "./App.css" // Asegúrate de crear este archivo con los estilos del artifact anterior

const App = () => {
  return (
    <BrowserRouter>
      <CarritoProvider>
        <div className="app-container">
          <NavBar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/tienda" element={<Shop />} />
              <Route path="/productos" element={<ItemListContainer />} />
              <Route path="/categoria/:categoria" element={<ItemListContainer />} />
              <Route path="/contacto" element={<Contacto />} />
              <Route path="/item/:idItem" element={<ItemDetailContainer />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </CarritoProvider>
    </BrowserRouter>
  )
}

export default App;