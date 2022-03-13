
const SearchResult = ({thisBook}:any) =>{
    return(
        <>
        <div>
            <h2>{thisBook.title}</h2>
            <h3>{thisBook.author}</h3>
        </div>
        <picture>
        <img src={thisBook.cover} alt= {thisBook.title}/>
        </picture>
        </>
        )
}

export default SearchResult;