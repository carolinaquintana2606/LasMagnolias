
import "./ItemListContainer.css"
import { useState, useEffect } from "react";
import { getProducts } from "../../asyncMock";
import ItemCount from "../ItemCount/ItemCount";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { getProductsCat } from "../../asyncMock";

const ItemListContainer = ({saludo}) =>{
    const [products, setProducts] = useState([])

    const {catId} = useParams()
    
    useEffect(() => {
        if (!catId){
            getProducts().then(resp => {
                setProducts(resp)
            })
        }else {
            getProductsCat(catId).then(resp => {
                setProducts(resp)
            }) 

        }
    }
    , [catId])

    
    return(
        <div>
            <h1 className="animate__animated animate__backInLeft saludo">{saludo}</h1>
            <ItemList products={products}/>
        </div>
        
        
    )
}

export default ItemListContainer;