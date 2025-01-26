import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../redux/slices/cartSlice";
import Reviews from "../../components/Reviews/Reviews";
import StarRating from "../../components/StarRating/StarRating";
import SocialShare from "../../components/SocialShare/SocialShare"; // Import SocialShare component

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const product = useSelector((state) =>
    state.products.items.find((item) => item.id === parseInt(id))
  );

  const [selectedImage, setSelectedImage] = useState(
    product?.images?.[0] || product?.image
  );
  const [zoom, setZoom] = useState(false);

  const handleAddToCart = () => {
    if (product) {
      dispatch(addToCart({ ...product, quantity: 1 }));
    }
  };

  const toggleZoom = () => setZoom(!zoom);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!product) {
    return <p className="text-center mt-10">Product not found!</p>;
  }

  const reviews = [
    // Mock reviews data
  ];

  return (
    <div className="p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Image Container */}
        <div className="flex flex-col items-center">
          <div className="w-96 h-96 bg-gray-100 relative overflow-hidden rounded-lg">
            <img
              src={selectedImage}
              alt={product.name}
              className={`w-full h-full object-contain transition-transform duration-300 ${
                zoom ? "scale-125 cursor-zoom-out" : "cursor-zoom-in"
              }`}
              onClick={toggleZoom}
            />
          </div>
          {product.images?.length > 1 && (
            <div className="flex space-x-4 mt-4">
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
          <StarRating rating={product.rating || 0} />
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

          {/* Social Share Component */}
          <div className="mt-6">
            <SocialShare
              url={`https://ecommerce-site.com/product/${product.id}`}
              title={product.name}
            />
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="mt-10">
        <Reviews reviews={reviews} />
      </div>
    </div>
  );
};

export default ProductDetails;
