import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Admin from "./pages/Admin/Admin";
import ExampleCards from "./components/Card/ExampleCards";
import ExampleButtons from "./components/Button/ExampleButtons";
import ExampleCategories from "./components/CategoryCard/ExampleCategories";
import ExampleProductCards from "./components/ProductCard/ExampleProductCards";
import ExampleTrending from "./components/TrendingProducts/ExampleTrending";
import ProtectedRoute from "./hooks/ProtectedRoute";
import Cart from "./pages/Cart/Cart";
import Checkout from "./pages/Checkout/Checkout";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import SearchFilter from "./components/SearchFilter/SearchFilter";
import Wishlist from "./pages/Wishlist/Wishlist";
import SpinWheel from "./components/SpinWheel/SpinWheel";
import Login from "./pages/Login/Login"; // Import the Login page
import useDarkMode from "./darkmode/useDarkMode"; // Import the useDarkMode hook

function App() {
  const [darkMode, setDarkMode] = useDarkMode();

  return (
    <Router>
      {/* Add a class dynamically based on dark mode */}
      <div className={`flex flex-col min-h-screen ${darkMode ? "dark" : ""}`}>
        <Navbar
          darkMode={darkMode}
          toggleDarkMode={() => setDarkMode(!darkMode)}
        />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />{" "}
            {/* Add the Login route */}
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
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/spin-wheel" element={<SpinWheel />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
