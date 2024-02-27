import { Link } from 'react-router-dom'
import styled from 'styled-components'
import LogoWhite from '../../assets/logo-white.png'
import colors from '../../utils/style/colors'

const HomeLogo = styled.img`
  height: 40px;
  padding-top:66px;
`

const NavContainer = styled.nav`
  text-align:center;
  background-color: ${colors.primary};
  margin-top:50px;
`
const CopyRight = styled.p`
  padding: 30px;
  align-items: center;
  color: white;
  margin:0;
`

function Footer() {

  return (
    <NavContainer>
      <Link to="/">
        <HomeLogo src={LogoWhite} />
      </Link>
      <div>
        <CopyRight>© 2020 Kasa. All rights reserved</CopyRight>
      </div>
    </NavContainer>
  )
}

export default Footer