import { useContext } from 'react';
import { Routes, Route } from 'react-router';
import './App.css';
import WelcomeForm from './components/WelcomeForm';
import Home from './components/Home';
import { FormContext } from '././FormContext';


function App() {
  const { isLoggedIn, handleLogin, isRegistering }:any = useContext(FormContext);
  if (!isLoggedIn && !isRegistering) return <button onClick={handleLogin}> Sign in with Google </button> //si no está logueado se muestra el botón login
  // else if (!isLoggedIn && isRegistering) return <WelcomeForm />
  //  return (
    return <WelcomeForm />
    // <Routes>
    //   <Route path='/' element={<Home />} />
    // </Routes>
  //  );
   }

export default App;
