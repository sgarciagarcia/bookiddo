import { useContext, useEffect, useState } from "react";

import '../../styles/fonts.scss';
import '../../styles/buttons.scss';
import '../../styles/spacing.scss';


import { FormContext } from '../../FormContext';
import Loading from '../Loading';

const FavoritesList = () =>{
    const {setKidData, kidData, getFromDatabase, setBooksData}:any = useContext(FormContext);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect (()=>{
        const loadBooks = async()=> {
            setIsLoading(true)
            const recs = await getFromDatabase()
            setIsLoading(false)
            setBooksData(recs.books)
            setKidData(recs) 
        }
        // if (booksData[0].isbn === 0 || typeof booksData === undefined){}
        loadBooks()
    },     
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [])

    if (isLoading) return <Loading /> 
    return (
        <div className='bg-white'>
            <h1 className='title centered'>{kidData.kidName}'s favorites': </h1>
            <div className="wrapper">
                <p>You have not marked any book as favorite yet.</p>
                {/*  <ul className="horizontal-grid">
                    {booksData && booksData.map (({
                    isbn, title, author, cover, description,age_group }:any) => {return <BookPreview title={title} author={author} cover={cover} description={description} key={isbn} isbn={isbn} age={age_group}  />  }) }
                </ul>*/}
            </div> 
        </div>
    )
}

export default FavoritesList;