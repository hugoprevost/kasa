import { Link, NavLink } from 'react-router-dom'
import styled from 'styled-components'
import '../../utils/style/header.css'
import Logo from '../../assets/logo.png'

const HomeLogo = styled.img`
  height: 68px;
`

const NavContainer = styled.nav`
  padding: 45px 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
 
function Header() {
    return (
        <NavContainer>
            <Link to="/">
                <HomeLogo src={Logo} />
            </Link>
            <div>
                <NavLink className={({isActive}) => {return isActive ? " link active-link" : "link"}} to="/">Accueil</NavLink>
                <NavLink className={({isActive}) => {return isActive ? " link active-link" : "link"}} to="/apropos">A propos</NavLink>
            </div>
        </NavContainer>
    )
}

export default Header

