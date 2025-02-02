import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slices/cartSlice";

const QuickAddCart = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <button
      className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
      onClick={() => dispatch(addToCart(product))}
    >
      Add to Cart
    </button>
  );
};

export default QuickAddCart;
