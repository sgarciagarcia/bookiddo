import {Link} from 'react-router-dom';

import home from '../../images/home.png';
import fav from '../../images/fav.png';
import account from '../../images/account.png';

const Menu = () => {
    
    return (
      <div>
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