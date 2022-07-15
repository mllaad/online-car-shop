import { useEffect, useRef } from 'react'
import {useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import Button from '../button/button.component'
import { toggle } from '../../features-redux/cart/cart'

import './cart-dropdown.styles.scss'

const CartDropDown = ({logoEl}) => {

    const cartItems = useSelector(state => state.cart.cartItems)
    const toggleCart = useSelector(state => state.cart.isCartOpen)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const dropdownEl = useRef()
    
    const handleClickOutside = (event) => {
        const domEl = logoEl.current.contains(event.target) || dropdownEl.current.contains(event.target)
        if (toggleCart && !domEl) {
            return dispatch(toggle())
        }
    }
        useEffect(()=> {
        document.addEventListener("mousedown", handleClickOutside)
        return () => document.removeEventListener("mousedown", handleClickOutside)
    },[toggleCart])
    
return (
    <div ref={dropdownEl} className={`cart-dropdown-container ${toggleCart && 'togglecart'}`}>
        <div className='cart-items'>
        {cartItems.map((item, key)=> {
            const {CarModel, Price, ModleYear, img, quantity} = item
            return <div className='empty-message' key={key}>
                <img  className='dropdown-img' src={img} alt={CarModel}/>
                <div className='dropdown-detail'>
                    <p>{CarModel}</p>
                    <p>{ModleYear}</p>
                    <p>Price:${Price} X {quantity}</p>
                </div>
            </div>
        })}            
        </div>
        <Button onClick={()=>navigate('/checkout')}>Go Check Out</Button>
    </div>
)
}
export default CartDropDown