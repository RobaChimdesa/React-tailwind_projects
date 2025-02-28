// home page
import React from "react";
import Button from "../layouts/Button";
import home from "../assets/home.jpg"; // You can keep this for reference if needed
import homepage from "../assets/homepage.jpg"; // Use this as the background image
import hom from "../assets/ho.jpg";

const Home = () => {
  return (
    <div>
      <div
      className="mt-96 md:mt-0 flex flex-col md:flex-row  justify-center gap-32 items-center p-4 font-sans bg-cover bg-center md:h-screen"
      style={{ backgroundImage: `url(${homepage})` }} // Set homepage as the background
    >
     
       
      <div  className="font-serif flex flex-col w-full md:w-2/5 text-white transition-transform transform hover:scale-105 space-y-4 bg-opacity-75  p-4 rounded-3xl bg-orange-950">
        {" "}
       
        <h1 className="md:text-2xl font-bold ">
          Kickstart your day with a steaming cup of coffee that warms your soul!
        </h1>
        <p className="md:text-2xl  text-xl  w-full md:w-3/4">
          Boost your productivity and elevate your mood with a refreshing glass
          of coffee in the morning! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Dolorum atque corrupti ad, aspernatur officia
          perspiciatis quis quisquam. At, inventore. Nam, soluta doloribus! Ex
          ut odit totam et explicabo recusandae hic!
        </p>
        <div className="flex space-x-4 ml-4 md:ml-24">
          <Button title="ADD TO CART" /> 
          <Button title="MORE MENU" />
        </div>
      </div>
      <div className="mt-10 md:mt-0 z-50  transition-transform transform hover:scale-105 ">
        <img
          src={hom}
          alt="Coffee shop"
          className="h-80 md:h-96 w-full rounded-3xl hover:bg-gradient-to-r"
        />
      </div>

    
    </div>
    
    </div>
  );
};

export default Home;
