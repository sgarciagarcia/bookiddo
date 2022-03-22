import { useContext } from "react";

import { FormContext } from "../FormContext";

import StepOne from "../components/welcome/StepOne";
import StepTwo from "../components/welcome/StepTwo";
import StepThree from "../components/welcome/StepThree";
import StepFour from "../components/welcome/StepFour";

const WelcomeForm = () => {
  const { step }: any = useContext(FormContext);

  return (
    <>
      {/* Progress bar
        Step Content
        Botón next
        Botón back */}
      {step === 1 && <StepOne />}
      {step === 2 && <StepTwo />}
      {step === 3 && <StepThree />}
      {step === 4 && <StepFour />}
    </>
  );
};

export default WelcomeForm;
