
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import trash from './assets/eliminar.png'
import './CartItem.css'

const CartItem = ({ id, name, cantidad, price }) => {
    const { removeItem } = useContext(CartContext)

    const removeProd = (id) => {
        removeItem(id)
    }

    return (
      <Table striped>
        <thead>
            <tr>
              <th>PRODUCTO</th>
              <th>PRECIO UNITARIO</th>
              <th>CANTIDAD</th>
              <th>SUBTOTAL</th>
              <th></th>
            </tr>
        </thead>
        <tbody>
          <tr>
              <td>{name}</td>
              <td>${price}</td>
              <td>{cantidad}</td>
              <td>${price * cantidad}</td>
              <td  onClick={() => removeProd(id)}> <Button className='BtnTrash'><img src={trash} alt='trash'/></Button></td>
                
          </tr>
        </tbody>
      </Table>            

    )
}

export default CartItem