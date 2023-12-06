import { useEffect, useState } from "react";

const useRestaurntMenu = (restId) => {
  const [menuItems, setMenuItems] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(
      "https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.0726295&lng=72.8844721&restaurantId=" +
        restId +
        "&isMenuUx4=false&submitAction=ENTER"
    );
    const json = await response.json();
    console.log("Json data : ", json);
    setMenuItems(json.data);
  };
  return menuItems;
};
export default useRestaurntMenu;
