import "./ItemListContainer.css"

const ItemListContainer = ({saludo}) =>{
    return(
        <h1 className="animate__animated animate__backInLeft saludo">{saludo}</h1>
    )
}

export default ItemListContainer;