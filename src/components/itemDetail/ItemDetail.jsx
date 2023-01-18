import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import ItemCount from '../itemCount/ItemCount'


const ItemDetail = ({product}) => {

    
    const { addToCart, getQuantityById } = useContext(CartContext)

    const onAdd = (quantity) =>{
            addToCart({
                ...product,
                quantity: quantity
            })
        }

        const quantity = getQuantityById(product.id)
  return (
    <div>
      <div>
        <h2>{product.name}</h2>
        <img src={product.img} alt="" />
        <h5>{product.description}</h5>
      </div>
      <ItemCount onAdd={onAdd} stock={product.stock}  initial={quantity} />
    </div>
  )
}

export default ItemDetail