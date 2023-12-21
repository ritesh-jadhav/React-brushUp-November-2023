import dummyData from "../utils/mockData";
import { swiggyCdn } from "../utils/constants";
import Card from "./Card";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";

const Body = () => {
  const [resturantList, setRestaurantList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);

  const [searchText, setSearchText] = useState("");

  console.log("Body rendered");
  useEffect(() => {
    fetchData();
  }, []);

  const onlineStatus = useOnline();
  if (onlineStatus === false)
    return (
      <h1>
        Looks like you are offline...please check the internet connection!
      </h1>
    );

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
    setFilteredList(
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
        <input
          id="search-box"
          type="text"
          placeholder="Explore kitchens"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          type="button"
          onClick={() => {
            const searchList = resturantList.filter((restro) =>
              restro.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredList(searchList);
            console.log("restaruntList", resturantList);
            console.log("Filteredlist", filteredList);
          }}
        >
          search
        </button>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = resturantList.filter(
              (restro) => restro?.info?.avgRating > 4.2
            );
            console.log("filtered restro ", filteredList);
            setFilteredList(filteredList);
          }}
        >
          Filter
        </button>
      </div>
      <div className="card-container">
        {filteredList.map((restro) => (
          <Link to={"/restaurant/" + restro.info?.id} key={restro.info?.id}>
            <Card
              name={restro?.info?.name}
              avgRating={restro?.info?.avgRating}
              cloudinaryImageId={swiggyCdn + restro?.info?.cloudinaryImageId}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
