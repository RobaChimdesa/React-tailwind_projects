import React from "react";

const Button = (props) => {
  return (
    <div>
      <button className="border-2 py-2 px-8 bg-orange-900 rounded-full text-white  hover:bg-orange-800">
        {props.title}
      </button>
    </div>
  );
};
export default Button;
