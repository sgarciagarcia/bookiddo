import { createContext, useEffect, useState } from 'react';
import { getDatabase, ref, update, child, get, set } from "firebase/database";
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { resourceLimits } from 'worker_threads';


// import reducer from './store/reducer';
// import { FORM_ACTIONS } from './store/actions';
import { getLocalStorage, setLocalStorage } from './localStorage';


export const FormContext = createContext({});

const FormContextProvider = ({ children }:any) => {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    const [isRegistering, setIsRegistering] = useState<boolean>(false);

    const [step, setStep] = useState<number>(1); //el paso inicial es el 1
    type kidDataProps = {
        kidName: string,
        kidAge: number,
        selectedTopics: String[]
    }
    const [kidData, setKidData] = useState<kidDataProps>({
        kidName:'',
        kidAge:1,
        selectedTopics: []
    }); //los datos del niño que mete el usuario en welcome form

    //Context Books Data
type booksProps = [{
    isbn:number,
    title:string,
    author:string,
    cover:string,
    description:string,
    age_group?:string,
    amazon:string,
    publisher:string,
    subject:String[],
    price:string,
}]
  const [booksData, setBooksData] = useState<booksProps>([{
    isbn:0,
    description:'',
    age_group:'',
    amazon:'',
    title:'',
    author:'',
    cover:'',
    publisher:'',
    subject:[],
    price:''
  }])

    type userDataProps = {
        token: string,
        name: string|null,
        email: string|null,
        userId: string,
    }
    

    useEffect (() => { // Comprobar si el user está registrado en bbdd una vez se ha logueado
       
        const checkIfRegistered = async()=> {
        if (isLoggedIn) { 
            const exists = await getFromDatabase()
            if (exists === null) {setIsRegistering(true)}
        }
       } 
       //Loading true
       checkIfRegistered()
        //Loading false

    }, [isLoggedIn])

    const goNextStep = () => {
        setStep(step + 1);
    }
    const goPreviousStep = (step:number) => {
        setStep(step - 1);
    }

     //Leer database
     const getFromDatabase = async() => {
        const user = getLocalStorage('userOuthData');
        const dbRef = ref(getDatabase());
        const dbSnapshot = await get(child(dbRef, `users/${user.userId}`))
        if (dbSnapshot.exists()) return dbSnapshot;
        return null
    };

    ////Guardar uid + isRegistered
    const registerUser = (dataToCheck:any) => {
        storeInDatabase(dataToCheck, dataToCheck.userId);
    }

 //Guardar  en database
     const storeInDatabase = (dataToStore:any, userId:string) => {
         const db = getDatabase();
        update(ref(db, `users/${userId}`), dataToStore);
      };

      
   //se lanza al pulsar el botón login con google y se guardan datos del usuario en un estado
   const handleLogin = async () => {
        const provider = new GoogleAuthProvider();
        const auth = getAuth();
        const result = await signInWithPopup(auth, provider) as any;
        const dataToStore = {
            token: result.user.accessToken, 
            name: result.user.displayName,
            email:result.user.email,
            userId: result.user.uid
        } 
        setLocalStorage('userOuthData',dataToStore)
        setIsLoggedIn(true)
   };

   





    return (
        <FormContext.Provider value={{
            step,
            setStep,
            goPreviousStep,
            goNextStep, 
            setKidData,
            kidData,
            handleLogin,
            isLoggedIn,
            isRegistering,
            storeInDatabase,
            getFromDatabase,
            setBooksData,
            booksData,
        }}>
            {children}
        </FormContext.Provider>
        );
};
    
    export default FormContextProvider;