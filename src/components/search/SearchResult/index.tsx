import "../../../styles/fonts.scss";
import "../../../styles/spacing.scss";

const SearchResult = ({ thisBook }: any) => {
  return (
    <>
      <div className="floating-info">
        <h2>{thisBook.title}</h2>
        <h3>{thisBook.author}</h3>
      </div>
      <div
        className="cover-card cover-preview"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(16,181,212,0.7) 0%, rgba(0,183,175,0) 100%), url(${thisBook.cover})`,
        }}
      >
        {(thisBook.age !== "" || typeof thisBook.age !== undefined) && (
          <span className="bubble age"> {thisBook.age}</span>
        )}
      </div>
    </>
  );
};

export default SearchResult;
