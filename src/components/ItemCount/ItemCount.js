import { useState } from "react"
import './ItemCount.css'


const ItemCount = ({onAdd, stock = 0, initial = 1}) =>{

    const [cant, setCant] = useState(initial)

    const decrement = () => {
        if(cant > 1) {
            setCant(cant - 1)
        }
    }

    const increment = () => {
        if (cant < stock)
        setCant(cant + 1)
    }

    return (
        <div className="d-flex justify-content-center mt-5">
            <button onClick={decrement} className="btn mx-1 BtnCount">-</button>
            <h4 className="Count">{cant}</h4>
            <button onClick={increment} className="btn mx-1 BtnCount">+</button>
            <button className="btn mx-1 BtnCount" onClick={() => onAdd(cant)}>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount


