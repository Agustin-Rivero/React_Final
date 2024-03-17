import React, { useContext, useState } from 'react'
import { collection,addDoc,updateDoc,doc,getDoc } from 'firebase/firestore'
import { CartContext } from '../../context/CartContext'
import { db } from "../../firebase/config.js"; 

const Checkout = () => {

    const {cart,itemsCarrito,vaciarCarrito,totalCarrito} = useContext(CartContext)

    const [nombre,setNombre] = useState("")
    const [apellido,setApellido] = useState("")
    const [celular,setCelular] = useState("")
    const [email,setEmail] = useState("")
    const [error,setError] = useState("")
    const [ordenId,setOrdenId] = useState("")


    const Formulario = (event) =>{
    event.preventDefault ()
  if( !nombre || !apellido || !celular || !email){
    setError("Completar los campos vacios")
    return;
  }

const orden = {
  items : cart.map((producto) => ({
    id: producto.producto.id,
    nombre: producto.producto.nombre,
    cantidad: producto.cantidad

  })),
  total: totalCarrito(),
  fecha: new Date (),
  nombre,
  apellido,
  celular,
  email
}

Promise.all(
    orden.items.map(async(productoOrden) => {
      const productoRef = doc(db,"item", productoOrden.id)
      const productoDoc = await getDoc(productoRef)
      const stockActual = productoDoc.data().stock

      await updateDoc(productoRef, {
          stock: stockActual - productoOrden.cantidad
      })
    })
)
.then (() => {
  addDoc(collection(db,"ordenes"),orden)
  .then((docRef) => {
    setError("")
      setOrdenId(docRef.id)
      vaciarCarrito()
      .catch((error) =>{
        console.log(error)
        setError ("No se puede realizar la orden")
      })
  })
})


    }


  return (
<div>
    

    <h1>Completa el formulario para finalizar la compra</h1>

    <form onSubmit={Formulario}>

    {cart.map((producto) => (
        
        <div key={producto.producto.id}>

        <p>
            {""}
            {producto.producto.nombre} X {producto.cantidad}

        </p>
        <hr/>

        </div>

    ))}
      <div>
        <div>
          <label htmlFor="Nombre">Nombre</label>
          <input name='Nombre' type="text" onChange={(e)=> setNombre(e.target.value)}/>
        </div>
        <div>
          <label htmlFor="Apellido">Apellido</label>
          <input name='Apellido' type="text" onChange={(e)=> setApellido(e.target.value)}/>
        </div>
        <div>
          <label htmlFor="Celular">Celular</label>
          <input name='Celular' type="number" onChange={(e)=> setCelular(e.target.value)}/>
        </div>
        <div>
          <label htmlFor="Email">Email</label>
          <input name='Email' type="email" onChange={(e)=> setEmail(e.target.value)}/>
        </div>

        <button type='sumbit'>Completar compra</button>

        {error && <p>{error}</p>}

        {ordenId &&(
            <strong>
              gracias N: {ordenId}
            </strong>
        )}
      </div>

   </form>
    </div>
  )
}

export default Checkout