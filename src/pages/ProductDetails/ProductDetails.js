import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../redux/slices/cartSlice";

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  // Assuming product data is in Redux store
  const product = useSelector((state) =>
    state.products.items.find((item) => item.id === parseInt(id))
  );

  const [selectedImage, setSelectedImage] = useState(
    product?.images?.[0] || product?.image
  ); // Default image
  const [zoom, setZoom] = useState(false); // Zoom toggle

  const handleAddToCart = () => {
    if (product) {
      dispatch(addToCart({ ...product, quantity: 1 }));
    }
  };

  const toggleZoom = () => {
    setZoom(!zoom);
  };

  if (!product) {
    return <p className="text-center mt-10">Product not found!</p>;
  }

  return (
    <div className="p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Product Image with Zoom and 360-Degree View */}
        <div className="relative">
          <div className="flex justify-center">
            <img
              src={selectedImage}
              alt={product.name}
              className={`rounded-lg shadow-lg w-full max-w-md ${
                zoom ? "scale-125 cursor-zoom-out" : "cursor-zoom-in"
              } transition-transform duration-300`}
              onClick={toggleZoom}
            />
          </div>
          {zoom && (
            <p className="absolute top-4 right-4 bg-black text-white text-xs px-2 py-1 rounded">
              Click to exit zoom
            </p>
          )}

          {/* Thumbnails for 360-Degree View */}
          {product.images?.length > 1 && (
            <div className="flex space-x-4 mt-4 justify-center">
              {product.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`View ${index + 1}`}
                  className={`w-16 h-16 rounded shadow cursor-pointer ${
                    image === selectedImage ? "ring-2 ring-green-500" : ""
                  }`}
                  onClick={() => setSelectedImage(image)}
                />
              ))}
            </div>
          )}
        </div>

        {/* Product Details */}
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-green-500 font-bold text-2xl mb-4">
            ${product.price}
          </p>
          <p className="text-gray-700 mb-6">{product.description}</p>
          <button
            onClick={handleAddToCart}
            className="bg-green-500 text-white py-2 px-6 rounded hover:bg-green-600"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
