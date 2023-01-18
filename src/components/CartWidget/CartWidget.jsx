import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import './CartWidget.css'

const CartWidget = () => {

  const {getTotalQuantity} = useContext(CartContext)

  return (
    
    <Link to='/cart'>
      <div className=' d-flex'>
        <FontAwesomeIcon icon={faCartShopping} color='white' />
        <div>
          <span className='cart-number'>{getTotalQuantity()} </span>
        </div>
      </div>
    </Link>
  )
}

export default CartWidget