// import React ,{useState} from 'react'
// import { useNavigate } from 'react-router-dom';
// import Button from '../layouts/Button';
// import NavbarForAllUser from './NavbarForAllUser';
// import Footer from './Footer';

// const Signin = () => {

    
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
    
//     const navigate = useNavigate();
  
//     const handleSubmit = (e) => {
//       e.preventDefault();
//       navigate("/dashboard");
//     };

//   return (
//     <div>
//      <NavbarForAllUser/>
//     <div className="bg-white shadow-lg justify-center rounded-lg flex flex-col my-32 mx-4 md:ml-80 p-10 md:w-2/6">
//     <form action="" className="space-y-6 w-full" onSubmit={handleSubmit}>
//       <div className="text-center">
//         <h1 className="text-orange-800 font-semibold text-3xl">SignIn Page</h1>
//       </div>
      

//       <div className="bg-slate-100 space-y-2 px-6 py-4 rounded-lg">
//         <label className="block text-sm font-medium text-orange-800">
//           Email
//         </label>
//         <input
//           type="email"
//           className="bg-white border border-gray-300 rounded-md py-2 px-3 w-full focus:outline-none focus:ring-2 focus:ring-orange-800"
//         />
//       </div>

//       <div className="bg-slate-100 space-y-2 px-6 py-4 rounded-lg">
//         <label className="block text-sm font-medium text-orange-800">
//           Password
//         </label>
//         <input
//           type="password"
//           className="bg-white border border-gray-300 rounded-md py-2 px-3 w-full focus:outline-none focus:ring-2 focus:ring-orange-800"
//         />
//       </div>

      

//       <div className="flex justify-center mt-4">
//         <button type='submit'><Button title="Sign In" /></button>
//       </div>
//       <p className="mt-4 text-center">
//           Don't have an account? <a href="/signup" className="text-blue-500">Sign Up</a>
//         </p>
//     </form>
//   </div>
//   <Footer/>
//     </div>
//   )
// }

// export default Signin

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signin = ({ onClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add your authentication logic
    // For now, let's assume login is successful
    onClose(); // Close the login form
    navigate("/dashboard"); // Redirect to the dashboard
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="text-2xl mb-4">Login</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border p-2 mb-4 w-full"
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border p-2 mb-4 w-full"
        required
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full">
        Login
      </button>
      <button
        type="button"
        onClick={onClose}
        className="text-red-500 underline mt-4"
      >
        Cancel
      </button>
    </form>
  );
};

export default Signin;