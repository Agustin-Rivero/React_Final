import { createContext,useState} from "react";

export const CartContext = createContext()

const CartProvider = ({children}) => {
    const [cart,setCart] = useState([])

    const agregarCarrito = (producto, cantidad) =>
    {
    const productoEnCarrito = cart.find(item => item.producto.id === producto.id);
        if (!productoEnCarrito) {
        setCart([...cart,{ producto, cantidad }])}
            else {
            const nuevoCarrito = cart.map(item => {
            if (item.producto.id === producto.id) {
            return {...item, cantidad: item.cantidad + cantidad };
            }
            return item})
            setCart(nuevoCarrito)
        }
    }
    const vaciarCarrito = () =>  {
        setCart([]) 
    }
    const eliminarItem = (productoId) => {
        const newCart = cart.filter(item => item.producto.id !== productoId)
        setCart(newCart)
    }
    const itemsCarrito = () =>{
        const cantidadTotal = cart.reduce((total,item)=> total+item.cantidad,0)
        return cantidadTotal
    }
    const totalCarrito = () => {
        const totalPrecio = cart.reduce((total,item) => total + (item.producto.precio* item.cantidad),0)
        return totalPrecio
    }

    return (
        <CartContext.Provider value={{
            cart,
            itemsCarrito,
            eliminarItem,
            vaciarCarrito,
            agregarCarrito,
            totalCarrito
            }}>

            {children}
        </CartContext.Provider>
    )
}
export default CartProvider