
import './swiper-detail.styles.scss'

const SwiperDetail = ({product}) => {
    const {img, Color, CarModel, ModelYear, Price} = product.items[2]
    return(
        <div className='swiper-detail-container'> 
            <img  className="swiper-slide-img" src={img} alt=''/>
            <div className="swiper-slide-content">
                <h1 className='slide-content-title'>
                    {product.title}
                    <div className='slide-content-title-line'/>
                </h1>
                <div className="slide-content-info">
                    <p>Car Model : {CarModel}</p>
                    <p>Color : {Color}</p>
                    <p>Model Year : {ModelYear}</p>
                    <p>Price : ${Price}</p>
                </div>
                <div className='swiper-detail-container-line'/>
            </div>  
        </div>
    )
}
export default SwiperDetail

