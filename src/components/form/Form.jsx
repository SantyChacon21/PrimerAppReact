import { addDoc, collection, doc, serverTimestamp, updateDoc } from 'firebase/firestore'
import React from 'react'
import { useState } from 'react'
import { db } from '../../firebaseConfig'


const Form = ( {cart, getTotalPriceCart,setOrderId, clearCart} ) => {

  const [userData, setUserData] = useState({name:"", lastName:""})

  const total = getTotalPriceCart()

  const handleSubmit = ( event )=>{

    event.preventDefault()

    const order = {
      buyer: userData,
      items: cart,
      total: total,
      date: serverTimestamp()
    }

    const orderCollection = collection (db, "orders")
    addDoc(orderCollection, order)
    .then(res=> setOrderId(res.id))
    
    cart.map(product=>{
      updateDoc(doc(db,"products",product.id),{stock: product.stock - product.quantity})
    })

    clearCart()
  }


  return (
    <div>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder='Ingrese su nombre' value={userData.name} name='name' onChange={(event)=> setUserData({...userData, name:event.target.value})} />
          <input type="text" placeholder='Ingrese su telefono' value={userData.phoneNumber} name='phoneNumber' onChange={(event)=> setUserData({...userData, lastName:event.target.value})} />
          <input type="text" placeholder='Ingrese su email' value={userData.email} name='email' onChange={(event)=> setUserData({...userData, email:event.target.value})} />
          <button type="submit">Enviar Datos</button>
        </form>
    </div>
  )
}

export default Form