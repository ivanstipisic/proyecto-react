import React, { useEffect, useState}   from 'react'
import { getProduct2 } from '../../Utilidades/mock'
import ItemDetail from './ItemDetail'




const ItemDetailContainer = () => {
    
    const [producto2, setProducto1] = useState ({})

    useEffect(() => {
     
        getProduct2
        .then(resolve => setProducto1(resolve))
        
    }, [])

    return (
        <div>

        <ItemDetail key={producto2} item ={producto2} />
            
        </div>
    )
}

export default ItemDetailContainer
