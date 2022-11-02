import ItemCount from "../ItemCount/ItemCount"
import { useState, useContext } from "react"
import { Link } from 'react-router-dom'
import { CartContext } from "../../context/CartContext"
import Card from 'react-bootstrap/Card'
import './ItemDetail.css'

const ItemDetail = ({id, name, img, category, description, price, stock, marca}) => {
    const [cantToAdd, setCantToAdd] = useState(0)

    const {addItem, getProdCant} = useContext(CartContext)
    
    const handleOnAdd = (cantidad) => {
        setCantToAdd(cantidad)
        const productToAdd = {id, name, price, cantidad}
        addItem(productToAdd)
    }

    const CantProdAgreg = getProdCant(id)

    return(
        <Card key={id} className="m-3  item justify-content-center">
            <Card.Img variant="top" src={img} style={{ width: '25rem' }} className="container-fluid"/>
            <Card.Body>
                <Card.Title className="CardTitle">{name}</Card.Title>
                <Card.Subtitle className="my-2 CardText">{marca}</Card.Subtitle>
                <Card.Text> {description}</Card.Text>
                <Card.Subtitle className="my-2 CardTitle">Precio ${price}</Card.Subtitle>
            <>
             {cantToAdd === 0 ? ( <ItemCount onAdd={handleOnAdd} stock={stock} initial={CantProdAgreg}/> ) : (<Link to='/cart' className="p-2 CardLink">Finalizar compra</Link>)}
            </> 
            </Card.Body>
        </Card>
    )
}

export default ItemDetail