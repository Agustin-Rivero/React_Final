import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import CartItem from '../CartItem/CartItem'
import Checkout from '../Checkout/Checkout'

const Cart = () => {
  const {cart,vaciarCarrito,eliminarItem,totalCarrito} = useContext(CartContext)
  return (
    <div>
      {cart.length === 0 ? (
      <>
      <h1>Carrito vacio, Elegí tu producto ideal</h1>
      <Link to={"/"}>IR A LA TIENDA</Link>
      </>)
      :
      (<>
      <h1>Productos en el carrito</h1>  
      {cart.map((item) => (
        <CartItem key={item.producto.id} item={item} eliminarItem ={eliminarItem} />
      ))} 
     <p>Total: ${totalCarrito()}</p> 
      <button onClick={vaciarCarrito}>Vaciar carrito</button>


        <Link to={"/checkout"}>completar compra</Link>

      <p>¿Olvidaste agregar algo a tu carrito?</p>
      <Link to={"/"}>IR A LA TIENDA</Link>
    </>)
    }
    </div>
  )
}
export default Cart