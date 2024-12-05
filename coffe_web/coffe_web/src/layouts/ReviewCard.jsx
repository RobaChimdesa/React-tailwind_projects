import React from "react";
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';

const ReviewCard = (props) => {
  return (
    <div className="flex flex-col w-full lg:w-2/6 bg-white p-3 rounde-lg gap-5">
      <div>
        <div>
            <img src={props.img} alt="image" />
        </div>
        <div>
          <div>
            <h2 className="text-lg font-bold">{props.name}</h2>
          </div>
          <div className="flex">
          <StarIcon className='text-orange-600'/>
            <StarIcon className='text-orange-600'/>
            <StarIcon className='text-orange-600'/>
            <StarHalfIcon className='text-orange-600'/>


          </div>
        </div>
      </div>
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quo,
          quia quis eveniet a similique, officiis itaque quod recusandae sequi
          repellat harum consectetur totam quidem cumque nulla ratione. Debitis,
          porro.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
          soluta distinctio incidunt vitae magni. Sint, debitis vitae. Illo non
          perspiciatis nobis incidunt, rem fuga. Quod, omnis officia?
          Voluptatibus, in quod?
        </p>
      </div>
    </div>
  );
};

export default ReviewCard;
