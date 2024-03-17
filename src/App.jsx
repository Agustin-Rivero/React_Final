import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.jsx'
import Cartwidget from './components/CartWidget/Cartwidget' 
import Error from './components/Error/Error'
import { BrowserRouter,Routes,Route} from 'react-router-dom'; 
import CartProvider from './context/CartContext.jsx'
import Cart from './components/Cart.jsx/Cart.jsx'
import Checkout from './components/Checkout/Checkout.jsx'
// import { getFirestore,doc,getDoc } from 'firebase/firestore'
// import { getFirestore,collection,getDocs } from 'firebase/firestore'
//import { getFirestore,collection,getDocs,query,where } from 'firebase/firestore'
import { useEffect, useState } from 'react'

function App() {


  // const [product,setProduct] = useState(null)

  // useEffect(()=> {

  //   const db = getFirestore()

  //     const productRef = doc(db,"item","2rG2EVddSFVhXOHudKaj")

  //     getDoc(productRef).then((snapshot)=> {
  //       if(snapshot.exists){
  //         setProduct({id: snapshot.id,...snapshot.data()})
  //       }
  //     })
  // },[])

  // const [products,setProducts] = useState([])
  
  // useEffect(()=>{
  //   const db = getFirestore()
  //   const itemsCollection = collection(db,"item")

  //   getDocs(itemsCollection).then((snapshot)=>{
  //     setProducts(snapshot.docs.map((doc)=> (
  //        {id:doc.id,...doc.data()}
  //     )))
  //   })
  // },[])

// const [products,setProducts] = useState ([])

// useEffect(()=> {
//   const db = getFirestore()

//   const q = query(
//     collection(db,"item"),
//     where("precio", ">", 400)
//   )

//   getDocs(q).then((snapshot)=>{

//     if(snapshot.size === 0){
//       console.log("no hay resultados")
//     }

//     setProducts(snapshot.docs.map((doc) =>(
//       {id:doc.id,...doc.data()}
//     )))
//   })


// },[])

  return (
    <>

     <BrowserRouter>

     <CartProvider>

     <NavBar/>

     <Cartwidget/>

     <Routes>

      <Route path='/' element={<ItemListContainer/>}/>

      <Route path='/categoria/:categoryId' element={<ItemListContainer/>}/>
 
      <Route path='/cart' element={<Cart/>}/>

      <Route path='/detalle/:id' element={<ItemDetailContainer/>}/>

      <Route path='/*' element={<Error/>}/>

      <Route path='/checkout' element={<Checkout/>}/>

     </Routes>

     </CartProvider>
    

    </BrowserRouter> 

    
    </>
  );
};

export default App
