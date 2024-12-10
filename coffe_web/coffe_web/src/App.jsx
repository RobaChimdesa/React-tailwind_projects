import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import "./App.css";
import Navbar from "./components/navbar";
import Home from "./components/Home";
import Menu from "./components/Menu";
import About from "./components/About";
import Products from "./components/Products";
import Reviews from "./components/Reviews";
import Footer from "./components/Footer";
import SignUp from "./components/SignUp";
import Signin from "./components/Signin";
import  UserDashborad  from "./components/UserDashborad";
import PageForAll from "./components/pageForAll";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-gray-200">
      
      <Router>
      <Routes>
        <Route path="/" element={<PageForAll/>}/>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<UserDashborad/>} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </Router>
    
      
     
    </div>
  );
}

export default App;
