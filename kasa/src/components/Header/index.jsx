import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { StyledLink } from '../../utils/style/Atoms'
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
                <StyledLink to="/" $isFullLink>Accueil</StyledLink>
                <StyledLink to="/apropos">A propos</StyledLink>
            </div>
        </NavContainer>
    )
}

export default Header