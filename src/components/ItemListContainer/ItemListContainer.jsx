import {useState,useEffect} from "react";
import ItemList from"../ItemList/ItemList.jsx";
import { collection,getDocs,query,where, } from "firebase/firestore";
import { useParams } from "react-router-dom";
import { db } from "../../firebase/config.js";
const ItemListContainer = ({greeting}) => {

    const [productos,setProductos] = useState ([]);

    const {categoryId} = useParams()

    useEffect (()=>{
      const items = categoryId?
      query(collection(db,"item"),where ("categoria","==",categoryId))
      :
      collection(db,"item")
    
      getDocs(items).then((res) =>{
        const nuevosItems = res.docs.map((doc) => {
          const data = doc.data()
          return {id:doc.id,...data}
        })
        setProductos(nuevosItems)
        })
        .catch((error) => console.log(error))
        
  

  }, [categoryId])

  console.log(productos)
return (
  <div>
 <h1>{greeting}</h1>

 {productos.length == 0 ? <h1>Espere por favor</h1> : <ItemList productos={productos}/>
}
 </div>
)}
export default ItemListContainer;