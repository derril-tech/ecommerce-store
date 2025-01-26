import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromWishlist } from "../../redux/slices/wishlistSlice";

const Wishlist = () => {
  const dispatch = useDispatch();
  const wishlistItems = useSelector((state) => state.wishlist.items);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Wishlist</h1>
      {wishlistItems.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {wishlistItems.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-32 h-32 object-cover rounded mb-4"
              />
              <h3 className="text-lg font-semibold">{item.name}</h3>
              <p className="text-green-500 font-bold">${item.price}</p>
              <button
                onClick={() => dispatch(removeFromWishlist(item.id))}
                className="mt-4 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-lg">Your wishlist is empty!</p>
      )}
    </div>
  );
};

export default Wishlist;
