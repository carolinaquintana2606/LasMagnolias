import { useState, useEffect } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import { getProductsById } from '../../services/firebase/firestore'
import { useAsync } from "../../hooks/useAsync";
import './ItemDetailContainer.css'



const ItemDetailContainer = ({setCart}) =>{
    //const {prodId} = useParams()
    //const {data: product, error, cargando} = useAsync(() => getProductsById(prodId), [prodId])

    const [product, setProduct] = useState()
    const [cargando, setCargando] = useState(true)
    const {prodId} = useParams()
    
    useEffect(() =>{
        setCargando(true)
            getProductsById(prodId).then(product => {
                setProduct(product)
            }).catch(error =>{
                console.log(error)
            }).finally(() =>{
                setCargando(false)
            })
     }, [prodId])

    if(cargando) {
    return <h1 className="titleDetail">Cargando...</h1>}
    
    return(
        <div className='justify-content-center'>
            <h1 className="titleDetail">Detalle del producto</h1>
            <ItemDetail {...product} setCart={setCart}/>
        </div>
    )
}

export default ItemDetailContainer
