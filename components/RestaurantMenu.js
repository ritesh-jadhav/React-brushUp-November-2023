import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";


const RestaurantMenu = () => {
  const [menuItems, setMenuItems] = useState(null);
  const { restId } = useParams();

  useEffect(() => {
    fetchRestaurantMenu();
  }, []);

  const fetchRestaurantMenu = async () => {
    const response = await fetch(
      "https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.0726295&lng=72.8844721&restaurantId=" +
        restId +
          "&isMenuUx4=false&submitAction=ENTER"
    );
    const responseData = await response.json();
    setMenuItems(responseData.data);
  };
  if (menuItems === null) return <Shimmer />;

  const { name, cuisines, avgRating } = menuItems?.cards[0]?.card?.card?.info;

  const { itemCards } =
    menuItems?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card;
  return (
    <div className="restro-menu-card">
      <h3>{name}</h3>
      <p>{cuisines.join(",")}</p>
      <h5>Rating : {avgRating}</h5>
      <ul>
        {itemCards.map((item) => (
          <li key={item?.card?.info.id}>
            {item?.card?.info?.name} : Rs. {item?.card?.info?.price / 100}{" "}
          </li>
        ))}
      </ul>
      {/*  */}
    </div>
  );
};
export default RestaurantMenu;
