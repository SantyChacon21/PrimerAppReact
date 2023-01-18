import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'

import ProductsCard from '../productsCard/ProductsCard'
import {getDocs, collection, query, where} from "firebase/firestore" 
import { db } from '../../firebaseConfig'

const ItemListContainer = () => {

  const {categoryNumber} = useParams()

  const [item, setItem] = useState([])

  useEffect(()=>{

  const itemColletion = collection (db, "products")

  if (categoryNumber) {

    const q = query(itemColletion, where( "category","==", categoryNumber ))
    getDocs(q)
  .then((res)=>{
    const products = res.docs.map(product =>{
      return{
        id: product.id,
        ...product.data()
      }
    })
    setItem(products)
    console.log(q)
  })
  .catch((err)=>console.log(err))
  }else{
    getDocs(itemColletion)
    .then((res)=>{
      const products = res.docs.map(product =>{
        return{
          id: product.id,
          ...product.data()
        }
      })
      setItem(products)
    })
    .catch((err)=>console.log(err))
  }

  

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


export default ItemListContainer