import { useContext, useEffect, useState } from 'react';

import '../../styles/fonts.scss';
import '../../styles/buttons.scss';
import '../../styles/spacing.scss';
import './style.scss';

import logo from '../../images/loader.gif'
import { FormContext } from '../../FormContext'

const Menu = () => {
    const [supportsPWA, setSupportsPWA] = useState(false);
    const [promptInstall, setPromptInstall]:any = useState(null);
    const {handleLogin}:any = useContext(FormContext);

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
        <div className="h100 wrapper centered">
            <picture><img src={logo} alt="Bookiddo logo"/></picture>
            <h1 className="txt-white">bookiddo</h1>
            <h2 className="cursive txt-white">Read to grow up!</h2>
            <div className="divider">
            <button className="centered-button third-button" onClick={handleLogin}> Sign in with Google </button> 
           
            </div>
            {supportsPWA && ( <div className="banner sticky"><span>Have you heard? You can now download our app!</span>
            <button className="secondary-button" onClick={handleInstall}> Install app</button></div>)}     
        </div>
        
)
  }
  
  export default Menu
  
