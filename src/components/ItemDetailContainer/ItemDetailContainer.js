import { useState, useEffect } from 'react'
import { getProduct  } from '../../asyncMock'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
const ItemDetailContainer = () =>{
    const [product, setProduct] = useState()
    
    const {prodId} = useParams()
    
    useEffect(() =>{
        getProduct(prodId).then(response => {
        setProduct(response)
    })
}, [])

    console.log(product)

    return(
        <div>
            <h1>Detalle del producto</h1>
            <ItemDetail {...product}/>
        </div>
    )
}

export default ItemDetailContainer
