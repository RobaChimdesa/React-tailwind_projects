import React from "react";
import { image1 } from "../assets";
import Button from "../layouts/Button";
import { perso1 } from "../assets";
const About = () => {
  return (
    <div className=" flex flex-col items-center justify-center pb-24  lg:px-32 px-5 bg-purple-50">
      <h1 className="font-semibold text-center text-4xl mt-24 mb-16 lg:mt-14">
        About Us
      </h1>
      <div className="flex flex-col lg:flex-row gap-5 ">
        <div className="w-full lg:w-2/4 ">
          <img src={perso1} alt="about us" className=" w-full" />
        </div>
        <div className="w-full lg:w-2/4 p-4  space-y-3 ">
          <h2 className="font-semibold text-3xl">What make our coffee special</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            ipsum praesentium qui ab atque, aspernatur minima id architecto
            consequuntur consequatur quasi voluptatem explicabo rerum accusamus
            necessitatibus impedit eveniet illum inventore!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            reiciendis accusantium repellendus! Ipsum, deserunt a at aperiam
            velit quod doloribus sapiente exercitationem quis cumque consequatur
            maiores optio obcaecati magni fuga.
          </p>
          <Button title="Learn More" />
        </div>
      </div>
    </div>
  );
};

export default About;
