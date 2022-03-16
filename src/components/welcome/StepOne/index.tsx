import { useContext } from 'react';

import { FormContext } from '../../../FormContext'

const StepOne = () =>{

    const {goNextStep}:any = useContext(FormContext);
    return(
        <div className="h100 wrapper">
            <div>
            <h2 className="title white">Welcome!</h2>
            <p className="intro">You and your kid are about to experience the greatest adventure of all: reading!</p>
            <p className="intro">We need to ask you 3 questions first...</p>
            </div>
           
            <button type="button" className="third-button centered-button" onClick={goNextStep}>Let's Go!</button>
        </div>
        )
}

export default StepOne;