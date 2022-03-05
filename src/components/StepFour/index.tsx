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
      amazon:book.amazon_product_url
    }))
  }

  const fetchSubjects = async (isbn:number) => { //llamar api xa obtener subjects de cada isbn
    const response = await fetch(
      `https://openlibrary.org/api/books?bibkeys=ISBN:${isbn}&format=json&jscmd=data`
    );
    const data = await response.json();
    data[`ISBN:${isbn}`].subjects.map((book:any) => (book.name))
  }


  useEffect(() => {

  const API_NYT = async (kidData:any) => {
    const bookStore:any = [] //almacen de los datos de ambas API

        try {
          if (kidData.kidAge < 8) { //Pequeños
            const response = await fetchOneList('picture-books') //llamo a lista NYT
            const openLibRes = await Promise.all( //Llamo a OpenLib con el isbn consigo subjects
              response.map((book:any) => fetchSubjects(book.isbn))
            )
            const filteredBooks = openLibRes.filter() //leer de kidData los selectedTopics
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
  API_NYT(kidData);

  }, []);

  console.log(bookStore)
  
 
    return(
        <div>Contenido paso 4</div>
        )
}

export default StepFour;