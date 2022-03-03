import { useContext } from "react";
import { FormContext } from "../../FormContext";
import StepThree from "../StepThree";


const TopicButton = ({topic}:any) => {
    const { topicButton }:any = useContext(FormContext);
  


//topicName
//disabled: false
// checked: si true cambia color 
// array topics

const handleClick =() => {
    if (!topicButton.disabled) console.log('Boton no está disabled')
};
//si no disabled, mete topicName en array topics
//checked = true


const handleUnclick = () => {
//checked = false
//si no disabled, saca topicName de array
}

if(topicButton.checked) return <li onClick={handleUnclick}>ROSA {topic}</li>

  return (
    <li onClick={handleClick}>{topic}</li>
  )
}

export default TopicButton