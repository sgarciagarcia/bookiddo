import { useContext } from 'react';

import { FormContext } from '../../FormContext'

const StepOne = () =>{

    const { goNextStep } = useContext(FormContext);

    return(
        <div>
            <h1>Welcome!</h1>
            <p>You and your kid are about to experience the greatest adventure of all: reading!</p>
            <p>We need to ask you 2 questions first...</p>
            <button onClick={() => goNextStep()}>Let's Go!</button>
        </div>
        )
}

export default StepOne;