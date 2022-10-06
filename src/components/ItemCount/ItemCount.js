import { useState } from "react"
import Button from "../Button/Button"

const handleOnAdd = () => {
    console.log("agregar al carrito")
  }

const ItemCount = ({initial, stock}) =>{
    
    const [count, setCount] = useState(initial)

    const decrement = () => {
        
        if(count > initial) {
            setCount(count - 1)
        }
    }

    const increment = () => {
        
        if (count < stock)
        setCount(count + 1)
    }

    return (
        <div className="d-flex justify-content-center mt-5">
            <button onClick={decrement} className="btn btn-primary">-</button>
            <h4>{count}</h4>
            <button onClick={increment} className="btn btn-primary">+</button>
            <button onClick={handleOnAdd} className="btn btn-primary">Agregar al Carrito</button>
        </div>
    )
}

export default ItemCount


