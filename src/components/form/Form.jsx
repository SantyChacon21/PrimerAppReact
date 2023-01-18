import React from 'react'
import { useState } from 'react'

const Form = () => {

  const [userData, setUserData] = useState({name:"", lastName:""})

  const handleSubmit = ( event )=>{

    event.preventDefault()
    console.log(userData)
  }


  return (
    <div>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder='Ingrese su nombre' value={userData.name} name='name' onChange={(event)=> setUserData({...userData, name:event.target.value})} />
          <input type="text" placeholder='Ingrese su telefono' value={userData.phoneNumber} name='phoneNumber' onChange={(event)=> setUserData({...userData, lastName:event.target.value})} />
          <input type="text" placeholder='Ingrese su email' value={userData.email} name='email' onChange={(event)=> setUserData({...userData, lastName:event.target.value})} />
          <button type="submit">Enviar Datos</button>
        </form>
    </div>
  )
}

export default Form