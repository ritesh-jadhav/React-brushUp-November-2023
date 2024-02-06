import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";
const Cart = () => {
  const cartItem = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="text-center">
      {cartItem.length == 0 && <h1>Cart is empty</h1>}
      <button
        className="text-white bg-black p-2 m-2 border-solid rounded-md"
        onClick={handleClearCart}
      >
        Clear cart
      </button>
      <div className="w-6/12 m-auto p-2">
        <ItemList items={cartItem} />
      </div>
    </div>
  );
};

export default Cart;
