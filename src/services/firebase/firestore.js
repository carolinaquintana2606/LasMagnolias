import { collection, query, where, getDocs, doc, getDoc, orderBy} from "firebase/firestore"
import { db } from "./index"


export const getProductsByCat = (catId) => {

    return new Promise((resolve, reject) =>{
        const collectionRef = catId ? query(collection(db, 'products'), where('category', '==', catId)) : collection(db, 'products')
        
        getDocs(collectionRef).then(response => {

            const getProducts = response.docs.map(doc => {
                const data = doc.data()
                return { id: doc.id, ...data}
            })
        resolve(getProducts)
        }).catch(error => { reject(error)
        })
    })
}


export const getProductsById = (prodId) =>{
    return new Promise((resolve, reject) =>{
        const docRef = doc(db, 'products', prodId)
        
        getDoc(docRef).then(doc => {
            const data = doc.data()
            const getProduct = { id: doc.id, ...data} 
         resolve(getProduct)

        }).catch(error => {console.log(error) })

    })

}


export const getCategories = () =>{
    return new Promise((res, rej)=>{

        const collectionRef = query(collection(db, 'categories'), orderBy('order'))

        getDocs(collectionRef).then(response => {
        console.log(response)
      const getCategories = response.docs.map(doc => {
        const data = doc.data()
        return {id: doc.id, ...data}
      })
      res(getCategories)
    }).catch(error => {rej(error)})
    
    })
  }
