import React, { memo } from 'react'
import Item from './Item'


const ItemList = memo (

({productos}) => {
    return (
    <>
    {productos.map(productos => <Item productos={productos} />) }
    
    </>
    )
}
)

export default ItemList
