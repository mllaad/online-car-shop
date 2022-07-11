import { useDispatch } from 'react-redux'
import {addcart, removecart, clearcart} from '../../features-redux/cart/cart'

import './checkout-item.styles.scss'
  
const CheckoutItem = ({items}) => {
    const dispatch = useDispatch()      
    return (
        <div className='checkout-items'>
                        <img className='checkout-items-img' src={items.img} alt={items.CarModel} />
                        <span className='checkout-items-name'>{items.CarModel}</span>
                        <div className='checkout-items-quantitiy'>
                            <div className='arrow-car' onClick={()=>dispatch(removecart(items))}>&#10094;</div>
                            <span className='value'>{items.quantity}</span>
                            <div className='arrow-car' onClick={()=>{dispatch(addcart(items))}}>&#10095;</div>
                        </div>
                        <span className='checkout-items-name'>${items.Price}</span>
                        <div className='remove-button' onClick={()=>dispatch(clearcart(items))}>&#10005;</div>
                    </div>
    )
}
export default CheckoutItem