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
      isbn:book.primary_isbn13,
      title:book.title,
      author:book.author,
      cover:book.book_image,
      description:book.description,
      age_group:book.age_group,
      amazon:book.amazon_product_url,
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
    const id = data[`ISBN:${isbn}`].identifiers.isbn_13
    return {topics: topics, isbn:id}
      //Estoy suponiendo que todos los libros tienen isbn 13 (algunos tienen isbn 10 pero otros no)
  }


  useEffect(() => {

  const CALL_APIS = async (kidData:any) => {

        try {
          if (kidData.kidAge < 8) { //Pequeños
            const response = await fetchOneList('picture-books') //llamo a lista NYT
            const openLibRes = await Promise.all( //Llamo a OpenLib con el isbn y consigo subjects
              response.map((book:any) => fetchSubjects(book.isbn)) //Hace 1 llamada por cada libro de la lista NYT
            )
            const filteredBooks:any = openLibRes.reduce( (filtered:any, book:any) => { //Compara los topics de OpenLibrary con los de kidData y filtra  y se queda sólo con el isbn de los que nos valen.
              const checkIfAny = (array_checking: any) => kidData.selectedTopics.some((i: String[]) => array_checking.includes(i)) 
              if (checkIfAny(book.topics)) {
                const validBook = {isbn: book.isbn[0]}
                 filtered.push(validBook);} return filtered
            }, [])

            //Me está devolviendo los ISBN de los libros que quiero mostrar, ahora filtraría la response de NYTimes según esos ISBN para mostrarlo en la UI (lo guardo en setBooksData)
            const definitiveBooks = response.filter((book1: { isbn: any; }) => filteredBooks.some((book2: { isbn: any; }) => book1.isbn === book2.isbn));
            setBooksData(definitiveBooks)
            
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
console.log(booksData)
 
    return(
        <div>Contenido paso 4</div>
        )
}

export default StepFour;