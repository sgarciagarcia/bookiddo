import { useContext } from 'react';

import './style.scss'
import logo from '../../images/loader.gif'
import { FormContext } from '../../FormContext'

const Menu = () => {
    const {handleLogin}:any = useContext(FormContext);

    return (
        <div className="wrapper">
            <picture><img src={logo} alt="Bookiddo logo"/></picture>
            <h1 className="txt-white">bookiddo</h1>
            <h3 className="cursive txt-white">Read to grow up!</h3>
            <div className="divider">
            <button className="centered-button third-button" onClick={handleLogin}> Sign in with Google </button> 
            </div>
        </div>
)
  }
  
  export default Menu
  
