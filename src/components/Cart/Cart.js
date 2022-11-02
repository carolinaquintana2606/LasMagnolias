
import { useContext } from "react"
import { CartContext } from '../../context/CartContext'
import CartItem from '../CartItem/CartItem'
import { Link } from 'react-router-dom'
import './Cart.css'


const Cart = () => {
    const { cart, clearCart, totalCant, total} = useContext(CartContext)  

    if(totalCant === 0) {
        return (
            <h1 className="titleCart">No hay items en el carrito</h1>
        )
    }

    return (     
        <div>
            <h1 className="titleCart">Carrito</h1>
            { cart.map(p => <CartItem key={p.id} {...p}/>) }
            <h3>Total: ${total}</h3>
            <button onClick={() => clearCart()} className="Button">Limpiar carrito</button>
            <Link to='/checkout' className='Option'><button className="Button">Iniciar Compra</button></Link>
        </div>
    )
}

export default Cart