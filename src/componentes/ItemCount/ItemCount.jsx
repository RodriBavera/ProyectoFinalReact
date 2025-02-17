import { useState } from "react"
import "./ItemCount.css"

const ItemCount = ({inicial, stock, funcionAgregar}) => {
    const [contador, setContador] = useState(inicial);

    const sumarContador = () => {
        if (contador < stock) {
            setContador(contador + 1);
        }
    }
     const restarContador = () => {
        if(contador> inicial){
            setContador(contador - 1);
        }
     }

  return (
    <div className="item-count-container">
        <button onClick={ restarContador} className="btn-count"> - </button>
        <p className="contador"> {contador }</p>
        <button onClick={ sumarContador} className="btn-count"> + </button>

        <button className="btn-agregar" onClick={() => funcionAgregar(contador)}> Agregar al carrito</button>

    </div>
  )
}

export default ItemCount