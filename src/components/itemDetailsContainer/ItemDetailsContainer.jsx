import React, {useState, useEffect} from 'react'
import { products } from '../../productsMock'
import { useParams } from 'react-router-dom'


const ItemDetailsContainer = () => {

    const [product, setProduct] = useState({})

    const {id} = useParams()
    console.log(id)

    useEffect(()=>{
        const productSeleccionado = products.find( producto => producto.id === parseInt(id))
        setProduct(productSeleccionado)
    }, [id])

  return (
    <h1>{product.name}</h1>
  )
}

export default ItemDetailsContainer