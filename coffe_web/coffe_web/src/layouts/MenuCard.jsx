import React from "react";

const MenuCard = (props) => {
  return (
    <div className="bg-white mt-5 mb-5 gap-1 md:ml-8 mr-8 p-8 border border-gray-300 rounded-lg shadow-lg  transition-transform transform hover:scale-105">
      
      <img src={props.imge} alt="what" className="  rounded-lg mb-4" />
      <h2 className="text-xl md:text-2xl font-bold md: mb-4">{props.title}</h2>
      <p className="text-gray-700 mb-2">{props.description}</p>
      {/* <p className="text-lg font-semibold text-gray-900">{props.value}</p> */}
       <div className="flex flex-row justify-center gap-2  " >
       <button className="px-5 py-2  rounded-2xl text-white text-sm border-2 bg-orange-800 hover:bg-orange-700 ">Hot</button>
       <button className="px-5 py-2  rounded-2xl text-white text-sm border-2 bg-orange-800 hover:bg-orange-700 ">Cold</button>
      
       </div>
    </div>
  );
};

export default MenuCard;
