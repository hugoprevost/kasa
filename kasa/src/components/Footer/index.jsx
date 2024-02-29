import { Link } from 'react-router-dom'
import LogoWhite from '../../assets/logo-white.png'
import "../../utils/style/footer.scss"

function Footer() {

  return (
    <nav className='footer__nav'>
      <Link to="/">
        <img className='footer__logo' src={LogoWhite} alt='Logo Kasa' />
      </Link>
      <div>
        <p className='footer__description'>© 2020 Kasa. All rights reserved</p>
      </div>
    </nav>
  )
}

export default Footer