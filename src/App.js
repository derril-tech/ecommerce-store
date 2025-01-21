import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Admin from "./pages/Admin/Admin"; // Import Admin component
import ExampleCards from "./components/Card/ExampleCards"; // ExampleCards route
import ExampleButtons from "./components/Button/ExampleButtons"; // ExampleButtons route
import ExampleCategories from "./components/CategoryCard/ExampleCategories"; // ExampleCategories route
import ExampleProductCards from "./components/ProductCard/ExampleProductCards"; // ExampleProductCards route
import ExampleTrending from "./components/TrendingProducts/ExampleTrending"; // ExampleTrending route
import ProtectedRoute from "./hooks/ProtectedRoute"; // Import ProtectedRoute
import Cart from "./pages/Cart/Cart"; // Import the Cart component
import Checkout from "./pages/Checkout/Checkout"; // Import the Checkout component
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import SearchFilter from "./components/SearchFilter/SearchFilter";
import Wishlist from "./pages/Wishlist/Wishlist"; // Import the Wishlist component

function App() {
  return (
    <Router>
      {/* Flexbox Wrapper for Layout */}
      <div className="flex flex-col min-h-screen">
        <Navbar />
        {/* Main Content Area */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<SearchFilter />} />
            <Route path="/example-cards" element={<ExampleCards />} />
            <Route path="/example-buttons" element={<ExampleButtons />} />
            <Route path="/example-categories" element={<ExampleCategories />} />
            <Route
              path="/example-product-cards"
              element={<ExampleProductCards />}
            />
            <Route path="/example-trending" element={<ExampleTrending />} />
            <Route
              path="/admin"
              element={
                <ProtectedRoute>
                  <Admin />
                </ProtectedRoute>
              }
            />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/wishlist" element={<Wishlist />} />{" "}
            {/* Add Wishlist */}
          </Routes>
        </main>
        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
