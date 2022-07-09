import {useNavigate} from 'react-router-dom'

import './home-category.styles.scss'

const HomeCategory = ({product}) => {
const navitage = useNavigate()
    return(
        <div className='homecategory-container' onClick={()=>{navitage(`shop/${product.title}`)}}>
            <div className='homecategory-img' 
            style={{backgroundImage:`url(${product.items[2].img})`}}/> 
            <div className='homecategory-detail'>
            <p className='homecategory-detail-p'>{product.title.toUpperCase()}</p>
            </div>
        </div>
    )
}
export default HomeCategory;