import {Link} from 'react-router-dom';

import '../../../styles/fonts.scss';
import '../../../styles/buttons.scss';
import '../../../styles/spacing.scss';
import './style.scss';

const BookPreview = ({title, author, cover, description, age, isbn}:any) =>{

    return(
        <li>
        <div className="floating-info">
            <h2>{title}</h2>
            <h3>{ author !== '' ? author : 'Author not found'}</h3>
        </div>
         <Link to={`/bookCards/${isbn}`}>
        <div className="book-preview" style={{ backgroundImage: `linear-gradient(180deg, rgba(16,181,212,0.7) 0%, rgba(0,183,175,0) 100%), url(${cover})` }}>
            { age !== '' && <span className ="bubble"> {age}</span> }
            
        </div>
      
        </Link>
        <p className="box-description">{description !== '' ? description : 'Description not found'}</p>
        </li>
        )
}

export default BookPreview;