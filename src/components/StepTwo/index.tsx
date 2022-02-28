import { useState, ChangeEvent } from 'react';



const StepTwo = () =>{
    const [userName, setUserName] = useState<string>('');
    const saveUserName = (userName:string) => {
        console.log(userName)
    } //de momento lo guardo en un array pero tengo que guardarlo en la base de datos
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setUserName(e.target.value);
      };
    
    const handleSubmit = () => {

        if (userName.trim()) {
          saveUserName(userName);
        }
      };
    return(
        <div>
            <h2>What is your kid's name?</h2>
            <form onSubmit={handleSubmit}>
                <label>Name: </label>
                <input 
                onChange={handleChange}
                value={userName}
                autoFocus={true}
                placeholder="Write the name..."></input>
            </form>
        </div>
        )}

export default StepTwo;