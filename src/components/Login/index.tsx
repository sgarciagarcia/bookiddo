import { useContext } from 'react';

import '../../styles/fonts.scss';
import '../../styles/buttons.scss';
import '../../styles/spacing.scss';
import './style.scss';

import logo from '../../images/loader.gif'
import { FormContext } from '../../FormContext'

const Menu = () => {
    const {handleLogin}:any = useContext(FormContext);

    return (
        <div className="h100 wrapper">
            <picture><img src={logo} alt="Bookiddo logo"/></picture>
            <h1 className="txt-white">bookiddo</h1>
            <h2 className="cursive txt-white">Read to grow up!</h2>
            <div className="divider">
            <button className="centered-button third-button" onClick={handleLogin}> Sign in with Google </button> 
            </div>
        </div>
)
  }
  
  export default Menu
  
