import { createContext, useState } from 'react';


// import reducer from './store/reducer';
// import { FORM_ACTIONS } from './store/actions';

export const FormContext = createContext({});

const FormContextProvider = ({ children }:any) => {
    const [step, setStep] = useState<number>(1); //el paso inicial es el 1
    const [temp, setTemp] = useState('');

    const goNextStep = () => {
        setStep(step + 1);
    }
    const goPreviousStep = (step:number) => {
        setStep(step - 1);
    }
   
    const saveUserName = (userName:string) => {
        setTemp(userName)
        console.log(temp);
        // goNextStep();
    } //de momento lo guardo en un state pero tengo que guardarlo en la base de datos

    return (
        <FormContext.Provider value={{
            step,
            setStep,
            goPreviousStep,
            goNextStep, 
            saveUserName
        }}>
            {children}
        </FormContext.Provider>
        );
};
    
    export default FormContextProvider;