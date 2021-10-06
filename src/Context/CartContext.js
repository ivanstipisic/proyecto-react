import { createContext, useState, useContext } from "react";

export const CartContext = createContext ([])

export const UseCartContext = () => useContext(CartContext)

export default function CartContextProvider({children}) {
    
    const [cartList, setcartList] = useState([])
    
    const addToCart = (item, quantity) => {
        const index = cartList.findIndex (i  => i.productos.id === item.id)
        
        if (index < -1) {
            const quantityOld = cartList[index].quantity

            cartList.splice(index, 1)

            setcartList ([...cartList, {item, quantity: quantity + quantityOld}])
        }
        else {
            setcartList([...cartList, {item, quantity}])
        }
        
        
    }

    const removeList = (productos) => {
        const deleteProduct = cartList.filter((productos) => productos.item.id !== productos.productos.id);
        
        setcartList([...deleteProduct])
    }


    // const cartIcon = ( =< {


    return (

        <CartContext.Provider value={{
            cartList, 
            addToCart,
            removeList,
            }}>
            {children}
        </CartContext.Provider>
    )
}