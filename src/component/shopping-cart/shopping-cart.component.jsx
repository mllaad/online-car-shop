import { useSelector, useDispatch} from 'react-redux'
import { ReactComponent as ShoppingLogo } from '../../assets/shopping-cart.svg'

import {toggle} from '../../features-redux/cart/cart'

import './shopping-cart.styles.scss'

const ShoppingCart = () => {
    const dispatch = useDispatch()
    const cartCount = useSelector((state) => (
        state.cart.cartItems.reduce((total, cartItem) => total + cartItem.quantity,0)
    ))
    return <div className='shopping-logo-container' >
            <ShoppingLogo className='shopping-icon' onClick={()=>{dispatch(toggle())}}/>
            <span className='item-count'>{cartCount}</span>
           </div>
}
export default ShoppingCart;
