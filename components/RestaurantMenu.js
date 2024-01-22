import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurntMenu from "../utils/useRestaurntMenu";
import MenuItemCategory from "./MenuItemCategory";

const RestaurantMenu = () => {
  const { restId } = useParams();

  console.log("Rest Id ::", restId);
  const menuItems = useRestaurntMenu(restId);
  console.log("Menu Items", menuItems);

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
  console.log(MenuCategory);
  return (
    <div className="restro-menu-card">
      <h3 className="font-bold text-xl text-center my-6">{name}</h3>
      <p className="font-bold text-lg text-center">{cuisines.join(",")} - {avgRating} ⭐ </p>
      {MenuCategory.map( (category) => <MenuItemCategory key={category?.card?.card.title} data={category?.card?.card}/> )}
    </div>
  );
};
export default RestaurantMenu;
