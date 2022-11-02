import "./CartWidget.css"
import cart from './assets/cart.png'
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"

const CartWidget = () => {

    const {getTotalCant} = useContext(CartContext)
    const totalCant = getTotalCant()
    
    return (
        <div className="CartWidget">
            <Link to='/cart' className="linkCart">
                <img src={cart} alt='cart' className='p-2'/>
                {totalCant}
            </Link>
        </div>
    )
}

export default CartWidget;