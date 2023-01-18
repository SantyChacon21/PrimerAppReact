import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../itemDetail/ItemDetail'
import {getDoc, collection, doc} from "firebase/firestore"
import { db } from '../../firebaseConfig'


const ItemDetailsContainer = () => {

    const [product, setProduct] = useState({})

    const {id} = useParams()

    useEffect(()=>{

        const itemCollection = collection(db, "products")
        const ref = doc(itemCollection, id)

        getDoc(ref)
        .then(res =>{
          setProduct({
            id: res.id,
            ...res.data()
          })
        })
    }, [id])

  return (
    <div>
      <ItemDetail product={product}/>
    </div>
    
  )
}

export default ItemDetailsContainer