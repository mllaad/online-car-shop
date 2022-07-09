import {useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom'

import Button from '../button/button.component'

import './cart-dropdown.styles.scss'

const CartDropDown = () => {
    const cartItems = useSelector(state => state.cart.cartItems)
    const navigate = useNavigate()
return (
    <div className='cart-dropdown-container'>
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