import { useState, useEffect } from "react"

export const useAsync = (asyncFuntion, depend = []) =>{
    const [data, setData] = useState([])
    const [error, setError] = useState()
    const [cargando, setCargando] = useState(true)
    
    if(!Array.isArray(depend)){
        depend= []
    }
    
    useEffect(() => {

        setCargando(true)

        asyncFuntion().then(resp =>{
            setData(resp)
        }).catch(error => {
            setError(error)
        }).finally(() => {
            setCargando(false)
        })

       
    }, [depend])

    return(data, error, cargando)
}