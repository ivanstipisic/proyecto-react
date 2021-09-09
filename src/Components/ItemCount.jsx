import {useState} from 'react';
import Button from 'react-bootstrap/Button';

const ItemCount = (stock, initial, agregar) => {
    const [count, setCount] = useState(initial)
    
    function sumar() {
        setCount(count + 1)
        
    }

    function restar () {
        if (count > 1)
        setCount(count - 1)
    } 

    const add= () => {
        agregar(count)
     }

    return (
        <div>
        <br/>
        <Button variant="primary" onClick={restar}> - </Button>
        <Button variant="secondary" onClick={() => add (count)}> Agregar </Button>
        <Button variant="primary" onClick={sumar}> + </Button>
        
            
        </div>
    
    
    )
}

export default ItemCount;
