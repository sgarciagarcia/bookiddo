import { useContext, useEffect } from "react";

import { FormContext } from '../FormContext';
import Header from "../components/Header";
import Menu from "../components/Menu";
import AccountData from "../components/AccountData";

const Account = () => {

    
    return(
        <>
        <Header/>
        <AccountData/>
        <Menu/>   
        </>
    )
   
}
export default Account