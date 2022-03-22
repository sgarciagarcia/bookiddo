import { useParams } from 'react-router';
import { useContext, useEffect, useState } from 'react';

import '../../../styles/fonts.scss';
import '../../../styles/buttons.scss';
import '../../../styles/spacing.scss';
import './style.scss';
import buy from '../../../images/buy.png';
import fav from '../../../images/fav-fill.png';

import { FormContext } from '../../../FormContext';

const BookCard = () =>{
    const {setKidData, getFromDatabase, setBooksData, booksData}:any = useContext(FormContext);
    const {isbn} = useParams();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    type booksProps = {
        isbn:number,
        title:string,
        author:string,
        cover:string,
        description:string,
        age_group?:string,
        amazon:string,
        publisher:string,
        subject:String[],
        price:string,
    }
    const [thisBook, setThisBook] = useState<booksProps>({
        isbn:0,
        description:'',
        age_group:'',
        amazon:'',
        title:'',
        author:'',
        cover:'',
        publisher:'',
        subject:[],
        price:''
      });

    useEffect (()=>{
        const loadBooks = async()=> {
            setIsLoading(true)
            const recs = await getFromDatabase()
            setIsLoading(false)
            // setBooksData(recs.books)
            setThisBook(recs.books.find((book: {isbn :string}) => book.isbn === isbn))
            // setKidData(recs) 
        }
        loadBooks();
    },     
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [])
    return(
        <div className="bg-shape wrapper centered">
            <div className="cover-wrapper">
                <div className="floating-info">
                    <h1 className="title white">{thisBook.title}</h1>
                </div>
                <div className="cover-card cover-preview" style={{ backgroundImage: `linear-gradient(180deg, rgba(16,181,212,0.7) 0%, rgba(0,183,175,0) 100%), url(${thisBook.cover})`}}>
                    { thisBook.age_group !== '' && <span className ="bubble age"> {thisBook.age_group}</span> }
                </div>
            <div className="button-wrapper">
                <a href={`${thisBook.amazon}`} target="_blank" rel="noreferrer"><button  className=" secondary-button" ><img src={buy} alt="Buy"/></button></a>
                <button className="secondary-button"><img src={fav} alt="Add to favorites"/></button>
            </div>
            { thisBook.price !== '' && thisBook.price !== '0.00' && <h3>$ {thisBook.price}</h3> }
            </div>
            <div className="info-card">
                <h2>{thisBook.author}</h2>
                <h3>Publisher: {thisBook.publisher}</h3>
                <p >{thisBook.description}</p>
            </div>
        </div>
        )
}

export default BookCard;