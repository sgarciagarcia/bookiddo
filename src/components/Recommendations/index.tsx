import { useContext, useEffect, useState } from "react";

import "../../styles/fonts.scss";
import "../../styles/buttons.scss";
import "../../styles/spacing.scss";
import "./style.scss";

import { FormContext } from "../../FormContext";
import BookPreview from "../books/BookPreview";
import Loading from "../Loading";

const Recommendations = () => {
  const { setKidData, kidData, getFromDatabase, setBooksData, booksData }: any =
    useContext(FormContext);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(
    () => {
      const loadBooks = async () => {
        setIsLoading(true);
        const recs = await getFromDatabase();
        setIsLoading(false);
        setBooksData(recs.books);
        setKidData(recs);
      };
      // if (booksData[0].isbn === 0 || typeof booksData === undefined){}
      loadBooks();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  if (isLoading) return <Loading />;
  return (
    <div className="bg-white">
      <h1 className="title centered">Stories for {kidData.kidName}: </h1>
      <div className="wrapper">
        <ul className="horizontal-grid">
          {booksData &&
            booksData.map(
              ({ isbn, title, author, cover, description, age_group }: any) => {
                return (
                  <BookPreview
                    title={title}
                    author={author}
                    cover={cover}
                    description={description}
                    key={isbn}
                    isbn={isbn}
                    age={age_group}
                  />
                );
              }
            )}
        </ul>
      </div>
    </div>
  );
};

export default Recommendations;
