import ItemCount from "../ItemCount/ItemCount"
import Item from "../Item/Item"
import { Link } from "react-router-dom"

const ItemList = ({products}) =>{

    return(
        <div>
            { products.map(product => 
            <div>
                
                <Item {...product}/>
                <ItemCount initial={1} stock={product.stock}/>
            </div>)}
        </div>
    )

}


export default ItemList