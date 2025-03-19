import React from 'react'
import "./ItemDetail"
import { Link } from 'react-router-dom'
import "./ItemDetail.css"
import ItemCount from '../ItemCount/ItemCount'
import { useState } from 'react'
import { CarritoContext } from '../../context/CarritoContext'
import { useContext } from 'react'

const ItemDetail = ({ id, nombre, precio, img, descripcion, stock }) => {
    const [agregarCantida, setAgregarCantidad] = useState(0);

    const { agregarAlCarrito } = useContext(CarritoContext);


    const manejadorCantidad = (cantidad) => {
        setAgregarCantidad(cantidad);

        const item = { id, nombre, precio: Number(precio) };
        agregarAlCarrito(item, cantidad);
    }

    return (
        <div className="detail-page-container">
            <h2 className='detalleProducto'>Detalles del producto</h2>
            <div className="item-detail-container">
                <div className="item-detail-card">
                    <img src={img} alt={nombre} />
                    <h3>Nombre: {nombre}</h3>
                    <h3>Precio: {precio}</h3>
                    <p><strong>Descripción:</strong> {descripcion}</p>
                    {
                        agregarCantida > 0 ? (<Link to="/cart" className='btn-terminar'> Terminar Compra</Link>) : (<ItemCount inicial={1} stock={stock} funcionAgregar={manejadorCantidad} />)
                    }
                    <Link to="/" className="btn">
                        Volver a la tienda
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail