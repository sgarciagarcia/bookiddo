import { useContext } from 'react';

import './App.css';
import { Context } from './Context';
import WelcomeForm from './components/WelcomeForm';


function App() {
  // const { isLoggedIn, handleLogin } = useContext(Context);
  // if (!isLoggedIn) return <LoginButton onClick={handleLogin} />;
  return (
  <WelcomeForm/>
  );
}

export default App;
