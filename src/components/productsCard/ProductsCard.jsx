import React from "react"
import './ProductsCard.css'
import { Link } from "react-router-dom"

const ProductsCard = ({element}) => {
  return (
    <Link to={`/item/${element.id}`} className="link" > 
      <div className="card__div">
        <h2 className="title__car">{element.name}</h2>
        <img src={element.img} alt="" className="img__car"/>
        <h3 className="description__car">{element.description}</h3>
        <h4 className="car__price">U$D{element.price}</h4>
      </div>
    </Link>
  )
}

export default ProductsCard