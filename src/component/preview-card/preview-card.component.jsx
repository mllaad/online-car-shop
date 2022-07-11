import { useDispatch } from 'react-redux'
import { addcart } from '../../features-redux/cart/cart'

import Button  from '../button/button.component'

import './preview-card.styles.scss'

const PreviewCard = ({product}) => {
    const dispatch = useDispatch()
    const {CarModel, img } = product
    return (
        <div className='product-card-container'>
        <img src={img} alt={CarModel} />
        <div className='card-container-footer'>
            <div className='container-footer-model'> Model: {CarModel}</div>
        </div>
        <Button name='add to cart' onClick={()=>{dispatch(addcart(product))}}>BUY NOW</Button>
    </div>
    )
}

export default PreviewCard