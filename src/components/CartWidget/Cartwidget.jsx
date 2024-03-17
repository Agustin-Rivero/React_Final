import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import "./Cartwidget.css"
import { Link } from 'react-router-dom';

const Cartwidget = () => {
    const { itemsCarrito } = useContext(CartContext);
    if (itemsCarrito() === 0) {return null;}
    return (
    <div>
      <Link to="/cart">
        <img className='logo' src='/Changuito.png' alt='Carrito' />
      </Link>
      <p>Productos en el carrito: {itemsCarrito()}</p>
    </div>
    );
};
export default Cartwidget;