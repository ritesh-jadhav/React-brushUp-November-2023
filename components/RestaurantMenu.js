import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurntMenu from "../utils/useRestaurntMenu";

const RestaurantMenu = () => {
  const { restId } = useParams();

  console.log("Rest Id ::",restId);
  const menuItems = useRestaurntMenu(restId);
  console.log("Menu Items",menuItems);

  if (menuItems === null) return <Shimmer />;

  const { name, cuisines, avgRating } = menuItems?.cards[2]?.card?.card?.info;

  const { itemCards } =
    menuItems?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
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
