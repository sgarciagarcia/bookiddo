import { useContext } from 'react';

import { FormContext } from '../../FormContext'

const StepOne = () =>{
    const {booksData}:any = useContext(FormContext);
    return(
        <>
        <div>
            <h2>{booksData[0].title}</h2>
            <h3>{booksData[0].author}</h3>
        </div>
        <picture>
        <img src={booksData[0].cover} alt= {booksData[0].title}/>
        </picture>
        </>
        )
}

export default StepOne;