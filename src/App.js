import "./App.css";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { Navbar1 } from "./components/navbar1/Navbar1";
import { Home } from "./components/home/Home";
import { Filters } from "./components/filters/Filters";
import { Product } from "./components/product/Product";
import CartItems from "./components/cartItems/CartItems";
import CheckoutPage from "./components/checkoutPage/CheckoutPage";
import Footer from "./components/footer/Footer";

function App() {
  const [category, setCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <React.Fragment>
      <Router>
        <div className="App1">
          <Navbar1 setSearchTerm={setSearchTerm} />
          <MainContent category={category} setCategory={setCategory} searchTerm={searchTerm} />
          <Footer />
        </div>
      </Router>
    </React.Fragment>
  );
}

const MainContent = ({ category, setCategory, searchTerm }) => {
  const location = useLocation();

  // Define routes where you don't want to show the Filters component
  const hideFilterRoutes = ['/cartItems', '/checkoutPage'];

  return (
    <>
      {/* Conditionally render Filters component */}
      {!hideFilterRoutes.includes(location.pathname) && <Filters setCategory={setCategory} />}
      <Routes>
        <Route exact path='/' element={<Home category={category} searchTerm={searchTerm} />} />
        <Route path='/product/:id' element={<Product />} />
        <Route path='/cartItems' element={<CartItems />} />
        <Route path='/checkoutPage' element={<CheckoutPage />} />
      </Routes>
    </>
  );
};

export default App;
