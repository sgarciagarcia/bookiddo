
import { useParams } from 'react-router';
import { useContext } from 'react';

import { FormContext } from '../FormContext'
import BookCard from '../components/books/BookCard';

const BookPage = () => {
    const {booksData} = useContext(FormContext);
    const {isbn} = useParams();
    const thisBook = booksData.filter((book1) => book1.isbn === isbn)
    
    return(
        <>
        <p>Hola, esto es la ficha de un libro y aquí van sus datos</p>
        <BookCard title={thisBook[0].title} cover={thisBook[0].cover} author={thisBook[0].author}/>
        </>
    )
   
}
export default BookPage