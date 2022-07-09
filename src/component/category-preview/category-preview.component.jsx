import { Link } from 'react-router-dom'
import PreviewCard from '../preview-card/preview-card.component'


import './category-preview.styles.scss'

const CategoryPreview = ({ products }) => {
    const title = products.title
    return (
        <div className='category-preview-container'>
            <h2 className='category-preview-container-title'>
                <Link className='category-preview-container-title' to={title}>{title.toUpperCase()}</Link><br></br>
                <span className='category-preview-container-subtitle'>click and see more from this category</span>
            </h2>    
            <div className='preview'>
            {products.items
                .filter((_, idx) => idx < 4)
                .map((product)=>(
                <PreviewCard key={product.Price} product={product} title={title}/>
            ))}
            </div>
        </div>
    )
}
export default CategoryPreview