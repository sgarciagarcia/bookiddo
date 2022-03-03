import { useContext } from "react";
import { FormContext } from "../../FormContext";

import TopicButton from "../TopicButton";
const StepThree = () =>{
    const { kidData, goPreviousStep }:any = useContext(FormContext);
    const topicNames:any = [
        'Adventure and adventurers',
        'Animals',
        'Cartoons and comics',
        'Cats',
        'Dance',
        'Dogs',
        'Dragons',
        'Fairy tales',
        'Fantasy',
        'Friendship',
        'Ghosts',
        'High schools',
        'History',
        'Horror stories',
        'Humorous stories',
        'Love',
        'Magic',
        'Monsters',
        'Movies',
        'Music',
        'Mystery and detective stories',
        'Princesses',
        'Schools',
        'Science fiction',
        'Thriller']
console.log(kidData)
    return(
        <div>
            
          

            <h2>What does {kidData.kidName} like?</h2>
            <p>(Choose 4)</p>
            <ul className="keyboard">
          {topicNames.map((topic:any, i:any) => (
            <TopicButton key={i} topic={topic}/>
          ))}
          </ul>
            <button onClick={() => goPreviousStep()}>Back</button>
            {/* Otro botón que guarde los keywords marcados en bbdd y avance el step */}
        </div>
        
        )
}

export default StepThree;