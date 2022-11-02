
import "./ItemListContainer.css"
import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { getProductsByCat } from "../../services/firebase/firestore";
import { useAsync } from "../../hooks/useAsync";


const ItemListContainer = ({saludo}) =>{
    //const {catId} = useParams()
    //const {data: products, error, cargando} = useAsync(() => getProductsByCat(catId), [catId])
    
    const [products, setProducts] = useState([])
    const [cargando, setCargando] = useState(true)
    const {catId} = useParams()

    useEffect(() =>{
        setCargando(true)
        getProductsByCat(catId).then(products => {setProducts(products)
        }).catch(error => {
            console.log(error)
        }).finally(() =>{
            setCargando(false)
        })
    }, [catId])
    
   
    if(cargando) {
        return <h1 className="titleList">Cargando productos...</h1>
    }

    return( 
        <div className="row container-fluid justify-content-around">
            <h1 className="animate__animated animate__backInLeft saludo">{saludo} {catId || ''}</h1>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer;