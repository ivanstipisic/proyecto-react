import React from 'react'
import ItemCount from './ItemCount';
import '../App.css';


function ItemListContainer({saludo}) {
    
    const agregar = (cantidad) => {
        console.log(cantidad)
    }
    
    
 
    
    return (
        <div>
        {saludo}
        <ItemCount stock={5} initial={1} agregar={agregar} />
        </div>
    )
}

export default ItemListContainer;