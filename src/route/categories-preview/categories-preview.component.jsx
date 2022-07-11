import { useSelector } from 'react-redux';

import CategoryPreview from '../../component/category-preview/category-preview.component';

import './categories-preview.styles.scss'

const CategoriesPreview = () => {
    const productsCar = useSelector(state => state.data.productsCar)
    return (
            <div className='container-categoriespreview'>
            {Object.keys(productsCar).map((keyObject)=>{
                const product = productsCar[keyObject]
                return  <CategoryPreview key={keyObject}  products={product} ></CategoryPreview>     
            })}
            </div>   
    )
}
export default CategoriesPreview;  