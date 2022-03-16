import { useContext } from 'react';


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
      <div className="h100 wrapper">
            <form onSubmit={handleSubmit}>
            <h2 className="title white">What is your kid's name?</h2>

                <label>Name: </label>
                <input 
                type="text"
                name="kidName"
                autoFocus={true}
                placeholder="Write the name..."></input>

                <p className="intro">How old is your kid?</p>
                <input type="number" min="1" name="kidAge" ></input>
                <button type="submit">Next!</button>
            </form>
        </div>
        )}

export default StepTwo;
