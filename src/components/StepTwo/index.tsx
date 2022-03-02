import { ChangeEvent, useContext } from 'react';


import { FormContext } from '../../FormContext'

const StepTwo = () =>{
  const {kidData, setKidData}:any = useContext(FormContext);

    
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setKidData({
        ...kidData,
        [e.target.name]: value
      });
      console.log(kidData)
      };
    
      const handleSubmit = () => {
        if (kidData.trim()) {
          console.log(kidData); 
        }
      };

    return(
        <div>
            <h2>What is your kid's name?</h2>
            <form >
                <label>Name: </label>
                <input 
                type="text"
                name="kidname"
                onChange={handleChange}
                value={kidData.kidName}
                autoFocus={true}
                placeholder="Write the name..."></input>
                <h3>How old is your kid?</h3>
                <input type="number"  name="kidage" onChange={handleChange}  value={kidData.kidAge}> </input>
            </form>
            <button onClick={() => handleSubmit()}>Next!</button>
        </div>
        )}

export default StepTwo;