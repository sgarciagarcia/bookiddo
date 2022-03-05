// import { useContext } from "react";
// import { FormContext } from "../../FormContext";
const StepFour = () =>{
    const API_NYT = async () => {
        try {
          const response = await fetch(
            `https://api-sandbox.swipoo.com/get-place?text=${input}`
          );
          const data = await response.json();
          setAutocompleteList(
            data.predictions.map((prediction) => prediction.description)
          );
        } catch (e) {
          console.error(e);
        }
      };

    return(
        <div>Contenido paso 4</div>
        )
}

export default StepFour;