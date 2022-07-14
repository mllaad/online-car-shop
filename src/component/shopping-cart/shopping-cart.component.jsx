import { useSelector, useDispatch} from 'react-redux'
import { ReactComponent as ShoppingLogo } from '../../assets/shopping-cart.svg'
import { ReactComponent as ModalArrow } from '../../assets/arrow.svg'

import {toggle} from '../../features-redux/cart/cart'

import './shopping-cart.styles.scss'

const ShoppingCart = () => {
    const dispatch = useDispatch()
    const cartCount = useSelector((state) => (
        state.cart.cartItems.reduce((total, cartItem) => total + cartItem.quantity,0)
    ))
    return <div className='shopping-logo-container'>
            <div className={`modal ${cartCount && 'arrow block'} `}><ModalArrow className='modal-arrow'/></div>
            <ShoppingLogo className={`shopping-icon ${cartCount && 'shake'}`}  onClick={()=>{dispatch(toggle())}}/>
            <span className='item-count'>{cartCount}</span>
           </div>
}
export default ShoppingCart;
