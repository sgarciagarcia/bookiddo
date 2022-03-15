import { createContext, useEffect, useState } from 'react';
import { getDatabase, ref, update, child, get} from "firebase/database";
import { getAuth, signInWithRedirect, GoogleAuthProvider, getRedirectResult } from 'firebase/auth';
import { isExpired } from 'react-jwt';


// import reducer from './store/reducer';
// import { FORM_ACTIONS } from './store/actions';
import { getLocalStorage, setLocalStorage } from './localStorage';


export const FormContext = createContext({});

const FormContextProvider = ({ children }:any) => {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    const [isRegistering, setIsRegistering] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [step, setStep] = useState<number>(1); //el paso inicial es el 1
   
    type userDataProps = {
        token: string,
        name: string,
        email: string,
        userId: string,
        
    }
    const [userLocalData, setUserLocalData] = useState<userDataProps>({
        token: '',
        name: '',
        email: '',
        userId: '',
    });

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
  
  useEffect (() => {
      const checkIsLoggedIn = async () => {
          const auth = getAuth();
          const result = await getRedirectResult(auth) as any;
          if(result){
            const dataToStore = {
                token: result.user.accessToken, 
                name: result.user.displayName,
                email:result.user.email,
                userId: result.user.uid
            } 
            setLocalStorage('userOuthData',dataToStore)
            setIsLoggedIn(true)
          } else {
              const userData = getLocalStorage('userOuthData');
              if(userData) {
                  if (!isExpired(userData.token)){
                    setUserLocalData(userData);
                      setIsLoggedIn(true)
                  }
              }
          }
      }
      checkIsLoggedIn()
  }, [])

    useEffect (() => { // Comprobar si el user está registrado en bbdd una vez se ha logueado
        const checkIfRegistered = async()=> {
        setIsLoading(true)
        if (isLoggedIn) { 
            const exists = await getFromDatabase()
            if (exists === null) {setIsRegistering(true)}
        }
        setIsLoading(false)
       }        
       checkIfRegistered()
    }, [isLoggedIn])



    const goNextStep = () => {
        setStep(step + 1);
    }
    const goPreviousStep = () => {
        setStep(step - 1);
    }

     //Leer database
     const getFromDatabase = async() => {
        const dbRef = ref(getDatabase());
        const dbSnapshot = await get(child(dbRef, `users/${userLocalData.userId}`))
        if (dbSnapshot.exists()) return dbSnapshot;
        return null
    };

    

 //Guardar  en database
     const storeInDatabase = (dataToStore:any, userId:string) => {
         const db = getDatabase();
        update(ref(db, `users/${userId}`), dataToStore);
      };

      
   //se lanza al pulsar el botón login con google y se guardan datos del usuario en un estado
   const handleLogin = async () => {
        const provider = new GoogleAuthProvider();
        const auth = getAuth();
        await signInWithRedirect(auth, provider) as any;
        
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
            isLoading,
            setIsLoading,
            isLoggedIn,
            isRegistering,
            setIsRegistering,
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