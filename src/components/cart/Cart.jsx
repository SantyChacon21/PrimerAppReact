import { useState } from 'react';
import {useContext} from 'react'
import { CartContext } from '../../context/CartContext'
import './Cart.css';
import Form from '../form/Form';

const Cart = () => {

    const {cart, clearCart, getTotalPriceCart,deleteElementById} = useContext(CartContext)

    const [buy, setBuy] = useState (false)

    if (cart.length < 1) {
      return <h2>No hay Objetos en el Carrito</h2>
    } else {
  return (

    <div>
      <div className='cart-box'>
        {
          cart.map(item=>(
            <div>
              <h2 key={item.id}>{item.name}</h2>
              <img src={item.img} alt="" />
              <p>Usted quiere comprar: {item.quantity} {item.name}</p>
              <p>El precio por unidad es {item.price}</p>
              <p>Su precio total es {item.price * item.quantity}</p>
              <button onClick={()=>deleteElementById(item.id)}>Quitar</button>
            </div>
          ))
        }
      </div>
      <h3>Precio total por todo es: {getTotalPriceCart()}</h3>
      {
        buy? (<Form/>
        ):(
          <div>
          <button onClick={()=>setBuy(true)}>Comprar</button>
          <button onClick={()=>clearCart()}>Eliminar Carrito  </button>
          </div>
        )
      }

    </div>
    

  )
}}

export default Cart