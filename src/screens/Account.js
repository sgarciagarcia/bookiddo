import { useContext, useEffect } from "react";

import { FormContext } from '../FormContext';
import Header from "../components/Header";
import Menu from "../components/Menu";
import TopicButton from "../components/welcome/TopicButton";

const Account = () => {
    const { setIsLoading, getFromDatabase, setKidData, kidData} = useContext(FormContext);
// eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect (()=>{
        const loadInfo = async()=> {
            setIsLoading(true)
            const data = await getFromDatabase()
            setKidData(data.val()) 

        }
        loadInfo()
        setIsLoading(false)
    }, [])
    
    return(
        <>
        <Header/>
        <p>Avatar</p>
        <button>Editar perfil</button>
        <h2>{kidData.kidName}'s favorite things:</h2> 
        <ul>{kidData.selectedTopics.map ((topic, i) =>  {return <TopicButton key={i} topic={topic} />})}
        </ul>    
        <Menu/>   
        </>
    )
   
}
export default Account