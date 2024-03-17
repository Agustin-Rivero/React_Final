import Item from "../Item/Item.jsx"
import "./ItemList.css"

 const ItemList = ({productos}) => {
     return (
        <div className="ItemList">
        {productos.map((producto, index) => (
          <Item key={index} producto={producto} />
                 )
             )
             }
             </div>
     )
}
export default ItemList

