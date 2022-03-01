import { useContext } from 'react';

import './App.css';
import WelcomeForm from './components/WelcomeForm';
import { FormContext } from '././FormContext';


function App() {
  const { isLoggedIn, handleLogin }:any = useContext(FormContext);
  if (!isLoggedIn) return <button onClick={handleLogin}> Login </button> //si no está logueado se muestra el botón login
  return (
  <WelcomeForm/>
  );
}

export default App;
