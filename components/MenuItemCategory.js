import  {useState} from "react";
import ItemList from "./ItemList";

const MenuItemCategory = ({ data }) => {
    const[showItem,setShowItem] = useState(false);

    const handleClick =() =>{
        console.log("clicked")
        setShowItem(!showItem)
    }

  return (
    <div>
      <div className="w-6/12 bg-gray-300 shadow-lg p-4 mx-auto my-4 ">
        <div className="flex justify-between cursor-pointer" onClick={handleClick}>
          <span className="font-bold">
            {data.title} ({data.itemCards.length})
          </span>
          <span>⬇️</span>
        </div>
        {showItem && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default MenuItemCategory;
