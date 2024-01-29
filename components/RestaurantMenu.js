import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurntMenu from "../utils/useRestaurntMenu";
import MenuItemCategory from "./MenuItemCategory";
import {useContext, useState}  from "react";
import UserContext from "../utils/UserContext";

const RestaurantMenu = () => {
  const { restId } = useParams();
  const[showIndex,setShowIndex] = useState(0);
  const menuItems = useRestaurntMenu(restId);
   
  if (menuItems === null) return <Shimmer />;

  const { name, cuisines, avgRating } = menuItems?.cards[2]?.card?.card?.info;

  const { itemCards } =
    menuItems?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card;

  const MenuCategory =
    menuItems?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (category) =>
        category?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
    
  return (
    <div className="restro-menu-card">
      <h3 className="font-bold text-xl text-center my-6">{name}</h3>
      <p className="font-bold text-lg text-center">
        {cuisines.join(",")} - {avgRating} ⭐{" "}
      </p>
      {MenuCategory.map((category,index) => (
        <MenuItemCategory
          key={category?.card?.card.title}
          data={category?.card?.card}
          showItem={index == showIndex ? true : false}
          setShowIndex ={() => setShowIndex(index)}
        />
      ))}
    </div>
  );
};
export default RestaurantMenu;
