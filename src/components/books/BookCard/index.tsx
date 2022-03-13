
import { useParams } from 'react-router';
import { useContext } from 'react';

import { FormContext } from '../../../FormContext';

const BookCard = (title:string, author:string, cover:string) =>{
    const {booksData}:any = useContext(FormContext);
    const {isbn} = useParams();
    const thisBook = booksData.filter((book1: {isbn :string}) => book1.isbn === isbn)
    
    return(
        <div>
        <div>
            <h2>{thisBook[0].title}</h2>
            <h3>{thisBook[0].author}</h3>
        </div>
        <div>
            <picture>
            <img src={thisBook[0].cover} alt= {thisBook[0].title}/>
            </picture>
            <span>{thisBook[0].age_group}</span>
            <a href={`${thisBook[0].amazon}`}><button>Comprar</button></a>
            <button>Agregar a favs</button>
        </div>
        <h3>{thisBook[0].price}</h3>
        <h4>{thisBook[0].author} {thisBook[0].publisher}</h4>
        <p>{thisBook[0].description}</p>
        </div>
        )
}

export default BookCard;