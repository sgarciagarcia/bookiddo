const BookCard = (title:string, author:string, cover:string) =>{
  
    return(
        <>
        <div>
            <h2>{title}</h2>
            <h3>{author}</h3>
        </div>
        <picture>
        <img src={cover} alt= {title}/>
        </picture>
        </>
        )
}

export default BookCard;