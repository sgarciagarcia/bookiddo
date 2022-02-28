import { createContext, useState } from 'react';


// import reducer from './store/reducer';
// import { FORM_ACTIONS } from './store/actions';

export const FormContext = createContext({});

const FormContextProvider = ({ children }:any) => {
    const [step, setStep] = useState<number>(1); //el paso inicial es el 1
    

    const goNextStep = () => {
        setStep(step + 1);
    }
    const goPreviousStep = (step:number) => {
        setStep(step - 1);
    }
   

    return (
        <FormContext.Provider value={{
            step,
            setStep,
            goPreviousStep,
            goNextStep
        }}>
            {children}
        </FormContext.Provider>
        );
};
    
    export default FormContextProvider;