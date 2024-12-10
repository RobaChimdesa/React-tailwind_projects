// Footer.js  
import React from 'react';  
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';  

const Footer = () => {  
  return (  
    <footer className="bg-gray-900 text-white py-6">  
      <div className="container px-4">  
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">  
          <div>  
            <h3 className="font-bold text-xl mb-2">Company Name</h3>  
            <p className="text-gray-400">Address: 123 Main St, Adama, Ethiopia</p>  
            <p className="text-gray-400">Email: robachimdesa123@gmail.com</p>  
            <p className="text-gray-400">Phone: +251983626772</p>  
          </div>  
          <div>  
            <h3 className="font-bold text-xl mb-2">Links</h3>  
            <ul>  
              <li><a className="text-gray-400 hover:text-white" href="#">Home</a></li>  
              <li><a className="text-gray-400 hover:text-white" href="#">About</a></li>  
              <li><a className="text-gray-400 hover:text-white" href="#">Services</a></li>  
              <li><a className="text-gray-400 hover:text-white" href="#">Contact</a></li>  
            </ul>  
          </div>  
          <div>  
            <h3 className="font-bold text-xl mb-2">Follow Us</h3>  
            <div className="flex space-x-4">  
              <a href="#" className="text-gray-400 hover:text-white">  
                <FaFacebook size={20} />  
              </a>  
              <a href="#" className="text-gray-400 hover:text-white">  
                <FaTwitter size={20} />  
              </a>  
              <a href="#" className="text-gray-400 hover:text-white">  
                <FaInstagram size={20} />  
              </a>  
            </div>  
          </div>  
        </div>  
      </div>  
      <div className="text-center mt-6">  
        <p className="text-gray-400 text-sm">© 2024 Company Name. All rights reserved.</p>  
      </div>  
    </footer>  
  );  
};  

export default Footer;