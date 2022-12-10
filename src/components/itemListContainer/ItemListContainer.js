import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'

import { products } from '../../productsMock'
import ProductsCard from '../productsCard/ProductsCard'

const ItemListContainer = () => {

  const {categoryNumber} = useParams()
  console.log(categoryNumber)

  const [item, setItem] = useState([])

  useEffect(()=>{

    const productFiltered = products.filter(producto=> producto.category === parseInt(categoryNumber))

    const task = new Promise((resolve, reject) => {
      resolve(categoryNumber? productFiltered : products)
    })
    task
    .then((res)=>{setItem(res)})
    .catch((err)=>console.log("se rechazo"))

  }, [categoryNumber])

  
  
  return (
    <div className='flex__div'>
      {
        item.map((element)=>{
          return (
            <ProductsCard element={element} key={element.name}/>
          ) 
        })
      }
    </div>
  )
  
}

/* console.log(products) */

export default ItemListContainer