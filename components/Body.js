import dummyData from "../utils/mockData";
import { swiggyCdn } from "../utils/constants";
import Card from "./Card";
const Body = () => {
  return (
    <div className="rest-container">
      <div className="search">
        <label htmlFor="search-box">Search </label>
        <input id="search-box" type="search" placeholder="Explore kitchens" />
      </div>
      <div className="card-container">
        {dummyData.map((restro) => (
          <Card
            key={restro.info.id}
            name={restro.info.name}
            avgRating={restro.info.avgRating}
            cloudinaryImageId={swiggyCdn + restro.info.cloudinaryImageId}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
