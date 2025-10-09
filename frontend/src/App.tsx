// frontend/src/App.tsx
import React, { useState } from 'react';
import './App.css';
import './style.css'; // moved from Template/style.css
import { BrowserRouter as Router, Route, Routes, Link} from "react-router-dom";
import Home from "./Home/Home";
import Products from "./Products/Products";

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const openMenu = () => {
    setSidebarOpen(true);
  };
  const closeMenu = () => {
    setSidebarOpen(false);
  };

  return (
    <div className="grid-container">
      <header className="header">
        <div className="brand">
          <button onClick={openMenu} aria-label="Open Menu">
            &#9776;
          </button>
          <a href="/">Jet Piranha</a>
        </div>
        <div className="header-links">
          <a href="/">Home</a>
          <a href="/catalog">Catalog</a>
        </div>
      </header>

      <aside className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
        <h3>Shopping Categories</h3>
        <button className="sidebar-close-button" onClick={closeMenu} aria-label="Close Menu">
          x
        </button>
        <ul>
          <li><a href="/">Pants</a></li>
          <li><a href="/">Shirts</a></li>
        </ul>
      </aside>

      <main className="main">
        <div className="content">
          <ul className="products">
            {Array.from({ length: 5 }).map((_, i) => (
              <li key={i}>
                <div className="product">
                  <img className="product-image" src="/images/d1.jpg" alt="Slim Shirt" />
                  <div className="product-name"><a href="/product">Slim Shirt</a></div>
                  <div className="product-brand">Nike</div>
                  <div className="product-price">$60</div>
                  <div className="product-rating">4.5 Stars (10 Reviews)</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </main>

      <footer className="footer">&copy; {new Date().getFullYear()} Jet Piranha</footer>
    </div>
  );
}
