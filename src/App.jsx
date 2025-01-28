import NavBar from "./componentes/NavBar/NavBar"
import TituloPrincipal from "./componentes/TituloPrincipal/TituloPrincipal"
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer"
import { BrowserRouter, Routes, Route } from "react-router-dom"


const App = () => {
  return (
    <div>


      <BrowserRouter>
        <NavBar />
        <TituloPrincipal texto="BIENVENIDOS A LA TIENDA" />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/categoria/:categoria" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>


    </div>

  )
}

export default App