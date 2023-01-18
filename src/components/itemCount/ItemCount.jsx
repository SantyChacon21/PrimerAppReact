import { useEffect } from "react"
import { useState } from "react"

const ItemCount = ({stock, initial = 1, onAdd}) => {

    const [counter, setCounter] = useState(initial)

    useEffect(()=>{
        setCounter(initial)
    }, [initial])

    const increment = ()=>{
        if (counter < stock ){
            setCounter(counter + 1)
        }
    }

    const decrement = ()=>{
        if (counter > 1){
            setCounter(counter - 1)
        }
    }
  return (
    <div className="container-btn">
        <h2>Cantidad: {counter}</h2>
        <div className="btns">
            <button onClick={increment}>+</button>
            <button onClick={()=>onAdd(counter)}>Agregar al carrito</button>
            <button onClick={decrement}>-</button>
        </div>
    </div>
  )

}

export default ItemCount