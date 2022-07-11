import {useParams} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import './topcar-detail.styles.scss'
import { addcart } from '../../features-redux/cart/cart'
import { Fragment } from 'react'

const TopcarDetail = () => { 
    const dispatch = useDispatch()
    const {topcar} = useParams()
    const [name,model] = topcar.split('<&>')
    const productCar = useSelector(state => state.data.productsCar)
    const [products] = productCar.filter(product=> product.title === name)
    const [product] = products.items.filter(product => product.CarModel === model)
    // DATA
    const carProduct = {
        carName : products.title,
        carModel : product.CarModel,
        color : product.Color,
        img: product.img,
        price: product.Price,
        modelYear: product.ModelYear,
        description: product.Description,
        comments: product.comments
    }
    return (
            <Fragment>
            <div className='section1-title'>    {/* css is from  home.styles.scss */}
                <h1 className='section1-title-h1'> {/*  css is from  home.styles.scss */}
                    ONLINE CAR SHOP
                </h1>
            </div>
            <div className='topcar-detail-container'> 
             <div className='topcar-dettail-container2'>
                <div className='topcar-detail-topic'>
                    <h1>{carProduct.carName} {carProduct.carModel} {carProduct.color}</h1>
                    <h2>{carProduct.modelYear}</h2>
                    <h3>${carProduct.price}</h3>    
                </div>
                <div className='topcar-detail-img' style={{backgroundImage:`url(${carProduct.img})`}}/>
                <button className='topcar-detail-button' onClick={()=>{dispatch(addcart(product))}}>BUY NOW</button>
                <p className='topcar-detail-description'><span className='detail-description-bold'>Desctiption:</span>{carProduct.description}</p>
                <div className='detail-comment-container'>
                    <h4 className='comment-container-title'>users Comments</h4>
                {carProduct.comments.map((userComments, key)=>{
                    const {comment, avatar} = userComments
                    return (
                        <div  key={key} className='comment-user-container'>
                            <img src={avatar} alt="user" />
                            <span className='comment-user-note'>{comment}</span>
                        </div>
                    )
                })}
            </div>
            </div>
        </div>
        </Fragment>
    )
}
export default TopcarDetail