import { useRef } from 'react'
import { useSelector, useDispatch} from 'react-redux'
import { ReactComponent as ShoppingLogo } from '../../assets/shopping-cart.svg'
import { ReactComponent as ModalArrow } from '../../assets/arrow.svg'
import {toggle} from '../../features-redux/cart/cart'

import CartDropDown from '../cart-dropdown/cart-dropdown.component'

import './shopping-cart.styles.scss'

const ShoppingCart = () => {
    const logoEl = useRef()
    const dispatch = useDispatch()
    const cartCount = useSelector((state) => (
        state.cart.cartItems.reduce((total, cartItem) => total + cartItem.quantity,0)
    ))
    return <div className='shopping-logo-container'>
            <div className={`modal ${cartCount && 'arrow block'} `}><ModalArrow className='modal-arrow'/></div>
            <ShoppingLogo ref={logoEl} className={`shopping-icon ${cartCount && 'shake'}`}  onClick={()=>{dispatch(toggle())}}/>
            <span className='item-count'>{cartCount}</span>
            <CartDropDown logoEl={logoEl}/>
           </div>
}
export default ShoppingCart;
