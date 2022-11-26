import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

const CartWidget = () => {
  return (
    <a href='./' className=''><div><FontAwesomeIcon icon={faCartShopping} color='white' /></div></a>
  )
}

export default CartWidget