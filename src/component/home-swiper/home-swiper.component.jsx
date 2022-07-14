
import { useSelector } from 'react-redux';

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Navigation, EffectFade, } from "swiper";
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'

import SwiperDetail from './../../component/swiper-detail/swiper-detail.component'

import './home-swiper.styles.scss'

const HomeSwiper = () => {
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
            {productsCar.map((product, key)=> ((
                    <SwiperSlide key={key}>
                        <SwiperDetail product={product}/>
                    </SwiperSlide>     
                     )))}
            </Swiper>
        </div>
    )
}

export default HomeSwiper;




