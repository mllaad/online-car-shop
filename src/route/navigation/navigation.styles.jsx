import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {ReactComponent as Carlogo} from '../../assets/carlogo.svg'

export const NavigationSpace = styled.div`
width: 100%;
height: 92px;
`
export const NavigationContainer = styled.div`
position:fixed;
top:0px;
background-color: rgb(255, 255, 255);
width: 100%;
height: 90px;
display: flex;
justify-content: space-between;
align-items: center;
z-index: 10;
`
export const LogoContainer = styled(Link)`
margin-left: 10px;
`
export const LogoTitle = styled.div`
font-family: 'Staatliches';
color: black;
position: absolute;
top: 30px;
left: 180px;
font-size: 20px;
`
export const Logo = styled(Carlogo)`
margin-left:70px;
height: 90px;
width: 90px;
`
export const NavLinks = styled.div`
display:flex;
margin-right: 50px;
`

export const NavLink = styled(Link)`
text-decoration: none;
text-transform: uppercase;
padding: 10px;
margin-left: 10px;
font-size: 20px;
`