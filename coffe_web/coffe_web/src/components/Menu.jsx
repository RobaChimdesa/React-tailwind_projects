import React from 'react'
import MenuCard from '../layouts/MenuCard'
import coffe from "../assets/download.jpeg";
import { StoreMenu } from '../layouts/StoreMenu';
const Menu = () => {
  return (
    <div className='bg-purple-50 pb-10 pt-10 '>
      <h1 className=' md:ml-44 my-8 font-semibold text-4xl text-center hover:text-orange-950'>Our Menus</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 m-5 mx-36'>
  
      {StoreMenu.map((item)=>(
      <div key={item.id} className='items-center w-full  md:ml-0 flex flex-col md:flex-row'>
        <MenuCard title={item.title}
        
        imge={item.img}  
        description={item.description} />
        
      </div>
      ))}
      </div>
    </div>
    
  )
}

export default Menu
