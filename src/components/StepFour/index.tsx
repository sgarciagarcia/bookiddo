import { useContext, useEffect } from "react";
import { FormContext } from "../../FormContext";
const StepFour = () =>{
  const {kidData, booksData, setBooksData}:any = useContext(FormContext);

  const fetchOneList = async (namelist:string) => {
    const response = await fetch(
      `https://api.nytimes.com/svc/books/v3/lists/current/${namelist}.json?api-key=GiR57J7LMkPxxzuAgWnQ2sH7gSnZ6gpK`
    );
    const data = await response.json();
    return data.results.books.map((book:any) => (
      {
      isbn:book.primary_isbn10,
      description:book.description,
      age_group:book.age_group,
      amazon:book.amazon_product_url,
      title:book.title,
      author:book.author,
      cover:book.book_image,
      publisher:book.publisher,
      year:book.published_date,
      price: book.price,
    }))
  }

  const fetchSubjects = async (isbn:number) => { //llamar api xa obtener subjects de cada isbn
    const response = await fetch(
      `https://openlibrary.org/api/books?bibkeys=ISBN:${isbn}&format=json&jscmd=data`
    );
    const data = await response.json();
    const topics = data[`ISBN:${isbn}`].subjects.map((book:any) => (book.name));
    const isbn = data[`ISBN:${isbn}`].identifiers.isbn_10[0]
    return {topics: topics, isbn:isbn}

  }


  useEffect(() => {

  const CALL_APIS = async (kidData:any) => {

        try {
          if (kidData.kidAge < 8) { //Pequeños
            const response = await fetchOneList('picture-books') //llamo a lista NYT
            const openLibRes = await Promise.all( //Llamo a OpenLib con el isbn y consigo subjects
              response.map((book:any) => fetchSubjects(book.isbn)) //Hace 1 llamada por cada libro de la lista NYT
            )
            //REVISAR PORQUE SOLO ME FUNCIONA CON UN VALOR CONCRETO, NO MIRA KIDDATA.SELECTEDTOPICS
            const filteredBooks = openLibRes.reduce( (filtered:any, book:any) => { //Compara los topics de OpenLibrary con los de kidData y filtra  y se queda sólo con el isbn de los que nos valen.
              if (book.topics.includes('Leprechauns')) {
                let someNewValue = {id: book.id}
                 filtered.push(someNewValue);} return filtered
            }, [])
            //Me está devolviendo los ISBN de los libros que quiero mostrar, ahora filtraría la response de NYTimes
          }

          if (kidData.kidAge >=8 && kidData.kidAge < 12) { //Middle grade
             const [list1, list2, list3, list4] = await Promise.all(
               [fetchOneList('childrens-middle-grade'), fetchOneList('childrens-middle-grade-e-book'), fetchOneList('childrens-middle-grade-hardcover'), fetchOneList('childrens-middle-grade-paperback')])
              const openLibRes = await Promise.all(
                [...list1, ...list2,...list3,...list4].map((book) => fetchSubjects(book.isbn))
              )

            setBooksData([...list1, ...list2,...list3,...list4])
          }

          if (kidData.kidAge >= 12) { //Young adult
            const [list1, list2, list3, list4, list5, list6] = await Promise.all(
              [fetchOneList('paperback-books'), fetchOneList('series-books'), fetchOneList('young-adult'), fetchOneList('young-adult-e-book'), fetchOneList('young-adult-hardcover'), fetchOneList('young-adult-paperback')])
              const openLibRes = await Promise.all(
                [...list1, ...list2,...list3,...list4, ...list5,...list6].map((book) => fetchSubjects(book.isbn))
              )

           setBooksData([...list1, ...list2,...list3,...list4, ...list5,...list6])
         }

        } catch (e) {
          console.error(e);
        }
  };
  CALL_APIS(kidData);
          
  }, []);

  
 
    return(
        <div>Contenido paso 4</div>
        )
}

export default StepFour;