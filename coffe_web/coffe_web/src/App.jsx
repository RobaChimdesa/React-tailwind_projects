import { useState } from "react";

// import "./App.css";
import Navbar from "./components/navbar";
import Home from "./components/Home";
import Menu from "./components/Menu";
import About from "./components/About";
import Products from "./components/Products";
import Reviews from "./components/Reviews";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Navbar />
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
          <Reviews/>
        </div>

      </main>
    </div>
  );
}

export default App;
