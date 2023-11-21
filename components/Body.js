import dummyData from "../utils/mockData";
import { swiggyCdn } from "../utils/constants";
import Card from "./Card";
import { useState } from "react";

const Body = () => {
  const [resturantList, setRestaurantList] = useState(dummyData);

  console.log(resturantList);
  return (
    <div className="rest-container">
      <div className="search">
        <label htmlFor="search-box">Search </label>
        <input id="search-box" type="search" placeholder="Explore kitchens" />
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = resturantList.filter(
              (restro) => restro.info.avgRating > 4.3
            );
          }}
        >
          Filter
        </button>
      </div>
      <div className="card-container">
        {resturantList.map((restro) => (
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
