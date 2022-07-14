import { useDispatch } from 'react-redux';
import {useNavigate}  from 'react-router-dom'

import Button from "../button/button.component";

import { addcart } from '../../features-redux/cart/cart';

import './swiper-detail.styles.scss'

const SwiperDetail = ({product}) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {img, Color, CarModel, ModelYear, Price} = product.items[2]
    const param = {
        name: product.title,
        model:product.items[2].CarModel,
    }
    return(
        <div className='swiperdetail-container'>
            <img  className="swiperdetail-img" src={img} alt=''/>
            <div className="swiperdetail-content">
                <h1>{product.title}</h1>
                <div>
                    <p>Car Model : {CarModel}</p>
                    <p>Color : {Color}</p>
                    <p>Model Year : {ModelYear}</p>
                    <p>Price : ${Price}</p>
                </div>
            </div>  
            <Button className='swiper-button-1' onClick={()=>dispatch(addcart(product.items[2]))} buttonType='darkblueInvert'>buy now</Button>
            <Button className='swiper-button-2' onClick={()=>{navigate(`shop/go/${param.name}<&>${param.model}`)}} buttonType='darkblueInvert'>more detail</Button> 
        </div>
    )
}
export default SwiperDetail

