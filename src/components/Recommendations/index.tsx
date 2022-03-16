import { useContext, useEffect } from "react";

import './style.scss';
import { FormContext } from '../../FormContext';
import BookPreview from '../books/BookPreview';

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
        if (booksData[0].isbn === 0 || typeof booksData === undefined){loadBooks()}
    },     
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [])
    return (
        <div className='bg-white'>
        <h1 className='title'>Stories for {kidData.kidName}: </h1>
        <div className="wrapper">
        <ul className="horizontal-grid">
            {booksData.map (({
            isbn, title, author, cover, description,age_group, amazon_product_url, publisher, published_date, price
            }:any) => {return <BookPreview title={title} author={author} cover={cover} description={description} key={isbn} isbn={isbn} age={age_group}  />  }) }
        </ul>
        </div>
        </div>
    )
}

export default Recommendations;