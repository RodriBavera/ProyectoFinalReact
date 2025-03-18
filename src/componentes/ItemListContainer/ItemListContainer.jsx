import "./ItemListContainer.css";
import { useState, useEffect } from "react";
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
    <div className="container">
      <div className="title-section">
        <h2>{categoria ? `${categoria}` : 'Todos nuestros Productos'}</h2>
      </div>
      
      <div className="productos-container">
        <ItemList productos={productos} />
      </div>
    </div>
  );
};

export default ItemListContainer;