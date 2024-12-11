import React,{useState,useEffect} from "react";
import Navbar from "./navbar";
import Home from "./Home";
import Menu from "./Menu";
import About from "./About";
import Products from "./Products";
import Reviews from "./Reviews";
import Footer from "./Footer";
import { useLocation } from "react-router-dom";

const UserDashborad = () => {
  const location = useLocation();
  const {message} = location.state || {}
  const [showMessage, setShowMessage] = useState(false);  

  useEffect(() => {  
    if (message) {  
      setShowMessage(true); // Show the message when component mounts  
      const timer = setTimeout(() => {  
        setShowMessage(false); // Hide the message after 5 seconds  
      }, 5000);  

      return () => clearTimeout(timer); // Cleanup the timer on unmount  
    }  
  }, [message]); 
  return (
    <div>
        <Navbar/>
      <main>
        {message && <p>{message}</p>} 
        <div id="home">
          <Home />
        </div>
        <div id="menu">
          <Menu />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="products">
          <Products />
        </div>
        <div id="reviews">
          <Reviews />
        </div>
        <Footer/>
      </main>
    </div>
  );
};

export default UserDashborad;
