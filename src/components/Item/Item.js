import Card from 'react-bootstrap/Card'
import { Link } from "react-router-dom"
import './Item.css'

const Item = ({...product}) =>{
    
return (

    <Card key={product.id} style={{ width: '18rem' }} className="m-3 item">
      <Card.Img variant="top" src={product.img} />
      <Card.Body>
        <Card.Title className="CardTitle">{product.name}</Card.Title>
        <Card.Subtitle className="my-2 CardText">{product.marca}</Card.Subtitle>
        <Card.Subtitle className="my-2 CardTitle">Precio ${product.price}</Card.Subtitle>
        <Link className="CardLink" to={`/detail/${product.id}`}><h5 className="card-title CardDetail p-1">Ver Detalle</h5></Link>
      </Card.Body>
    </Card>
)
}

export default Item