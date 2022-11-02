import { useState, createContext, useEffect } from "react"

export const CartContext = createContext()

export const CartContextProvider = ({children}) => {
  const [cart, setCart] = useState([])
  const [totalCant, setTotalCant] = useState(0)
  const [total, setTotal] = useState(0)

  const addItem = (productToAdd) => {
      if(!isInCart(productToAdd.id)) {
        setCart([...cart, productToAdd])
      } else {
        const cartUpdated = cart.map(prod => {
          if(prod.id === productToAdd.id) {
            const productUpdated = {...prod, cantidad: productToAdd.cantidad}
            return productUpdated
          }else{ 
            return prod
          }
        })
        setCart(cartUpdated)
      }
  }

  const isInCart = (id) =>{
    return cart.some(prod => prod.id === id)
  }

  const removeItem = (id) => {
    const cartWithoutItem = cart.filter(prod => prod.id !== id)
    setCart(cartWithoutItem)
  }

  const getTotalCant = () =>{
    let totalCant = 0
    cart.forEach(prod => {totalCant += prod.cantidad})
    return(totalCant)
  }

  const getProdCant = (id) =>{
    const product = cart.find(prod => prod.id === id )
    return product?.cantidad
  }

  useEffect(() => {
    const totalCant = getTotalCant()
    setTotalCant(totalCant)
  }, [cart])

  useEffect(() => {
    const total = getTotal()
    setTotal(total)
  }, [cart])


  const getTotal = () => {
   let acum = 0
    cart.forEach(prod => { acum += prod.cantidad * prod.price})
    return acum
  }

  const clearCart = () => { setCart([]) }    

    return(
      <CartContext.Provider value={{cart, addItem, removeItem,  getProdCant, getTotalCant, clearCart, totalCant, total}}>
        {children}
      </CartContext.Provider>

    )
}

