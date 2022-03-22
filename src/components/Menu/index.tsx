import { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import '../../styles/fonts.scss';
import '../../styles/buttons.scss';
import '../../styles/spacing.scss';
import './style.scss';

import home from '../../images/home.png';
import fav from '../../images/fav.png';
import account from '../../images/account.png';

const Menu = () => {
  const [supportsPWA, setSupportsPWA] = useState(false);
    const [promptInstall, setPromptInstall]:any = useState(null);
  
    useEffect (()=>{
      const installEventHandler = (e:any) => {
      e.preventDefault();
      setSupportsPWA(true);
      setPromptInstall(e);
      }
      window.addEventListener('beforeinstallprompt', installEventHandler);
  }, []);
  
  const handleInstall= () => {
      if (promptInstall) {
      promptInstall.prompt();
      }
  };
    
    return (
      <>
       {supportsPWA && (<div className="banner"><p>Have you heard? You can now download our app!</p>
       <button className="secondary-button" onClick={handleInstall}> Install app</button></div>)}       
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
      </>
    )
  }
  
  export default Menu