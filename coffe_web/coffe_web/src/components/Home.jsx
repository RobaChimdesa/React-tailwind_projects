// import React from "react";
// import Button from "../layouts/Button";
// import home from "../assets/home.jpg"
// import homepage from "../assets/homepage.jpg"
// import hom from "../assets/ho.jpg"
// const Home = () => {
//   return (
//     <div className="background-image:{}
//     mt-10 flex flex-col md:flex-row justify-between font-sans">
//       <div>
//       <h1>
//         Kickstart your day with a steaming cup of coffee that warms your soul
//         and ignites your spirit!
//       </h1>
//       <p className="w-1/2">
//         Boost your productivity and elevate your mood with a refreshing glass
//         of coffee in the morning!
//         Lorem ipsum dolor sit amet consectetur adipisicing elit.
//         Dolorum atque corrupti ad, aspernatur officia perspiciatis quis
//          quisquam. At, inventore. Nam,
//         soluta doloribus! Ex ut odit totam et explicabo recusandae hic!
//       </p>
//       <div>
//         <Button title="ADD TO CARD " />
//         <Button title="MORE MENU" />
//       </div>
//       </div>

//       <div className="">
//         <img src={hom}  alt="coffe shop" className="h-96  w-full rounded-2xl  hover:bg-gradient-to-r"/>
//       </div>
//     </div>
//   );
// };

// export default Home;
import React from "react";
import Button from "../layouts/Button";
import home from "../assets/home.jpg"; // You can keep this for reference if needed
import homepage from "../assets/homepage.jpg"; // Use this as the background image
import hom from "../assets/ho.jpg";

const Home = () => {
  return (
    <div
      className="flex flex-col md:flex-row  justify-center gap-32 items-center p-4 font-sans bg-cover bg-center h-screen"
      style={{ backgroundImage: `url(${homepage})` }} // Set homepage as the background
    >
      <div className="flex flex-col w-full md:w-2/5  transition-transform transform hover:scale-105 space-y-4 bg-opacity-75 bg-black p-4 rounded-lg">
        {" "}
        {/* Optional: Adds a background color for better text contrast */}
        <h1 className="text-2xl font-bold text-white">
          Kickstart your day with a steaming cup of coffee that warms your soul!
        </h1>
        <p className="text-lg text-white w-full md:w-3/4">
          Boost your productivity and elevate your mood with a refreshing glass
          of coffee in the morning! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Dolorum atque corrupti ad, aspernatur officia
          perspiciatis quis quisquam. At, inventore. Nam, soluta doloribus! Ex
          ut odit totam et explicabo recusandae hic!
        </p>
        <div className="flex space-x-4">
          <Button title="ADD TO CART" /> {/* Fixed typo in the button text */}
          <Button title="MORE MENU" />
        </div>
      </div>

      <div className=" md:mt-0 z-50  transition-transform transform hover:scale-105 ">
        <img
          src={hom}
          alt="Coffee shop"
          className="h-80 md:h-96 w-full rounded-2xl hover:bg-gradient-to-r"
        />
      </div>
    </div>
  );
};

export default Home;
