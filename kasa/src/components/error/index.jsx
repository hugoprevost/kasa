import { Link } from 'react-router-dom'
import '../../utils/style/404.css'

function Error() {
    return (
        <div className='erreur'>
            <p className='erreur-404'>404</p>
            <p className='erreur-text'>Oups! La page que vous demandez n'existe pas.</p>
            <Link to="/" className='erreur-link'>
                Retourner sur la page d’accueil
            </Link>
        </div>
    )
}
 
export default Error