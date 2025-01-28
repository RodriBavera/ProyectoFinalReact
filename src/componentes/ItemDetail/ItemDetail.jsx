import React from 'react'
import "./ItemDetail"
import { Link } from 'react-router-dom'
import "./ItemDetail.css"

const ItemDetail = ({ id, nombre, precio, img, descripcion }) => {
    return (
        <div className="item-detail-container">
            <h2>Detalles del producto</h2>
            <div className="item-detail-card">
                <img src={img} alt={nombre} />
                <h3>Nombre: {nombre}</h3>
                <h3>Precio: {precio}</h3>
                <p><strong>Descripción:</strong> {descripcion}</p>
                <Link to="/" className="btn">
                    Volver a la tienda
                </Link>


            </div>
        </div>
    )
}

export default ItemDetail