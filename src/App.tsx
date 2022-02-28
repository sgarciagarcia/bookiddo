import { useContext } from 'react';

import './App.css';
import WelcomeForm from './components/WelcomeForm';
import { FormContext } from '././FormContext';


function App() {
  // const { isLoggedIn, handleLogin } = useContext(Context);
  // if (!isLoggedIn) return <LoginButton onClick={handleLogin} />;
  return (
  <WelcomeForm/>
  );
}

export default App;
