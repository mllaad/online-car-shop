import { useSelector } from 'react-redux/es/exports'

import CheckoutItem from '../../component/checkout-item/checkout-item.component'

import './checkout.styles.scss'

const Checkout = () => {
    const cart = useSelector(state => {
        const totalPrice = state.cart.cartItems.reduce(
            (total, cartItem)=>  total + cartItem.quantity * cartItem.Price,0
        )
        return {
            totalPrice: totalPrice,
            cartItems: state.cart.cartItems,
        }
    })
    return (
        <div className='checkout-container'>
            <div className='checkout-titles'>
                <div className='titles-items'>
                    <div className='titles-items-car'>car</div>
                    <div>model</div>
                    <div>quantitiy</div>
                    <div>price</div>
                    <div>remove</div>
                </div>
                <div className='checkout-titles-line'/> 
            </div>
            {cart.cartItems.map((items, key)=> (
                <CheckoutItem key={key} items={items}/>
            ))}
            <div className='total'>TOTAL PRICE: ${cart.totalPrice}</div>
        </div>
    )
}
export default Checkout