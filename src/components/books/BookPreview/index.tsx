
import {Link} from 'react-router-dom';

const BookPreview = ({title, author, cover, description, age, isbn}:any) =>{

    return(
        <li>
        <div className="floating-info">
            <h2>{title}</h2>
            <h3>{author}</h3>
        </div>
         <Link to={`/bookCards/${isbn}`}>
        <div className="book-preview" style={{ backgroundImage: `linear-gradient(180deg, rgba(16,181,212,0.7) 0%, rgba(0,183,175,0) 100%), url(${cover})` }}>
            <span className="bubble">{age}</span> 
            {/* meter condicional de solo mostrar si esta lleno */}
        </div>
      
        </Link>
        <p className="box-description">{description}</p>
        </li>
        )
}

export default BookPreview;