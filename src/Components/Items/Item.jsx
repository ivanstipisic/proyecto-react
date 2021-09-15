import React from 'react'


const Item = ({productos}) => {
    return (
        <div key={productos.id} className='card w-50 bg-dark' style={{ marginLeft: 350, marginTop:10}}>
        <br/>
        
        <div className='card-header bg-secondary'>
        {productos.title}
        </div>

        <div className='card-body bg-success'>
        <img className='card-img w-60' src={productos.portada} alt=""  fluid/>
        </div>

        <div className='card-footer bg-secondary'>
        <button className='btn btn-outline-dark'> + Info</button>
        </div>    
        </div>
    )
}

export default Item

