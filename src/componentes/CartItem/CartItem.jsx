import { CarritoContext } from "../../context/CarritoContext"
import { useContext } from "react"

const CartItem = ({item, cantidad}) => {
    const { eliminarProducto} = useContext(CarritoContext);
  return (
    <div>
        <h3>{item.nombre}</h3>
        <p>Cantidad: {cantidad}</p>
        <p>Precio: {item.precio}</p>
        <button onClick={() => {eliminarProducto(item.id)}}> Eliminar producto</button>
    </div>
  )
}

export default CartItem