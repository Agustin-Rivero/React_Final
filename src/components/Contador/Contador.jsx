import { useState } from "react"

const Contador =({initial,stock,onAdd}) => {

    const [contador,setContador] = useState (1);

    const sumar = () => {
        if(contador < stock){
         setContador(contador + 1)
         }
    }
    const restar = () => {
        if(contador > initial){
            setContador(contador - 1)
        }
    }
    const agregarCarrito = () => {
            onAdd(contador)
    }
    return (
        <div>

        <p>Productos agregados: {contador}</p>

        <button onClick = {restar}>-</button>

        <button onClick = {agregarCarrito} > Agregar al carrito</button>

        <button onClick = {sumar}>+</button>
    
        </div>
    )
}
 export default Contador;