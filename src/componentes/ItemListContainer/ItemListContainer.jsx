import "./ItemListContainer.css";
import { useState, useEffect } from "react";
import { getProductos, getProductoPorCategoria } from "../../asyncmock";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const { categoria } = useParams();

  
  const categoriaMap = {
    "audio-y-sonido": "Audio y Sonido",
    "accesorios-para-computadoras": "Accesorios para computadoras",
    "monitores-y-perifericos": "Monitores y perifericos",
    "muebles-y-ergonomia": "Muebles y Ergonomicos",
    "otros": "Otros",
  };

  useEffect(() => {
    const categoriaNormalizada = categoriaMap[categoria]; 
    const funcionProductos = categoriaNormalizada
      ? getProductoPorCategoria
      : getProductos;

    funcionProductos(categoriaNormalizada) 
      .then((respuesta) => setProductos(respuesta))
      .catch((error) =>
        console.error("Error al obtener los productos:", error)
      );
  }, [categoria]);

  return (
    <div>
      <h2>Mis Productos</h2>
      <ItemList productos={productos} />
    </div>
  );
};


export default ItemListContainer;
