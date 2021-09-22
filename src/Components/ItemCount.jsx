import {useState} from 'react';
import Button from 'react-bootstrap/Button';

const ItemCount = ({stock, initial, onAdd}) => {
    const [count, setCount] = useState(initial)
    
    function sumar () {
        if (count < 5) {
            setCount(count + 1)
            
        }
    }
    
    function restar () {
        if (count > 1) {
            setCount(count - 1)
            
        }
    }
    
    const agregarCarrito = () => {
        onAdd(count)
    } 

    return (
        <div>
        <br />      
        <Button variant="primary" onClick={restar}> - </Button>
        <Button variant="secondary" onClick={agregarCarrito}> Agregar al carrito </Button>
        <Button variant="primary" onClick={sumar}> + </Button>
        <br/>
        <span style={{color: "yellow"}}> {count} </span> 
            
        </div>
    
    
    )
}

export default ItemCount;
