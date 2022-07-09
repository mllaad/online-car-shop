import { Fragment } from 'react';
import {useSelector} from 'react-redux'
import {Outlet} from 'react-router-dom'

import { ReactComponent as Carlogo } from '../../assets/carlogo.svg';

import ShoppingCart from '../../component/shopping-cart/shopping-cart.component';
import CartDropDown from '../../component/cart-dropdown/cart-dropdown.component';

import {
    NavigationSpace, 
    NavigationContainer, 
    LogoContainer, 
    LogoTitle,
    Logo,
    NavLinks,
    NavLink,
    
} from './navigation.styles'

const Navigaiton = () => {
    const toggleCart = useSelector(state => state.cart.isCartOpen)
    return(
        <Fragment>
            <NavigationSpace/> {/*bring back navigation height */}
            <NavigationContainer>
                <LogoContainer to='/'>
                    <LogoTitle>online car shop</LogoTitle>
                    <Logo><Carlogo/></Logo>               
                </LogoContainer>
                <NavLinks>
                    <NavLink to='/'>
                        HOME
                    </NavLink>
                    <NavLink to='/shop'>
                        SHOP
                    </NavLink>
                    <NavLink to='/checkout'>
                        CART
                    </NavLink>
                    <ShoppingCart/>
                    {toggleCart && <CartDropDown/>}
                </NavLinks>
            </NavigationContainer>
            <Outlet/>
        </Fragment>
    )
}
export default Navigaiton;