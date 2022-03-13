

const BookCard = ({title, author, cover, description, age}:any) =>{
    return(
        <li>
        <div>
            <h2>{title}</h2>
            <h3>{author}</h3>
        </div>
        <img src={cover} alt= {title}/>
        <span>{age}</span>
        <p>{description}</p>
        </li>
        )
}

export default BookCard;