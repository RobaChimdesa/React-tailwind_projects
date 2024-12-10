import React from "react";
import Navbar from "./navbar";
import Home from "./Home";
import Menu from "./Menu";
import About from "./About";
import Products from "./Products";
import Reviews from "./Reviews";
import Footer from "./Footer";


const UserDashborad = () => {
  return (
    <div>
        <Navbar/>
      <main>
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
