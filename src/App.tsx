import { useContext } from 'react';
import { Routes, Route } from 'react-router';
import './App.css';
import WelcomeForm from './components/WelcomeForm';
import Home from './components/Home';
import BookCard from './components/BookCard';
import { FormContext } from '././FormContext';


function App() {
  const { isLoggedIn, handleLogin, isRegistering }:any = useContext(FormContext);

  if (!isLoggedIn) return <button onClick={handleLogin}> Sign in with Google </button> //si no está logueado se muestra el botón login
  // if (isLoading) return <Loading /> 
  else if (isRegistering) return <WelcomeForm />
    return (
     <Routes>
       <Route path='/' element={<Home />} />
       <Route path='/bookCards/:isbn' element={<BookCard/>} />
     </Routes>
    );
   }

export default App;
