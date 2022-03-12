import { useContext } from 'react';
import { useParams } from 'react-router';

import { FormContext } from '../../../FormContext'

const BookCard = () =>{
    const {booksData}:any = useContext(FormContext);
    const {isbn} = useParams();
    const thisBook = booksData.filter((book1: { isbn: any; }) => book1.isbn === isbn)
    return(
        <>
        <div>
            Hola este es la ficha del libro
            <h2>{thisBook[0].title}</h2>
            <h3>{thisBook[0].author}</h3>
        </div>
        <picture>
        <img src={thisBook[0].cover} alt= {thisBook[0].title}/>
        </picture>
        </>
        )
}

export default BookCard;