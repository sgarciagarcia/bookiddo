import { useContext } from "react";

import { FormContext } from '../../../FormContext';
import {Link} from 'react-router-dom';

const BookPreview = ({title, author, cover, description, age, isbn}:any) =>{

    return(
        <li>
        <div className="floating-info">
            <h2>{title}</h2>
            <h3>{author}</h3>
        </div>
         <Link to={`/bookCards/${isbn}`}>
        <div className="book-preview" style={{ backgroundImage: `url(${cover})` }}></div>
        </Link>
        <span>{age}</span>
        <p>{description}</p>
        </li>
        )
}

export default BookPreview;