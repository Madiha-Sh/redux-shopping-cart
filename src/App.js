import React from "react";
import { connect } from 'react-redux'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import Products from "./components/Products/Products";
import Cart from "./components/Cart/Cart";
import SingleItem from "./components/SingleItem/SingleItem";

function App({ current }) {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          {current 
            ? (
              <Route path="/item/:id" element={<SingleItem />} /> 
            ) : (
             <Route path="/" element={<Navigate to="/"/>} />
            )
          }
        </Routes>
      </div>
    </BrowserRouter>
  );
}

const mapStateToProps = (state) => {
  return {
    current: state.shop.currentItem
  }
};

export default connect(mapStateToProps)(App);