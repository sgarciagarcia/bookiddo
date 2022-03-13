
import { useContext } from 'react';
import {Link} from 'react-router-dom'

import { FormContext } from '../../../FormContext';
import TopicButton from '../../welcome/TopicButton';


const ResultError = () =>{
    const {kidData, goPreviousStep}:any = useContext(FormContext);

   
    return(
        <>
        <h1>Ooops!</h1>
        <p>We currently do not have books in our library that matches the following themes: </p>
        <ul>{kidData.selectedTopics.map ((topic:string, i:any) =>  {return <TopicButton key={i} topic={topic} />})}
        </ul>
        <Link to={`/`}>
          <button onClick={goPreviousStep}>Choose different topics</button>
          </Link>
</>
        )
}

export default ResultError;