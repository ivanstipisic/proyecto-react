import React from 'react'

const ItemDetail = ({producto2}) => {
    return (
        <>
        <div key={producto2.id} className='card w-50 bg-dark'>
        <br/>
        
        <div className='card-header bg-secondary'>
        {producto2.autor}
        </div>

        <div className='card-body bg-success'>
        <img className='card-img w-60' src={producto2.portada} alt=""  />
        </div>
        <p className='card-text'>
        Primera entrega de la saga Harry Potter
        </p>

        <div className='card-footer bg-secondary'>
        <button className='btn btn-outline-dark'> {producto2.autor}</button>
        </div>    
        </div>        </>
    )
}

export default ItemDetail