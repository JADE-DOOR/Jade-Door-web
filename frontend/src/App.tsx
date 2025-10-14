// import React from "react";
// import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
// import Home from "./Home/Home";
// import Products from "./Products/Products";
// frontend/src/App.tsx

import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import './App.css';
import Fulfillment from "./Fulfillment/Fulfillment";
import Home from "./Home/Home";
import OrderDetail from "./Orders/OrderDetail";
import Orders from "./Orders/Orders";
import PaymentScreen from "./Payment/Payment";
import Products from "./Products/Products";
import './style.css'; // moved from Template/style.css

function App() {
  const openMenu = () => {
    document.querySelector(".sidebar")?.classList.add("open");
  };

  const closeMenu = () => {
    document.querySelector(".sidebar")?.classList.remove("open");
  };

  return (
    <Router>
      <div className="grid-container">
        <link rel="stylesheet" href="style.css" />
        <title>Jet Piranha</title>
        
        <header className="header">
          <div className="brand">
            <button onClick={openMenu}>&#9776;</button>
            <a href="index.html">Jet Piranha</a>
          </div>
          <div className="header-links">
            <Link to="/">Home</Link>
            <Link to="/catalog">Catalog</Link>
            <Link to="/orders">Orders</Link>
            <Link to="/fulfillment">Fulfillment</Link>
            <Link to="/payment">Payment</Link>
            
          </div>
        </header>

        <aside className="sidebar">
          <h3>Shopping Categories</h3>
          <button className="sidebar-close-button" onClick={closeMenu}>
            x
          </button>
          <ul>
            <li>
              <a href="index.html">Pants</a>
            </li>
            <li>
              <a href="index.html">Shirts</a>
            </li>
          </ul>
        </aside>

        <main className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalog" element={<Products />} />
            <Route path="/orders" element={<Orders />}></Route>
            <Route path="/order/:id" element={<OrderDetail />}></Route>
            <Route path="/fulfillment" element={<Fulfillment />} />
            <Route path="/payment" element={<PaymentScreen />}></Route>
          </Routes>

          
        </main>
        <footer>&copy; 2021 Jet Piranha</footer>
      </div>

    </Router>
  );
}

export default App;