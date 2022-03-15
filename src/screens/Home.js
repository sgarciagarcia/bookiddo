import { useContext } from 'react';

import Recommendations from '../components/Recommendations';
import Header from '../components/Header';
import Menu from '../components/Menu';
import { FormContext } from '../FormContext';


const Home = () => {
    const { handleLogOut } = useContext(FormContext);

    return (
    <>
    <button type="button" onClick={handleLogOut}>Log out</button>
    <Header/>
    <Recommendations/>
    <Menu/>
    </>
    
    )
}
export default Home