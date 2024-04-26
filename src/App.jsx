import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import './App.css'
import { BrowserRouter as Router, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, resetValue } from "./slices/userSlice.js";
// import ResponsiveAppBar from "./pages/ResponsiveAppBar.jsx";
// import Index from "./pages/NavBar/index.jsx";
// import ProductListing from "./pages/ProductListing/ProductListing.jsx";
// import Routes from "./Routes.js";
import AllRoutes from "./Routes.jsx";


function Home() {
  return (
    <div style={{ padding: 20 }}>
      <h2>Home View</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adip.</p>
    </div>
  );
}



function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <AllRoutes />
    </>
  );
}

export default App;
