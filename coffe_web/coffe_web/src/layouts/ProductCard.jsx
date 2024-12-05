import React from 'react'
import Button from './Button'
import StarIcon from '@mui/icons-material/Star';
const ProductCard = (props) => {
  return (
    <div className='w-full  bg-white p-3 rounded-lg'>
         <h2 className='font-semibold text-xl'>{props.name}</h2>
      <img src={props.img} alt="img" className='rounded-lg'/>
      <div className='flex flex-col items-center mt-5 gap-3'>
       
        <div className='flex'>
            <StarIcon className='text-orange-600'/>
            <StarIcon className='text-orange-600'/>
            <StarIcon className='text-orange-600'/>
            <StarIcon className='text-orange-600'/>
        </div>
        <h3 className='font-semibold text-lg'>{props.prize}</h3>
        <Button title="Add To Card" />

      </div>
    </div>
  )
}

export default ProductCard
