import React from 'react'
import Item from './Item'


const ItemList = ({productos}) => {
    return (
    <>
    {productos.map(productos => <Item productos={productos} />) }
    
    </>
    )
}

export default ItemList
