import React from 'react'
import { UseCartContext } from '../../Context/CartContext'


function Cart() {
   
   const {cartList} = UseCartContext ()
console.log(cartList)
       return (
        <div>
            <h3 style={{color: "red"}}>Proximamente</h3>
            {cartList.map (item => <h2>{item.item.nombre}</h2>)}
        </div>
    )
}

export default Cart


