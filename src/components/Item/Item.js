import ItemCount from "../ItemCount/ItemCount"
import { Link } from "react-router-dom"

const Item = ({...product}) =>{
    
return (
    
    <div  key={product.id}>
        <img src={product.img} className="card-img-top w-25" alt={product.name}></img>
        <div className="card-body">
        <Link to={`/detail/${product.id}`}><h5 className="card-title">{product.name}</h5></Link>
        <p className="card-text">${product.price}</p>
        
         </div>
    </div>
)
}

export default Item