import { useContext } from "react";
import { FormContext } from "../../FormContext";
const StepFour = () =>{
    const { kidData }:any = useContext(FormContext);

    console.log(kidData)
    return(
        <div>Contenido paso 4</div>
        )
}

export default StepFour;