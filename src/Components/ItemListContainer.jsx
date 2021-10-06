import React, {useState , useEffect } from 'react'
import '../App.css';
import {getProduct} from '../Utilidades/mock.js'
import ItemList from './Items/ItemList';
import { useParams } from "react-router-dom";
import { getFirestore } from '../Services/GetFireBase';



function ItemListContainer({saludo}) {

    const [producto, setProducto] = useState([])
    const [loading, setLoading] = useState(true)
    const { idCategoria } = useParams ()


    

    useEffect(() => {
      
    if (idCategoria) {
        const dataQuery = getFirestore ()
    dataQuery.collection('Items').where("titulo", "==", idCategoria).get()
    .then (resolve => {
    setProducto (resolve.docs.map (producto => ( { id: producto.id, ...producto.data() } )) ) } )
    .catch (error => console.log (error))
    .finally(() => setLoading (false))        

    }    

else {
    const dataQuery = getFirestore ()
    dataQuery.collection('Items').get()
    .then (resolve => {
    setProducto (resolve.docs.map (producto => ( { id: producto.id, ...producto.data() } )) ) } )
    .catch (error => console.log (error))
    .finally(() => setLoading (false))
    
    }
    //     if (idCategoria ) {
    //         getProduct
    //         .then(resolve => {

    //         setProducto (resolve.filter(producto => producto.categoria === idCategoria))        
    //     })
    //     .catch(error => console.log((error)))
    //         .finally(()=>setLoading(false))   
    // } else {

    //         getProduct
    //         .then(resolve => {
    //             setProducto(resolve)
    //         })
    //         .catch(error => console.log((error)))
    //         .finally(()=>setLoading(false))
    //     }
        
    }, 
    
    [idCategoria])
        
    

    console.log(idCategoria);

      
    return (
        <div>
        {saludo}

       { loading ? <h2> ... </h2> : <ItemList productos = {producto} />} 
       
        </div>
    )
}

export default ItemListContainer;