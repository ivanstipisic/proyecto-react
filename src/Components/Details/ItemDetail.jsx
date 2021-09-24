import { useState } from 'react'
import ItemCount from '../ItemCount'



const ItemDetail = ({product2}) => {
    const [cantSelect, setCantSelect] = useState (0) 
    const onAdd = (cant) => {
        console.log(cant)
        setCantSelect(cant)
    }

    return (
        <>
        
        <div key={product2.id} className='card w-50 bg-dark'>
        <br/>
        
        <div className='card-header bg-secondary'>
        {product2.id}
        </div>

        <div className='card-body bg-success'>
        <img className='card-img w-60' src={product2.portada} alt=""  />
        </div>
        
        <div className='card-footer bg-secondary'>
        <button className='btn btn-outline-dark'> {product2.autor}</button>
        
        <ItemCount stock={5} initial={1} onAdd={onAdd} />

        {/* <Eventos /> */}
        </div>    
        </div>       
        
        </>
    )
}

export default ItemDetail