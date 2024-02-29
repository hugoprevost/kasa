import { Link, NavLink } from 'react-router-dom'
import '../../utils/style/header.scss'
import Logo from '../../assets/logo.png'


 
function Header() {
    return (
        <nav className='header'>
            <Link to="/">
                <img src={Logo} alt="Open this collapse" className='header__logo'/>
            </Link>
            <div>
                <NavLink className={({isActive}) => {return isActive ? " header__link header__active--link" : "header__link"}} to="/">Accueil</NavLink>
                <NavLink className={({isActive}) => {return isActive ? " header__link header__active--link" : "header__link"}} to="/apropos">A propos</NavLink>
            </div>
        </nav>
    )
}

export default Header

