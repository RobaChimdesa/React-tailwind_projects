import React from 'react'
import { perso1 } from "../assets";
import { perso2 } from "../assets";
import { perso3 } from "../assets";

import ReviewCard from '../layouts/ReviewCard';
const Reviews = () => {
  return (
    <div className='flex flex-col lg:flex-row  bg-purple-50  pt-32 pb-20'>
        <ReviewCard img={perso1} name="John" />
        <ReviewCard img={perso2} name="Jane" />
        <ReviewCard img={perso3} name="Bob" />
    </div>
  )
}

export default Reviews
