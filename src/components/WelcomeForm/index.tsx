import { useContext } from "react";

import { FormContext } from '../../FormContext'

import StepOne from "../StepOne";
import StepTwo from "../StepTwo";
import StepThree from "../StepThree";
import StepFour from "../StepFour";



const WelcomeForm = () =>{
    
    const {step}:any = useContext(FormContext);
    
    
    return (
        <>
        {/* Progress bar
        Step Content
        Botón next
        Botón back */}
        {step === 1 && <StepOne />}
        {step === 2 && <StepTwo/> } 
        {step === 3 && <StepThree/>}
        {step === 4 &&<StepFour/>} 
        
       

         </>
    )
}

export default WelcomeForm;