import React, {useState, useEffect }   from 'react'
import { getProduct2 } from '../../Utilidades/mock'
import ItemDetail from './ItemDetail'



const ItemDetailContainer = () => {
    const [product2, setProduct2] = useState({})

    
    useEffect(() => {
     
        getProduct2
        .then (resp => setProduct2(resp))
        
    }, [])

    return (
        <>
        <ItemDetail product2={product2} />
        </>
    )
}

export default ItemDetailContainer
