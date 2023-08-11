import RestrauntCard from "./RestrauntCard";
import RESTLIST from "../utils/mockData";

const Body = () => {
    return (
      <div className="body">
        <div className="search">search</div>
        <div className="res-container">
          {RESTLIST.map((restraunt) => (
            <RestrauntCard key={restraunt.id} resData={restraunt} />
          ))}
          {/* <RestrauntCard resData={resList[0]}/> */}
        </div>
      </div>
    );
  };

  export default Body;