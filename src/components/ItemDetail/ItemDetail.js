import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ({...product}) => {

    return(
        <div id={product.id}>
            <img src={product.img} class="card-img-top" alt={product.name} className="w-25"></img>
            <div class="card-body">
                <h5 class="card-title">{product.name}</h5>
                <p class="card-text">${product.price}</p>
                <p>{product.description}</p>
                <ItemCount initial={1} stock={product.stock}/>
            </div>
        </div>
    )

}

export default ItemDetail