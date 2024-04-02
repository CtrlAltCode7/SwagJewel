import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment,resetValue } from "./redux/userSlice"
// import ResponsiveAppBar from "./pages/ResponsiveAppBar.jsx";
import Index from "./pages/NavBar/index.jsx";

function Home() {
  return (
    <div style={{ padding: 20 }}>
      <h2>Home View</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adip.</p>
    </div>
  );
}

function HomePage() {
  const { user } = useSelector(state=>state);
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

  


  console.log('user', user.value)
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

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="home" element={<HomePage />} />

        </Routes>
      </Router>
    </>
  );
}

export default App;
