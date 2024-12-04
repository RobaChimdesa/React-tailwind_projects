import React from "react";

const Button = (props) => {
  return (
    <div>
      <button className="py-2 px-8 bg-blue-700 rounded-full text-white  hover:bg-blue-500">
        {props.title}
      </button>
    </div>
  );
};
export default Button;
