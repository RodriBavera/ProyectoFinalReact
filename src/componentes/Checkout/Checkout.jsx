import { useState, useEffect, useContext } from "react"
import { db } from "../../services/config"
import { CarritoContext } from "../../context/CarritoContext"
import { collection, addDoc, getDoc, updateDoc, doc } from "firebase/firestore"
import "./Checkout.css"

const ChekOut = () => {
  const { carrito, vaciarCarrito, total, cantidadTotal } = useContext(CarritoContext);

  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [emailConfirmacion, setEmailConformacion] = useState("");
  const [orderId, setOrderId] = useState("")
  const [error, setError] = useState("");


  const manejadorFormulario = (event) => {
    event.preventDefault();

    if (!nombre || !apellido || !telefono || !email || !emailConfirmacion) {
      setError("Por favor completa todos los campos");
      return;
    }

    if (email !== emailConfirmacion) {
      setError("Los emails no coinciden");
      return;
    }

    const orden = {
      items: carrito.map(producto => ({
        id: producto.item.id,
        nombre: producto.item.nombre,
        cantidad: producto.cantidad
      })),
      total: total,
      fecha: new Date(),
      nombre,
      apellido,
      telefono,
      email
    }

    Promise.all(
      orden.items.map(async (productoOrden) => {
        const productoRef = doc(db, "inventario", productoOrden.id);
        const productoDoc = await getDoc(productoRef);

        if (!productoDoc.exists()) {
          console.error(`El producto con ID ${productoOrden.id} no existe en la base de datos.`);
          return;
        }

        const stockActual = productoDoc.data().stock;
        if (stockActual < productoOrden.cantidad) {
          setError(`Stock insuficiente para ${productoOrden.nombre}`);
          return;
        }
        await updateDoc(productoRef, {
          stock: stockActual - productoOrden.cantidad
        })
      })
    )
      .then(() => {
        addDoc(collection(db, "ordenes"), orden)
          .then(docRef => {
            setOrderId(docRef.id);
            vaciarCarrito();
          })
          .catch(error => {
            console.log(error);
            setError("No se puede generar la orden");

          })
      })
      .catch(error => {
        console.log("No se puede actualizar el stock", error);
        setError("No se puede actualizar el stock");
      })
  }

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>
  
      <form onSubmit={manejadorFormulario}>
        <div className="product-list">
          {carrito.map(producto => (
            <div key={producto.item.id} className="product-item">
              <p>{producto.item.nombre} x {producto.cantidad}</p>
              <p>Precio: ${producto.item.precio}</p>
            </div>
          ))}
        </div>
  
        <div className="form-group">
          <label>Nombre:</label>
          <input type="text" onChange={(e) => setNombre(e.target.value)} />
        </div>
  
        <div className="form-group">
          <label>Apellido:</label>
          <input type="text" onChange={(e) => setApellido(e.target.value)} />
        </div>
  
        <div className="form-group">
          <label>Teléfono:</label>
          <input type="text" onChange={(e) => setTelefono(e.target.value)} />
        </div>
  
        <div className="form-group">
          <label>Email:</label>
          <input type="email" onChange={(e) => setEmail(e.target.value)} />
        </div>
  
        <div className="form-group">
          <label>Confirmar Email:</label>
          <input type="email" onChange={(e) => setEmailConformacion(e.target.value)} />
        </div>
  
        {error && <p className="error-message">{error}</p>}
  
        <button type="submit">Finalizar orden</button>
  
        {orderId && (
          <p className="order-message">
            ¡Gracias por tu compra! Tu número de orden es: <strong>{orderId}</strong>
          </p>
        )}
      </form>
    </div>
  );
  
}

export default ChekOut