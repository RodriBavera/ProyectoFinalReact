import NavBar from "./componentes/NavBar/NavBar"
import TituloPrincipal from "./componentes/TituloPrincipal/TituloPrincipal"
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { CarritoProvider } from "./context/CarritoContext"
import Cart from "./componentes/Cart/Cart"
import Checkout from "./componentes/Checkout/Checkout"


const App = () => {
  return (
    <div>


      <BrowserRouter>
        <CarritoProvider>
          <NavBar />
          <TituloPrincipal texto="BIENVENIDOS A LA TIENDA" />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/categoria/:categoria" element={<ItemListContainer />} />
            <Route path="/item/:idItem" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/checkout" element={<Checkout/>}/>  
          </Routes>
        </CarritoProvider>
      </BrowserRouter>


    </div>

  )
}

export default App