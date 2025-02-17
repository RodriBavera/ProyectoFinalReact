import React from 'react'
import { Link } from 'react-router-dom'
import "./Item.css"

const Item = ({img, id, nombre, stock, precio}) => {
  return (
    <div className='cardPruducto'>
        <img src={img} alt={nombre} />
        <h3>Nombre: {nombre}</h3>
        <p>Precio: ${Number(precio)}</p>
        <p>Stock: {stock}</p>
        <p>ID: {id}</p>
        <Link className='btn' to={`/item/${id}`}> Ver detalles </Link>
        
    </div>
  )
}

export default Item