import { useContext } from 'react';

import '../../../styles/fonts.scss';
import '../../../styles/buttons.scss';
import '../../../styles/spacing.scss';
import './style.scss';

import { FormContext } from '../../../FormContext'


const StepTwo = () =>{
  const {goNextStep, setKidData}:any = useContext(FormContext);
    
   
    
      const handleSubmit = (event:any) => {
        event.preventDefault(); //evita refresh
        setKidData({
        kidName: event.target.kidName.value,
        kidAge: event.target.kidAge.value
        })
        goNextStep();
      };

    return(
      <div className="h100 wrapper bg-gr">
            <form onSubmit={handleSubmit}>
            <h2 className="title white">What is your kid's name?</h2>

                <label>Name: </label>
                <input 
                type="text"
                name="kidName"
                autoFocus={true}
                placeholder="Write the name..." required></input>

                <p className="intro">How old is your kid?</p>
                <input type="number" min="1" max="17" name="kidAge" placeholder="Type a number..." required></input>
                <button type="submit" className="third-button">Next!</button>
            </form>
        </div>
        )}

export default StepTwo;
