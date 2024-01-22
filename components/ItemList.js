import { swiggyCdn } from "../utils/constants";

const ItemList = ({ items }) => {
  console.log("items", items);
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
        </div>
      ))}
    </div>
  );
};
export default ItemList;
