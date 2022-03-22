import {Link} from 'react-router-dom';
import '../../styles/fonts.scss';
import '../../styles/buttons.scss';
import '../../styles/spacing.scss';
import './style.scss';

import home from '../../images/home.png';
import fav from '../../images/fav.png';
import account from '../../images/account.png';

const Menu = () => {
    
    return (
      <div className="menu-wrapper">
        <ul>
            <Link to={`/`}>
                <li><img src={home} alt='Home' /></li>
            </Link>
            <Link to={`/favorites`}>
            <li><img src={fav} alt='Fav' /></li>
            </Link>
            <Link to={`/account`}>
            <li><img src={account} alt='Account' /></li> 
            </Link>
        </ul>
      
      </div>
    )
  }
  
  export default Menu