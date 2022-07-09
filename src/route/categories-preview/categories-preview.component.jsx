import { Fragment } from 'react';
import { useSelector } from 'react-redux';

import CategoryPreview from '../../component/category-preview/category-preview.component';

const CategoriesPreview = () => {
    const productsCar = useSelector(state => state.data.productsCar)
    return (
        <Fragment>
            {Object.keys(productsCar).map((keyObject)=>{
                const product = productsCar[keyObject]
                return <CategoryPreview key={keyObject}  products={product} ></CategoryPreview>
            })}
        </Fragment>
    )
}
export default CategoriesPreview;  