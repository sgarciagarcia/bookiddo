import { useContext, useState } from "react";
import { FormContext } from "../../FormContext";

import TopicButton from "../TopicButton";
const StepThree = () =>{
    const { kidData, goPreviousStep }:any = useContext(FormContext);
    const [selectedTopics, setSelectedTopics] = useState<String[]>([]);

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
        
       const handleSelectedTopics =(topic:string) => { //si el array tiene menos de 4, permite que se almacene el topic pulsado
        if (selectedTopics.length < 4) {
          setSelectedTopics(prevState => [...prevState, topic])
        }
       }

       const unselectTopics =(topic:string) => {
         setSelectedTopics(prevState => prevState.filter(selectedTopic => topic !== selectedTopic )) //quédate los que sean distintos al topic clicado
       } 

       console.log(selectedTopics)
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
            {/* Otro botón que guarde los keywords marcados en bbdd y avance el step */}
        </div>
        
        )
}

export default StepThree;