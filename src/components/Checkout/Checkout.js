import { useState, useContext, useEffect } from "react"
import { CartContext } from "../../context/CartContext"
import { getDocs, addDoc, collection, where, query, documentId, writeBatch } from 'firebase/firestore'
import { db } from '../../services/firebase'
import swal from 'sweetalert'
import { createOrder } from "../../services/firebase/firestore"
import './Checkout.css'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const Checkout = () => {
    const [name, setName] = useState('')
    const [mail, setMail] = useState('')
    const [phone, setPhone] = useState('')
    const [order, setOrder] = useState([])
    const [loading, setCargando] = useState(false)
    const { cart, total, clearCart } = useContext(CartContext)
    

   /* useEffect(() =>{
        setCargando(true)
        createOrder(name, phone, mail).then(order => {setOrder(order)
        }).catch(error => {
            console.log(error)
        }).finally(() =>{
            setCargando(false)
        })

    }, [])*/

   const createOrder = async () => {

        setCargando(true)

        try {
            const Order = {
                buyer: {
                    name: name,
                    phone: phone,
                    email: mail
                },
                items: cart,
                total
            }
    
            const ids = cart.map(prod => prod.id)
            const productsRef = collection(db, 'products')
            const productsAddedFromFirestore = await getDocs(query(productsRef, where(documentId(), 'in' , ids)))
            const { docs } = productsAddedFromFirestore
            const batch = writeBatch(db)
            const outOfStock = []
    
            docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock
    
                const productAddedToCart = cart.find(prod => prod.id === doc.id)
                const prodQuantity = productAddedToCart?.cantidad
    
                if(stockDb >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuantity })
                } else {
                    outOfStock.push({ id: doc.id, ...dataDoc})
                }
            })
    
            if(outOfStock.length === 0) {
                await batch.commit()
                const orderRef = collection(db, 'orders')
                const orderAdded = await addDoc(orderRef, Order)

                swal({
                    title: "¡Muchas gracias por su compra!",
                    text: `Su N° de órden es: ${orderAdded.id}`,
                    icon: "success",
                    button: "Cerrar ",
                  });
    
                clearCart()

            } else {
                swal({
                    title: "¡Muchas gracias por su compra!",
                    text: 'No hay Stock de algunos productos',
                    icon: "error",
                    button: "Cerrar ",
                  });
                
            }
        } catch (error) {
            console.log(error)

        } finally {
            setCargando(false)
        }
    }

    

    if(loading) {

        return <h1 className="titleCheckout">Estamos preparando su pedido...</h1>
    }

    return (
        <>
            <div className="row">
                <form className="formCheckout col-6 px-5 mb-5">
                    <div class="mb-3 px-5">
                        <label for="name" class="form-label">Nombre y Apellido</label>
                        <input className="px-5 mx-2" value={name} onChange={(e) =>setName(e.target.value)} type="text" class="form-control" id="" aria-describedby="name"/>
                    </div>
                
                    <div class="mb-3 px-5">
                        <label for="celular" class="form-label">Celular</label>
                        <input className="px-5 mx-2" value={phone} onChange={(e) =>setPhone(e.target.value)} type="number" class="form-control" id=""/>
                  </div>

                    <div class="mb-3 px-5">
                        <label for="email" class="form-label">E-mail</label>
                        <input className="px-5 mx-2" value={mail} onChange={(e) =>setMail(e.target.value)} type="email" class="form-control" id="" aria-describedby="emailHelp"/>
                    </div>
                </form>

             {cart.map(prod => 
                <Card  style={{ width: '18rem' }} className="col-6 m-3">
                    <Card.Img variant="top" src={prod.img} />
                    <Card.Body>
                        <Card.Title className="CardCheckout">DETALLE DEL PEDIDO</Card.Title>
                        <Card.Title className="CardTitle">{prod.name}</Card.Title>
                        <Card.Text className="my-2 CardText">Cantidad: {prod.cantidad}</Card.Text>
                        <Card.Text className="my-2 CardText">Precio ${prod.price}</Card.Text>
                        <Card.Subtitle className="my-2 CardSubTitle">Subtotal ${prod.price * prod.cantidad}</Card.Subtitle>
                        <Card.Title className="my-2 CardTitle">Total ${total}</Card.Title>
                    </Card.Body>
                </Card>)}
            </div>
            <Button className="btn BtnOrder mb-2 px-5 py-2" onClick={createOrder}>Generar Orden</Button>
        </>
    )
}

export default Checkout 