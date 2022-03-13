import { useContext } from 'react';
import { Routes, Route } from 'react-router';
import './App.css';

import Loading from './components/Loading';
import WelcomeForm from './screens/WelcomeForm';
import Home from './screens/Home';
import BookPage from './screens/BookPage';
import Favorites from './screens/Favorites';
import Account from './screens/Account';

import { FormContext } from '././FormContext';


function App() {
  const { isLoggedIn, handleLogin, isRegistering, isLoading }:any = useContext(FormContext);

  if (!isLoggedIn) return <button onClick={handleLogin}> Sign in with Google </button> //si no está logueado se muestra el botón login
  if (isLoading) return <Loading /> 
  else if (isRegistering) return <WelcomeForm />
    return (
     <Routes>
       <Route path='/' element={<Home/>} />
        <Route path='/favorites' element={<Favorites/>} />
       <Route path='/account' element={<Account/>} /> 
       <Route path='/bookCards/:isbn' element={<BookPage/>} />
     </Routes>
    );
   }

export default App;
