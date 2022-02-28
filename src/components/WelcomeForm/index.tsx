import { useState } from "react";

import StepOne from "../StepOne";
import StepTwo from "../StepTwo";
import StepThree from "../StepThree";
import StepFour from "../StepFour";


const WelcomeForm = () =>{
    const [step, setStep] = useState<number>(1); //el paso inicial es el 1
    const next:string = step === 1 ? 'Lets go!'  : step === 3 ? 'Done!': 'Next!' //el textod el botón varía dependiendo del paso

     const goNextStep = () => {
        setStep(step => step + 1);
    }
    const goPreviousStep = () => {
        setStep(step => step - 1);
    }
    return (
        <>
        {/* Progress bar
        Step Content
        Botón next
        Botón back */}
        {step === 1 && <StepOne/>}
        {step === 2 && <StepTwo/> } 
        {step === 3 && <><StepThree/><button onClick={() => goPreviousStep()}>Back</button></>}
        {step === 4 && <><StepFour/>
        {/* <Link to ={'#'}> Link a ficha del libro*/}
            <button>See book</button>
            {/* </Link> */}
           {/* <Link to ={'#'}> Link a Home*/}
           <button>Discover more</button>
            {/* </Link> */}
            </>} 
        
        {step <4 && <button onClick={() => goNextStep()}>{next}</button>}
       

         </>
    )
}

export default WelcomeForm;