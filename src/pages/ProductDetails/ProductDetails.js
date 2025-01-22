import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../redux/slices/cartSlice";
import Reviews from "../../components/Reviews/Reviews"; // Ensure correct path
import StarRating from "../../components/StarRating/StarRating"; // Ensure correct path

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  // Fetch product from Redux store
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
    // Scroll to top when the component is mounted
    window.scrollTo(0, 0);
  }, []);

  if (!product) {
    return <p className="text-center mt-10">Product not found!</p>;
  }

  // Extended mock reviews
  const reviews = [
    {
      id: 1,
      user: "Alice",
      rating: 5,
      comment: "Amazing product!",
      date: "2023-01-01",
    },
    {
      id: 2,
      user: "Bob",
      rating: 4,
      comment: "Good value for money.",
      date: "2023-02-15",
    },
    {
      id: 3,
      user: "Charlie",
      rating: 3,
      comment: "It's okay.",
      date: "2023-03-10",
    },
    {
      id: 4,
      user: "Dave",
      rating: 5,
      comment: "Highly recommend!",
      date: "2023-04-21",
    },
    {
      id: 5,
      user: "Eve",
      rating: 4,
      comment: "Works as expected.",
      date: "2023-05-03",
    },
    {
      id: 6,
      user: "Frank",
      rating: 2,
      comment: "Not what I expected.",
      date: "2023-06-12",
    },
    {
      id: 7,
      user: "Grace",
      rating: 5,
      comment: "Fantastic quality!",
      date: "2023-07-08",
    },
    {
      id: 8,
      user: "Hank",
      rating: 3,
      comment: "Average product.",
      date: "2023-08-19",
    },
    {
      id: 9,
      user: "Ivy",
      rating: 4,
      comment: "Satisfied with my purchase.",
      date: "2023-09-23",
    },
    {
      id: 10,
      user: "Jack",
      rating: 5,
      comment: "Excellent and durable.",
      date: "2023-10-05",
    },
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

          {/* Thumbnails */}
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
          <StarRating rating={product.rating || 0} /> {/* Star Rating */}
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

      {/* Reviews Section */}
      <div className="mt-10">
        <Reviews reviews={reviews} /> {/* Pass reviews to the component */}
      </div>
    </div>
  );
};

export default ProductDetails;
