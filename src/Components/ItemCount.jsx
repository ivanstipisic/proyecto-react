import {useState} from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';


const ItemCount = ({stock, initial, onAdd}) => {
    const [count, setCount] = useState(initial)

    const [cambiarBoton, setCambiarBoton] = useState(true)


    function suma () {
        if (count < 5) {
            setCount(count + 1)
            setCambiarBoton (false)    
        }
    }
    
    function resta () {
        if (count > 1) {
            setCount(count - 1)
            setCambiarBoton(true)
            
        }
    }
    
    const agregarCarrito = () => {
        onAdd(count)
        setCambiarBoton (false)
    } 

    return (
        <div>
        <br />      
        <Button variant="primary" onClick={resta}> - </Button>
        { cambiarBoton ? 
        <Button variant="secondary" onClick={agregarCarrito}> Agregar al carrito </Button>
        : 
        <Link to={'/cart'}>
        <Button variant="danger" onClick={agregarCarrito}> Terminar compra </Button>
        </Link>
    }
        <Button variant="primary" onClick={suma}> + </Button>
        <br/>
        <span style={{color: "yellow"}}> {count} </span> 
            
        </div>
    
    
    )
}

export default ItemCount;
