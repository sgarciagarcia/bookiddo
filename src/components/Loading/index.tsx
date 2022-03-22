import loader from "../../images/loader.gif";

const Loading = () => {
  return (
    <div className="h100 bg-gr wrapper centered">
      <p>Loading....</p>
      <img src={loader} alt="Loading content..." />
    </div>
  );
};

export default Loading;
