import { useContext, useEffect } from "react";

import { FormContext } from '../../FormContext';
import TopicButton from "../welcome/TopicButton";
import './style.scss';
import avatar from '../../images/avatar.svg'

const Account = () => {
    const { setIsLoading, getFromDatabase, setKidData, kidData}:any = useContext(FormContext);
    useEffect (()=>{
        const loadInfo = async()=> {
            setIsLoading(true)
            const recs = await getFromDatabase()
            setKidData(recs) 
        }
        loadInfo()
        setIsLoading(false)
        console.log(kidData)
    }, // eslint-disable-next-line react-hooks/exhaustive-deps
    [])
    const nameOnly = kidData.name.substring(0, kidData.name.indexOf(' '));
    return(
        <div className="bg-shape1 wrapper centered h100">
            <h1>{nameOnly} & {kidData.kidName}</h1>
        <div><img src ={avatar} alt="Avatar"/></div>
        <h2>{kidData.kidName}'s favorite things:</h2> 
        <ul>{kidData.selectedTopics.map ((topic:any, i:any) =>  {return <TopicButton key={i} topic={topic} />})}
        </ul>    
        <button className="secondary-button">Edit profile</button>

        </div>
    )
   
}
export default Account