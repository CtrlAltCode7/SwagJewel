import { useState } from "react";
// import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, resetValue } from "../slices/userSlice";
// import ResponsiveAppBar from "./pages/ResponsiveAppBar.jsx";
// import Index from "./pages/NavBar/index.jsx";
// import ProductListing from "./pages/ProductListing/ProductListing.jsx";

export function HomePage() {
  const { user } = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  const handleReset = () => {
    dispatch(resetValue());
  };

  console.log("user", user.value);
  return (
    <div style={{ padding: 20 }}>
      <h2>Home View {user?.value}</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adip.</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}
