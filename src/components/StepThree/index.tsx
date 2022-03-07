import { useContext, useState } from "react";
import { FormContext } from "../../FormContext";
import { getLocalStorage } from "../../localStorage";

import TopicButton from "../TopicButton";
const StepThree = () =>{
    const { kidData, setKidData, goPreviousStep, goNextStep, storeInDatabase }:any = useContext(FormContext);
    const [selectedTopics, setSelectedTopics] = useState<String[]>([]);

    const topicNames:any = [
        'Leprechauns',
        'Fiction',
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
        
       const handleSelectedTopics =(topic:string) => { //si el array tiene menos de 4, permite que se almacene el topic pulsado
        if (selectedTopics.length < 4) {
          setSelectedTopics(prevState => [...prevState, topic])
        }
       }

       const unselectTopics =(topic:string) => {
         setSelectedTopics(prevState => prevState.filter(selectedTopic => topic !== selectedTopic )) //quédate los que sean distintos al topic clicado
       } 

       const storeAndNext = () => { //modifica kidData y lo sube a la bbdd
        setKidData((prevState:any) => {
          const newState = {...prevState, selectedTopics}
          storeInDatabase(newState, getLocalStorage('userId')) 
          return newState
        });
        goNextStep();
       }
    return(
        <div>
            
          

            <h2>What does {kidData.kidName} like?</h2>
            <p>(Choose 4)</p>
            <ul className="keyboard">
          {topicNames.map((topic:any, i:any) => {
            const isChecked = selectedTopics.includes(topic)
            return <TopicButton key={i} topic={topic} isChecked={isChecked} handleSelectedTopics={handleSelectedTopics} unselectTopics={unselectTopics} />
          
          }) }
          </ul>
            <button onClick={() => goPreviousStep()}>Back</button>
            <button onClick={() => storeAndNext()}>Done!</button>
        </div>
        
        )
}

export default StepThree;