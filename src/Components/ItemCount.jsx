import {useState} from 'react';
import Button from 'react-bootstrap/Button';

const ItemCount = ({stock, initial, onAdd}) => {
    const [count, setCount] = useState(initial)
    
    function sumar() {
        if ( count < 1 ) {
        setCount (count + 1)
        }
    }

    function restar () {
        if (count > 1){
        setCount(count - 1)
    }
        
    } 

    const agregar = () => {
        onAdd(count)
     }

    return (
        <div>
        <br/>
        <Button variant="primary" onClick={() => restar (count)}> - </Button>
        <Button variant="secondary" onClick={() => agregar (count)}> Agregar </Button>
        <Button variant="primary" onClick={() => sumar (count)}> + </Button>
        
            
        </div>
    
    
    )
}

export default ItemCount;
