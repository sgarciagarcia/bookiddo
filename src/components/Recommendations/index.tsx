import { useContext, useEffect } from "react";

import { FormContext } from "../../FormContext";
import BookPreview from '../books/BookPreview'

const Recommendations = () =>{
    const {setKidData, kidData, getFromDatabase, setIsLoading, setBooksData, booksData}:any = useContext(FormContext);
    
    useEffect (()=>{
        const loadBooks = async()=> {
            setIsLoading(true)
            const recs = await getFromDatabase()
            setIsLoading(false)
            setBooksData(recs.val().books)
            setKidData(recs.val()) 
        }
        if (booksData[0].isbn === 0){loadBooks()}
    }, [])
    return (
        <>
        <h2>Stories for {kidData.kidName}: </h2>
        <ul>
            {booksData.map (({
      primary_isbn13, title, author, cover, description,age_group, amazon_product_url, publisher, published_date, price
    }:any) => {return <BookPreview title={title} author={author} cover={cover} description={description} key={primary_isbn13} age={age_group}  />  }) }
            </ul>
        </>
    )
}

export default Recommendations;