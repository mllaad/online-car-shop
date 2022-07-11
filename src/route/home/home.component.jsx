import { Fragment } from 'react';
import { useSelector } from 'react-redux';

import HomeSwiper from '../../component/home-swiper/home-swiper.component';
import HomeCategory from '../../component/home-category/home-category.component';

import './home.styles.scss'

const Home = () => {
const productsCar = useSelector(state => state.data.productsCar)
return (
    <Fragment>
        <div className='section1-title'>
            <h1 className='section1-title-h1'>
                ONLINE CAR SHOP
            </h1>
        </div>
        <div className='home-container'>
            <div className='section1-swiper'>
                <HomeSwiper/>
            </div>
            <div className='section2-title'>
                <h1 className='section2-title-h1'>car category</h1>
                <p className='section2-title-p'>find your favorite car</p>
                <div className='section2-title-line'></div>
            </div>
        <div className='section2-card'>
        {productsCar.map((product)=> <HomeCategory key={product.id} product={product}/>)}
        </div>
    </div>
    </Fragment>
)
}

export default Home;