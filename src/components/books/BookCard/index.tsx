import { useParams } from 'react-router';
import { useContext } from 'react';

import '../../../styles/fonts.scss';
import '../../../styles/buttons.scss';
import '../../../styles/spacing.scss';
import './style.scss';
import buy from '../../../images/buy.png';
import fav from '../../../images/fav-fill.png';

import { FormContext } from '../../../FormContext';

const BookCard = () =>{
    const {booksData}:any = useContext(FormContext);
    const {isbn} = useParams();
    const thisBook = booksData.filter((book: {isbn :string}) => book.isbn === isbn)
    return(
        <div className="bg-shape wrapper centered">
                <div className="floating-info">
                    <h1 className="title white">{thisBook[0].title}</h1>
                </div>
                <div className="cover-card cover-preview" style={{ backgroundImage: `linear-gradient(180deg, rgba(16,181,212,0.7) 0%, rgba(0,183,175,0) 100%), url(${thisBook[0].cover})`}}>
                    { thisBook[0].age_group !== '' && <span className ="bubble age"> {thisBook[0].age_group}</span> }
            </div>
            <div className="button-wrapper">
                <a href={`${thisBook[0].amazon}`} target="_blank" rel="noreferrer"><button  className=" secondary-button" ><img src={buy} alt="Buy"/></button></a>
                <button className="secondary-button"><img src={fav} alt="Add to favorites"/></button>
            </div>
            
        <h3 >{thisBook[0].price}</h3>
        <h4 >{thisBook[0].author} {thisBook[0].publisher}</h4>
        <p >{thisBook[0].description}</p>
        </div>
        )
}

export default BookCard;