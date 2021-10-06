import { useState, useContext } from 'react'
import { ContextApp } from '../../App'
import { UseCartContext } from '../../Context/CartContext'
import ItemCount from '../ItemCount'


const ItemDetail = ({product2}) => {
    
    // const { state } = useContext (ContextApp)
    
    const [cantSelect, setCantSelect] = useState (0) 
    
    const useContextApp = useContext (ContextApp)

    const onAdd = (cant) => {
        
        setCantSelect(cant)
        addToCart ({item: product2, cantidad: cant})
    }


    const {addToCart} = UseCartContext ()

    return (
        <>
        {/* {useContextApp.map(product2 => <p> {product2.nombre} </p>)} */}
        
        <div key={product2.id} className='card w-50 bg-dark'>
        <br/>
        
        <div className='card-header bg-secondary'>
        {product2.title}
        </div>

        <div className='card-body bg-success'>
        <img className='card-img w-60' src={product2.portada} alt=""  />
        </div>
        
        <div className='card-footer bg-secondary'>
        <button className='btn btn-outline-dark'> {product2.autor}</button>
        
        <ItemCount stock={5} initial={1} onAdd={onAdd} />

        </div>    
        </div>       
        
        </>
    )
}

export default ItemDetail