import React from 'react'
import { Link } from "react-router-dom";

const Item = ({productos}) => {
    return (
        
<div key={productos.id} className='card w-50 bg-dark'>
<br/>

<div className='card-header bg-secondary'>
{productos.title}
</div>

<div className='card-body bg-success'>
<img className='card-img w-60' src={productos.portada} alt=""  />
</div>
<div className='card-info bg-danger'>{productos.autor}</div>
<div className='card-footer bg-secondary'>
<Link to={`/detalle/${productos.id}`}> 
<button className='btn btn-outline-light'> + info </button>
</Link>
</div>

</div>
)   

}


export default Item

