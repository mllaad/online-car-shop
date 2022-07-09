
import { useSelector, useDispatch } from 'react-redux';
import {useNavigate}  from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Navigation, EffectFade, } from "swiper";
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'

import './home-swiper.styles.scss'

import SwiperDetail from './../../component/swiper-detail/swiper-detail.component'
import Button from "../button/button.component";
import { addcart } from '../../features-redux/cart/cart';
const HomeSwiper = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const productsCar = useSelector(state => state.data.productsCar)
    return (
        <div className="swiper">
            <Swiper
            modules={[Navigation, EffectFade,]}
            navigation 
            effect= {'fade'}
            speed={800}
            loop
            className='swiper-field'
            >
            {productsCar.map((product)=> {
                const param = {
                    name: product.title,
                    model:product.items[2].CarModel,
                }
            return (
                    <SwiperSlide key={product.id}>
                    <div>
                    <SwiperDetail product={product} />
                        <div className="button-swiper-container">
                            <Button onClick={()=>dispatch(addcart(product.items[2]))} buttonType='darkblueInvert'>buy now</Button>
                            <Button onClick={()=>{navigate(`shop/go/${param.name}<&>${param.model}`)}} buttonType='darkblueInvert'>more detail</Button> 
                        </div>
                    </div>     
                    </SwiperSlide> 
                        )})}
            </Swiper>
        </div>
    )
}

export default HomeSwiper;




