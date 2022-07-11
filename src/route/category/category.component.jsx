import { Fragment } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import PreviewCard from '../../component/preview-card/preview-card.component'

import './category.styles.scss'

const Category = () => {
    const productsCar = useSelector(state => state.data.productsCar)
    const { category } = useParams()
    const [products] = productsCar.filter((product)=> {
        return product.title === category
    })

    return (
        <div className='category-container'>
            <div className='category-title'>{products.title}</div>
            <div className='category-card-container'>
            {products.items.map((product, key)=>{
                const carProdcuts = {
                    name: products.title,
                    model: product.CarModel,
                    color: product.Color,
                    img: product.img,
                    price: product.Price,
                    modelYear: product.ModelYear,
                    description: product.Description,
                    comment: product.comments
                }
// console.log(carProdcuts.comment)// gives me even empty array!!! but*** in line 43!!!!! same variable gives me defrent result!
                
                return(<Fragment key={key}>
                    <PreviewCard product={product} title={products.title}/>
                    <div className='category-comment-container'>
                    <h2 className='comment-container-car'>{carProdcuts.model} {carProdcuts.modelYear}  {carProdcuts.color}</h2>
                    <div className='comment-container-price'>Price:${carProdcuts.price}</div>
                    <div className='comment-container-title'>Comments:</div>
                    {carProdcuts.comment.map((comment, key) => {
// {console.log(carProdcuts.comment)}  // here is same console.log but not showing any empty array!!!
                    return <div className='category-comment' key={key}> {comment.comment}</div>
                     })}
                    </div>
                    </Fragment>)     
            })}
        </div>
        </div>       
    )
}
    export default Category