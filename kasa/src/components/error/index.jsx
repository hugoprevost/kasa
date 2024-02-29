import { Link } from 'react-router-dom'
import '../../utils/style/404.scss'

function Error() {
    return (
        <div className='erreur'>
            <p className='erreur__404'>404</p>
            <p className='erreur__text'>Oups! La page que vous demandez n'existe pas.</p>
            <Link to="/" className='erreur__link'>
                Retourner sur la page d’accueil
            </Link>
        </div>
    )
}
 
export default Error