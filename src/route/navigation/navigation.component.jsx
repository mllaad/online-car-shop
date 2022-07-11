import { Fragment } from 'react';
import {useSelector} from 'react-redux'
import {Outlet} from 'react-router-dom'

import { ReactComponent as Carlogo } from '../../assets/carlogo.svg';

import ShoppingCart from '../../component/shopping-cart/shopping-cart.component';
import CartDropDown from '../../component/cart-dropdown/cart-dropdown.component';

import { 
    NavigationContainer, 
    LogoContainer, 
    Logo,
    NavLinks,
    NavLink,
    
} from './navigation.styles'

const Navigaiton = () => {
    const toggleCart = useSelector(state => state.cart.isCartOpen)
    return(
        <Fragment>
            <NavigationContainer>
                <LogoContainer to='/'>
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
                        CHECKOUT
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