import { Link, NavLink } from 'react-router-dom'
import '../../utils/style/header.scss'
import Logo from '../../assets/logo.png'


 
function Header() {
    return (
        <nav className='navContainer'>
            <Link to="/">
                <img src={Logo} alt="Open this collapse" className='header-logo'/>
            </Link>
            <div>
                <NavLink className={({isActive}) => {return isActive ? " link active-link" : "link"}} to="/">Accueil</NavLink>
                <NavLink className={({isActive}) => {return isActive ? " link active-link" : "link"}} to="/apropos">A propos</NavLink>
            </div>
        </nav>
    )
}

export default Header

