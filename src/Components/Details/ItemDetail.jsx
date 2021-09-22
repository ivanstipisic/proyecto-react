import React from 'react'

const ItemDetail = ({product2}) => {
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
        </div>    
        </div>       
        
        </>
    )
}

export default ItemDetail