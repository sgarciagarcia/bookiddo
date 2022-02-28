import { useContext } from "react";
import { FormContext } from "../../FormContext";

const StepThree = () =>{
    const { goPreviousStep } = useContext(FormContext);

    return(
        <div>Contenido paso 3
            <button onClick={() => goPreviousStep()}>Back</button>
        </div>
        
        )
}

export default StepThree;