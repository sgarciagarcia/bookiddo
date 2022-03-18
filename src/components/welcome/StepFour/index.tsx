import { useContext, useEffect } from "react";
import {Link} from 'react-router-dom'

import '../../../styles/fonts.scss'
import '../../../styles/buttons.scss';
import '../../../styles/spacing.scss';

import { FormContext } from "../../../FormContext";
import { getLocalStorage } from "../../../localStorage";
import SearchResult from '../../search/SearchResult'
import ResultError from '../../search/ResultError'


const StepFour = () =>{
  const {kidData, booksData, setBooksData, storeInDatabase, setIsRegistering, setIsLoading}:any = useContext(FormContext);

  const fetchOneList = async (namelist:string) => {
    const response = await fetch(
      `https://api.nytimes.com/svc/books/v3/lists/current/${namelist}.json?api-key=GiR57J7LMkPxxzuAgWnQ2sH7gSnZ6gpK`
    );
    const data = await response.json();
    return data.results.books.map(({
      primary_isbn13, title, author, book_image, description,age_group, amazon_product_url, publisher, published_date, price
    }:any) => { 
     return {
      isbn: primary_isbn13,
      title: title ?? '',
      author: author ?? 'Author not found',
      cover:book_image ?? 'url default', //tener cover by default
      description:description ?? '',
      age_group: age_group ?? '',
      amazon:amazon_product_url ?? '',
      publisher:publisher ?? 'Publisher not found',
      year:published_date ?? '',
      price: price ?? 'Price not found',
    }} )
  }

  const fetchSubjects = async (isbn:number) => { //llamar api xa obtener subjects de cada isbn
   try {
     const response = await fetch(
      `https://openlibrary.org/api/books?bibkeys=ISBN:${isbn}&format=json&jscmd=data`
    );
    const data = await response.json();
    const isbnData = data[`ISBN:${isbn}`]
    if (isbnData?.subjects && isbnData?.identifiers.isbn_13) {
      const topics = isbnData.subjects.map((book:any) => (book.name));
      const id = isbnData.identifiers.isbn_13
      return {topics: topics, isbn:id}//Estoy suponiendo que todos los libros tienen isbn 13 (algunos tienen isbn 10 pero otros no)
    }
    return null
    
   }
   catch (e) {console.error(e);}
  }
  
  const filterOpenLibRes = (openLibRes: any) =>  openLibRes.filter(Boolean)
  
  const getDefinitiveISBN = ( filteredSubjects:any, kidData:any ) => {
    return filteredSubjects.reduce( (filtered:any, book:any) => { //Compara los topics de OpenLibrary con los de kidData y filtra  y se queda sólo con el isbn de los que nos valen.
    const checkIfAny = (array_checking: any) => kidData.selectedTopics.some((i: String[]) => array_checking.includes(i)) 
    if (checkIfAny(book.topics) && book.isbn) {
      const validBook = {isbn: book.isbn[0]}
       filtered.push(validBook);
      } 
      return filtered
    }, [])
}
  const getDefinitiveBooks = (response: any, definitiveISBN: any) => {
    return response.filter((book1: { isbn: any; }) => definitiveISBN.some((book2: { isbn: any; }) => book1.isbn === book2.isbn));
  }
  useEffect(() => {

  const CALL_APIS = async (kidData:any) => {
        try {
          setIsLoading(true)
          if (kidData.kidAge < 8) { //Pequeños
            const response = await fetchOneList('picture-books') //llamo a lista NYT
            const openLibRes = await Promise.all( //Llamo a OpenLib con el isbn y consigo subjects
              response.map((book:any) => fetchSubjects(book.isbn)) //Hace 1 llamada por cada libro de la lista NYT
            )
            const filteredSubjects = filterOpenLibRes(openLibRes)
            const definitiveISBN:any =  getDefinitiveISBN(filteredSubjects, kidData)

            //Me está devolviendo los ISBN de los libros que quiero mostrar, ahora filtraría la response de NYTimes según esos ISBN para mostrarlo en la UI (lo guardo en setBooksData)
            const definitiveBooks = getDefinitiveBooks (response, definitiveISBN)
            setBooksData(definitiveBooks)

            
          }

          if (kidData.kidAge >=8 && kidData.kidAge < 12) { //Middle grade
             const [list1, list2, list3, list4] = await Promise.all(
               [fetchOneList('childrens-middle-grade'), fetchOneList('childrens-middle-grade-e-book'), fetchOneList('childrens-middle-grade-hardcover'), fetchOneList('childrens-middle-grade-paperback')])
              const openLibRes = await Promise.all(
                [...list1, ...list2,...list3,...list4].map((book) => fetchSubjects(book.isbn))
              )
              const filteredSubjects = filterOpenLibRes(openLibRes)
              const definitiveISBN:any =  getDefinitiveISBN(filteredSubjects, kidData)

            //Me está devolviendo los ISBN de los libros que quiero mostrar, ahora filtraría la response de NYTimes según esos ISBN para mostrarlo en la UI (lo guardo en setBooksData)
            const definitiveBooks =  getDefinitiveBooks ([...list1, ...list2,...list3,...list4], definitiveISBN)
            setBooksData(definitiveBooks)
          }

          if (kidData.kidAge >= 12) { //Young adult
            const [list1, list2, list3, list4, list5, list6] = await Promise.all(
              [fetchOneList('paperback-books'), fetchOneList('series-books'), fetchOneList('young-adult'), fetchOneList('young-adult-e-book'), fetchOneList('young-adult-hardcover'), fetchOneList('young-adult-paperback')])
              const openLibRes = await Promise.all(
                [...list1, ...list2,...list3,...list4, ...list5,...list6].map((book) => fetchSubjects(book.isbn))
              )
              const filteredSubjects = filterOpenLibRes(openLibRes)
              const definitiveISBN:any =  getDefinitiveISBN(filteredSubjects, kidData)

            //Me está devolviendo los ISBN de los libros que quiero mostrar, ahora filtraría la response de NYTimes según esos ISBN para mostrarlo en la UI (lo guardo en setBooksData)
            const definitiveBooks =  getDefinitiveBooks ([...list1, ...list2,...list3,...list4, ...list5,...list6], definitiveISBN)
            setBooksData(definitiveBooks)
         }

        } catch (e) {
          console.error(e);
        }
  };
  CALL_APIS(kidData);
  setIsLoading(false)

  }, // eslint-disable-next-line react-hooks/exhaustive-deps
  []);

  const storeBooks = () => {
    setIsRegistering(false)
    const userData = getLocalStorage('userOuthData') 
    storeInDatabase({
      ...userData,
      ...kidData,
      books: booksData,
    }, userData.userId) 
  } 

  if(booksData.length === 0) return <ResultError/>
  return(
    <div className="wrapper centered h100">
        <h1 className="title white">Hooray!</h1>
        <p>We have found the perfect book for {kidData.kidName}! </p>
        <SearchResult thisBook={booksData[0]}/>
        <Link to={`/bookCards/${booksData[0].isbn}`}>
          <button className="third-button ghost" onClick={storeBooks}>See this book</button>
        </Link>
        <Link to={`/`}>
        <button className="secondary-button" onClick={storeBooks}>Discover more books</button>
        </Link>
</div>
        )
}

export default StepFour;