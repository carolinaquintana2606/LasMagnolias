import "./CartWidget.css"
import cart from './assets/carrito.png'

const CartWidget = () => {
    return (
        <div className="col-2 CartWidget">
            <img src={cart} alt='cart' className='p-2'/>
            0
        </div>
    )
}

export default CartWidget;