

const BookCard = ({title, author, cover}:any) =>{
    return(
        <li>
        <div>
            <h2>{title}</h2>
            <h3>{author}</h3>
        </div>
        <img src={cover} alt= {title}/>
        </li>
        )
}

export default BookCard;