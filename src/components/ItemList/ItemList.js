import Item from "../Item/Item"
import { memo } from 'react'


const ItemList = ({products}) =>{

    return(
        <>
            { products.map(product => 
                <>
                    <Item {...product}/>  
                </>)}
        </>
    )

}

export default memo(ItemList)