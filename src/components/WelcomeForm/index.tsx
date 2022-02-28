import { useState } from "react";

import StepTwo from "../StepTwo";
import StepOne from "../StepOne";

type WelcomeFormProps= {
    step: number;
}

const WelcomeForm = () =>{
    const [step, setStep] = useState(1); //el paso inicial es el 1

     const goNextStep = () => {
        setStep(step => step + 1);
    }
    return (
        <>
        {/* Progress bar
        Step Content
        Botón next
        Botón back */}
        {/* {step === 1 && <StepOne/>}
        {step === 2 && <StepTwo/>} */}
        {/* {step === 3 && <StepThree/>}
        {step === 4 && <StepFour/>} */}
        <p>Hola soy el form</p>
        <button onClick={() => goNextStep()}>Next!</button>
         </>
    )
}

export default WelcomeForm;