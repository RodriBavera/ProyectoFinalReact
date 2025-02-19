import { useState, createContext } from "react";

export const CarritoContext = createContext({
    carrito: [],
    total: 0,
    cantidadTotal: 0
})

export const CarritoProvider = ({ children }) => {
    const [carrito, setCarrito] = useState([]);
    const [total, setTotal] = useState(0);
    const [cantidadTotal, setCantidadTotal] = useState(0);

    console.log(carrito);
    console.log("Cantidad Items:", cantidadTotal);
    console.log("Precio total de la compra", total);

    const agregarAlCarrito = (item, cantidad) => {
        const productoExistente = carrito.find(prod => prod.item.id === item.id);

        if (!productoExistente) {
            setCarrito(prev => [...prev, { item, cantidad }]);
            setCantidadTotal(prev => prev + cantidad);
            setTotal(prev => prev + (item.precio * cantidad));
        } else {
            const carritoActualizado = carrito.map(prod => {
                if (prod.item.id === item.id) {
                    return { ...prod, cantidad: prod.cantidad + cantidad }
                } else {
                    return prod;
                }
            })
            setCarrito(carritoActualizado);
            setCantidadTotal(prev => prev + cantidad);
            setTotal(prev => prev + (item.precio * cantidad));
        }

    }

    const eliminarProducto = (id) => {
        const productoEliminado = carrito.find(prod => prod.item.id === id);

        if (!productoEliminado) return;

        if (productoEliminado.cantidad > 1) {

            const carritoActualizado = carrito.map(prod =>
                prod.item.id === id ? { ...prod, cantidad: prod.cantidad - 1 } : prod
            );
            setCarrito(carritoActualizado);
        } else {

            const carritoActualizado = carrito.filter(prod => prod.item.id !== id);
            setCarrito(carritoActualizado);
        }

        setCantidadTotal(prev => Math.max(0, prev - 1));
        setTotal(prev => Math.max(0, prev - productoEliminado.item.precio));
    };


    const vaciarCarrito = () => {
        setCarrito([]);
        setTotal(0);
        setCantidadTotal(0);

    }

    return (
        <CarritoContext.Provider value={{ carrito, total, cantidadTotal, agregarAlCarrito, eliminarProducto, vaciarCarrito }}>
            {children}
        </CarritoContext.Provider>
    )


}