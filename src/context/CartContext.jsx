import { useState } from "react"
import {createContext} from "react"

export  const CartContext = createContext()


const CartContextProvider = ({children}) => {

    const [cart, setCart] = useState([])

    const addToCart = (element)=>{
        
        if(isInCart(element))
        { 
            let newArray = cart.map((product) =>{ 
                if (product.id === element.id) {
                    let newProduct = {
                        ...product,
                        quantity: element.quantity
                    }
                    return newProduct
                }else{
                    return product
                }
            }) 
            setCart(newArray)
        }else {
            setCart([...cart, element])
        }
        
         
    }

    const clearCart =()=>{
        setCart([])
    }

    const getQuantityById = (id)=>{

        const product = cart.find(element =>element.id === id)
        return product?.quantity
    }

    const getTotalPriceCart = ()=>{
        const total = cart.reduce((acc, element)=>{
            return acc + (element.price * element.quantity)
        }, 0)
        return total
    }

    const getTotalQuantity = ()=>{
        const total = cart.reduce((acc, element)=>{
            return acc + (element.quantity)
        }, 0)
        return total
    }

    const deleteElementById = (id)=>{
        const newArray = cart.filter(product=>product.id !== id)
        setCart(newArray)
    }


    const data ={
        cart,
        addToCart,
        clearCart,
        getQuantityById,
        getTotalPriceCart,
        getTotalQuantity,
        deleteElementById
    }

    const isInCart =(item)=>{
        return cart.some(elemento=> elemento.id === item.id)
    }

  return (

    <CartContext.Provider value={ data}>
        {children}
    </CartContext.Provider>
  )

}

export default CartContextProvider