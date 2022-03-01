import { createContext, useEffect, useState } from 'react';
import { getDatabase, ref, update, child, get } from "firebase/database";
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';


// import reducer from './store/reducer';
// import { FORM_ACTIONS } from './store/actions';

export const FormContext = createContext({});

const FormContextProvider = ({ children }:any) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [step, setStep] = useState<number>(1); //el paso inicial es el 1
    const [userName, setUserName] = useState<string>('');

 

    const goNextStep = () => {
        setStep(step + 1);
    }
    const goPreviousStep = (step:number) => {
        setStep(step - 1);
    }

   //Guardar en database
    const storeInDatabase = (userId:number) => {
        const db = getDatabase();
        set(ref(db, `users/${userId}`), {username: userName});
      };

   //Leer database
   const getFromDatabase = async() => {
    const dbRef = ref(getDatabase());
    const dbSnapshot = await get(child(dbRef, `users/${userId}`))
    if (dbSnapshot.exists()) { //si este user existe en la bbdd muestra sus valores
        console.log(dbSnapshot.val());
      } else {
        console.log("No data available");
      }
   };

   //se lanza al pulsar el botón login con google
   const handleLogin = () => {
    const provider = new GoogleAuthProvider();
        const auth = getAuth();
        signInWithPopup(auth, provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            // ...
        })
   };

   if (!isLoggedIn) return <button onClick={handleLogin}> Login </button>
    return (
        <FormContext.Provider value={{
            step,
            setStep,
            goPreviousStep,
            goNextStep, 
            setUserName,
            userName
        }}>
            {children}
        </FormContext.Provider>
        );
};
    
    export default FormContextProvider;