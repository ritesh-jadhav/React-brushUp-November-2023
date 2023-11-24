import dummyData from "../utils/mockData";
import { swiggyCdn } from "../utils/constants";
import Card from "./Card";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [resturantList, setRestaurantList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const apiData = await fetch(
      "https://www.swiggy.com/mapi/homepage/getCards?lat=19.0726295&lng=72.8844721"
    );

    if (!apiData.ok) {
      console.log("api gives status", apiData.status);
    }
    const jsonData = await apiData.json();

    setRestaurantList(
      jsonData.data.success.cards[1].gridWidget.gridElements.infoWithStyle
        .restaurants
    );
  };


  return resturantList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="rest-container">
      <div className="search">
        <label htmlFor="search-box">Search </label>
        <input id="search-box" type="search" placeholder="Explore kitchens" />
        <button
          className="filter-btn"
          onClick={() => {
            console.log("Before", resturantList);
            const filteredList = resturantList.filter(
              (restro) => restro?.info?.avgRating > 4.2
            );
            console.log("filtered restro ", filteredList);
            setRestaurantList(filteredList);
          }}
        >
          Filter
        </button>
      </div>
      <div className="card-container">
        {resturantList.map((restro) => (
          <Card
            key={restro.info?.id}
            name={restro?.info?.name}
            avgRating={restro?.info?.avgRating}
            cloudinaryImageId={swiggyCdn + restro?.info?.cloudinaryImageId}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
