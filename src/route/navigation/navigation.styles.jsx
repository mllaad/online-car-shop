import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {ReactComponent as Carlogo} from '../../assets/carlogo.svg'

const sizes = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px',
};

const devices = {
  mobileS: `(max-width: ${sizes.mobileS})`,
  mobileM: `(max-width: ${sizes.mobileM})`,
  mobileL: `(max-width: ${sizes.mobileL})`,
  tablet: `(max-width: ${sizes.tablet})`,
  laptop: `(max-width: ${sizes.laptop})`,
  laptopL: `(max-width: ${sizes.laptopL})`,
  desktop: `(max-width: ${sizes.desktop})`,
};

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
@media ${devices.mobileL} {
  height: 40px;
}
`
export const LogoContainer = styled(Link)`
margin-left: 10px;
`
export const Logo = styled(Carlogo)`
margin-left:20px;
height: 90px;
width: 90px;
@media ${devices.mobileL} {
  width: 50px;
  height: 50px;
}
`
export const NavLinks = styled.div`
display:flex;
justify-content: center;
align-items: center;
margin-right:10px;
`

export const NavLink = styled(Link)`
  text-decoration: none;
  text-transform: uppercase;
  padding: 10px;
  margin-right: 40px;
  font-size: 20px;
  color: black;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  @media ${devices.tablet} {
    margin-right: 0px;
    font-size: 15px;
  }
  @media ${devices.mobileS} {
    margin-right: 0px;
    font-size: 10px;
  }
  &:hover,
  &:focus {
    border-radius: 4px;
    background-color: #478f00;
    color: #7fe01f;
  }
  &:active {
    color: #7fe01f;
  }
`;
