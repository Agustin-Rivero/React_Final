import React from 'react';

const CartItem = ({item, eliminarItem}) => {
    const { producto } = item;
    return (
    <div>
            <h3>{producto.nombre}</h3>
            <img src={producto.img} alt={producto.nombre} />
            <p>Cantidad: {item.cantidad}</p>
            <p>Valor: ${producto.precio * item.cantidad}</p>
            <button onClick={()=>eliminarItem(producto.id)}>Eliminar Producto</button>
    </div>
    );
};
export default CartItem;