import {useState} from 'react';
import Button from 'react-bootstrap/Button';

const ItemCount = ({stock, initial, onAdd}) => {
    const [count, setCount] = useState(initial)
    
    let cuentaSuma = 1;

    const sumar = () => {
        
        onAdd(cuentaSuma) 
        if ( count < 1 ) {
        setCount (count + 1)
        }
    }

    let cuentaResta = 0;

    const restar = () => {
        onAdd(cuentaResta)
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

        <Button variant="primary" onClick={restar}> <span> {cuentaResta} - </span> </Button>
        <Button variant="secondary" onClick={() => agregar (count)}> Agregar </Button>
        <Button variant="primary" onClick={sumar}> <span> {cuentaSuma} + </span> </Button>
        
            
        </div>
    
    
    )
}

export default ItemCount;
