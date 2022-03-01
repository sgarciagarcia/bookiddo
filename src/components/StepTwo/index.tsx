import { useState, ChangeEvent, useContext } from 'react';


import { FormContext } from '../../FormContext'

const StepTwo = () =>{
  const {userName, setUserName}:any = useContext(FormContext);

    
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setUserName(e.target.value);
      };
    
      const handleSubmit = () => {
        if (userName.trim()) {
          console.log(userName); 
        }
      };

    return(
        <div>
            <h2>What is your kid's name?</h2>
            <form >
                <label>Name: </label>
                <input 
                onChange={handleChange}
                value={userName}
                autoFocus={true}
                placeholder="Write the name..."></input>
            </form>
            <button onClick={() => handleSubmit()}>Next!</button>
        </div>
        )}

export default StepTwo;