import { useContext } from "react";
import { FormContext } from "../../FormContext";

const StepThree = () =>{
    const { goPreviousStep }:any = useContext(FormContext);

    return(
        <div>Contenido paso 3
            <button onClick={() => goPreviousStep()}>Back</button>
            {/* Otro botón que guarde los keywords marcados en bbdd y avance el step */}
        </div>
        
        )
}

export default StepThree;