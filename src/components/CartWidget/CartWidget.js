import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const CartWidget = () => {
  return (
    
    <Link to='/cart'>
      <div className=' d-flex'>
        <FontAwesomeIcon icon={faCartShopping} color='white' />
        <div className=' bubble-counter'>
          <span>2</span>
        </div>
      </div>
    </Link>
  )
}

export default CartWidget