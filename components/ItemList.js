import { useDispatch } from "react-redux";
import { swiggyCdn } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const addItemHandler = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-black  border-b-2 text-left"
        >
          <div className="py-2">
            <span>{item.card.info.name}</span>
            <span> ₹ {item.card.info.price / 100}</span>
          </div>
          <p>{item.card.info.description}</p>
          <div>
            <img src={swiggyCdn + item.card.info.imageId} alt="" />
          </div>
          <div className="flex justify-center">
            <button
              className="p-2 m-2 bg-black text-white border-white rounded-md"
              onClick={() => addItemHandler(item)}
            >
              Add
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
export default ItemList;
