import React from 'react'
import MenuCard from '../layouts/MenuCard'
import coffe from "../assets/download.jpeg";
import { StoreMenu } from '../layouts/StoreMenu';
const Menu = () => {
  return (
    <div>
      <h1 className='ml-44 my-8 font-semibold text-4xl text-center hover:text-orange-950'>Our Menus</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 m-5 mx-36'>
  
      {StoreMenu.map((item)=>(
      <div key={item.id} className='items-center bg-slate-50 md:ml-0 flex flex-col md:flex-row'>
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
// <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>  
//   {StoreMenu.map((item) => (  
//     <div key={item.id} className='bg-slate-100 flex flex-col items-center'>  
//       <MenuCard  
//         title={item.title}  
//         image={item.img}  
//         description={item.description}   
//       />  
//     </div>  
//   ))}  
// </div>