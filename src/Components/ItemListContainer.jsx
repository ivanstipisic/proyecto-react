import React, {useState , useEffect } from 'react'
import ItemCount from './ItemCount';
import '../App.css';
import {getProduct} from '../Utilidades/mock.js'
import ItemList from './Items/ItemList';




function ItemListContainer({saludo}) {

    const [producto, setProducto] = useState([])
    const [loading, setLoading] = useState(true)
    
    const onAdd = (cantidad) => {
        console.log(cantidad)
    }
    

    useEffect(() => {
        getProduct
        .then(resolve => {
            setProducto(resolve)
        })
        .catch(error => console.log((error)))
        .finally(()=>setLoading(false))
    }, [])
    



      
    return (
        <div>
        {saludo}

       { loading ? <h2> ... </h2> : <ItemList productos = {producto} />} 
       
        <ItemCount stock={5} initial={1} onAdd={onAdd} />
        </div>
    )
}

export default ItemListContainer;