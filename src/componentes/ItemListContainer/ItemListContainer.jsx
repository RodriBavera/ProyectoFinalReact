import "./ItemListContainer.css";
import { useState, useEffect } from "react";
//import { getProductos, getProductoPorCategoria } from "../../asyncmock";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, where, query } from "firebase/firestore";
import { db } from "../../services/config";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const { categoria } = useParams();
  

  useEffect(() => {
    console.log("Categoría seleccionada:", categoria);
    const obtenerProductos = async () => {
      try {
        const productosRef = collection(db, "inventario");
        const q = categoria 
          ? query(productosRef, where("categoria", "==", categoria)) 
          : productosRef;
          
        const querySnapshot = await getDocs(q);
        
        const nuevosProductos = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
  
        setProductos(nuevosProductos);
      } catch (error) {
        console.log("Error obteniendo productos:", error);
      }
    };
  
    obtenerProductos();
  }, [categoria]);
  

  return (
    <div>
      <h2>Mis Productos</h2>
      <ItemList productos={productos} />
    </div>
  );
};


export default ItemListContainer;
