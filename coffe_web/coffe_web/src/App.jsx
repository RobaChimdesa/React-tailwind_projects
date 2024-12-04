import { useState } from "react";

// import "./App.css";
import Navbar from "./components/navbar";
import Home from "./components/Home";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div >
      <Navbar/>
      <main>
        <div id="home">
             <Home/>
        </div>
      </main>
      
    </div>
  );
}

export default App;
