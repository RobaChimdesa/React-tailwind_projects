import React from "react";
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";

const ReviewCard = (props) => {
  return (
    <div className="flex flex-col w-4/5 lg:w-96  ml-10 lg:ml-28 my-3 bg-white p-10 rounded-lg shadow gap-5 transition-transform transform hover:scale-105">
      <div className="flex space-x-3">
        <div className="rounded-full">
          <img src={props.img} alt="image" className="rounded-full w-24 h-24" />
        </div>
        <div className="mt-7">
          <div>
            <h2 className="text-2xl font-bold">{props.name}</h2>
          </div>
          <div className="flex">
            <StarIcon className="text-orange-600" />
            <StarIcon className="text-orange-600" />
            <StarIcon className="text-orange-600" />
            <StarHalfIcon className="text-orange-600" />
          </div>
        </div>
      </div>
      <div className="space-y-3 ">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quo,
          quia quis eveniet a similique, officiis itaque quod recusandae sequi
          repellat harum consectetur totam quidem cumque nulla ratione. Debitis,
          porro.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
          soluta distinctio incidunt vitae magni.
        </p>
      </div>
    </div>
  );
};

export default ReviewCard;
