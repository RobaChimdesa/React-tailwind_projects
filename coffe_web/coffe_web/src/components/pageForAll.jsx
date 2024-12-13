import React from "react";
import NavbarForAllUser from "./NavbarForAllUser";
import About from "./About";
import Home from "./Home";
import Footer from "./Footer";
const PageForAll = () => {
  return (
    <div>
      <NavbarForAllUser />
      <div id="home">
        <Home />
      </div>

      <div id="about">
        <About />
      </div>
      <Footer />
    </div>
  );
};

export default PageForAll;
