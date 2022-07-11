import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {ReactComponent as Carlogo} from '../../assets/carlogo.svg'

export const NavigationContainer = styled.div`
position:fixed;
top:0px;
width: 100%;
background-color: rgb(255, 255, 255);
margin: auto;
height: 60px;
display: flex;
justify-content: space-between;
align-items: center;
z-index: 100;
`
export const LogoContainer = styled(Link)`
margin-left: 10px;
`
export const Logo = styled(Carlogo)`
margin-left:20px;
height: 90px;
width: 90px;
`
export const NavLinks = styled.div`
display:flex;
margin-right:10px;
`

export const NavLink = styled(Link)`
text-decoration: none;
text-transform: uppercase;
padding: 10px;
margin-right: 40px;
font-size: 20px; 
&:hover,
  &:focus {
    border-radius: 4px;
    background-color:#7bad49;
    color: white;
  }
  &:active {
    color: white;
  }
`