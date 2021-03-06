import React, {useState, useEffect }   from 'react'
import { getFirestore } from '../../Services/GetFireBase'
import { getProduct2 } from '../../Utilidades/mock'
import ItemDetail from './ItemDetail'



const ItemDetailContainer = () => {
    const [product2, setProduct2] = useState({})

    const dataQuery = getFirestore ()
    dataQuery.collection('Items').doc("titulo").get()
    .then(resolve => setProduct2 ( { id: product2.id, ...product2.data() }) )
    .catch (error => console.log (error))
    
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
