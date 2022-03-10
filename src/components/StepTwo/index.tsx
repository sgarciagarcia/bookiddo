import { ChangeEvent, useContext } from 'react';


import { FormContext } from '../../FormContext'

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
        <div>
            <h2>What is your kid's name?</h2>
            <form onSubmit={handleSubmit}>
                <label>Name: </label>
                <input 
                type="text"
                name="kidName"
                autoFocus={true}
                placeholder="Write the name..."></input>

                <h3>How old is your kid?</h3>
                <input type="number" min="1" name="kidAge" ></input>
                <button type="submit">Next!</button>
            </form>
        </div>
        )}

export default StepTwo;
